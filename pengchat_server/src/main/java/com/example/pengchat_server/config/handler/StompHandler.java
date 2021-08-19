package com.example.pengchat_server.config.handler;

import com.example.pengchat_server.model.chat.ChatMessage;
import com.example.pengchat_server.repo.chat.ChatRoomRepository;
import com.example.pengchat_server.service.ChatService;
import com.example.pengchat_server.service.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.security.Principal;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {

    private final JwtTokenProvider jwtTokenProvider;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatService chatService;

    // websocket을 통해 들어온 요천이 처리 되기 전 실행된다.
    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel){
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        if (StompCommand.CONNECT == accessor.getCommand()) {
            String jwtToken = accessor.getFirstNativeHeader("token");
            log.info("CONNECT {}", jwtToken);
            // Header의 jwt token 검증
            jwtTokenProvider.validateToken(accessor.getFirstNativeHeader("token"));
        } else if (StompCommand.SUBSCRIBE == accessor.getCommand()){
            // header 정보에서 구독 destination 정보를 얻고, roomId를 추출한다
            String roomId = chatService.getRoomId(Optional.ofNullable((String) message.getHeaders().get("simpDestination")).orElse("InvalidRoomId"));
            // 채팅방에 들어온 클라이언트 sessionId를 roomId와 맵핑해 놓는다.
            String sessionId = (String) message.getHeaders().get("simpSessionId");
            chatRoomRepository.setUserEnterInfo(sessionId, roomId);
            // 채팅장의 인원수를 +1 한다.
            chatRoomRepository.plusUserCount(roomId);
            // 클라이언트 입장 메시지를 채팅방에 발송한다.(redis publish)
            String userName = Optional.ofNullable((Principal) message.getHeaders().get("simpUser")).map(Principal::getName).orElse("UnkownUser");
            chatService.sendChatMessage(ChatMessage.builder().type(ChatMessage.MessageType.ENTER).roomId(roomId).sender(userName).build());
            log.info("SUBSCIRBED {}, {}", userName, roomId);
        } else if (StompCommand.DISCONNECT == accessor.getCommand()){
            // 연결이 종료된 클라이언트 sessionId로 챙비아 id를 얻는다.
            String sessionId = (String) message.getHeaders().get("simpSessionId");
            String roomId = chatRoomRepository.getUserEnterRoomId(sessionId);
            // 채팅방의 인원수를 -1한다.
            chatRoomRepository.minusUserCount(roomId);
            // 클라이언트 퇴장 메시지를 채팅방에 발송한다. (redis publish)
            String userName = Optional.ofNullable((Principal) message.getHeaders().get("simpUser")).map(Principal::getName).orElse("UnknownUser");
            chatService.sendChatMessage(ChatMessage.builder().type(ChatMessage.MessageType.QUIT).roomId(roomId).sender(userName).build());
            // 퇴장한 클라이언트의 roomId 맵핑 정보를 삭제한다.
            chatRoomRepository.removeUserEnterInfo(sessionId);
            log.info("DISCONNECTED {}, {}",sessionId, roomId);
        }
        return message;
    }
}
