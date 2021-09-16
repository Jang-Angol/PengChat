package com.example.pengchat_server.controller.chat;

import com.example.pengchat_server.model.chat.ChatMessage;
import com.example.pengchat_server.repo.chat.ChatRoomRepository;
import com.example.pengchat_server.service.ChatService;
import com.example.pengchat_server.service.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class ChatController {

    private final ChatRoomRepository chatRoomRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final ChatService chatService;

    /*
        websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
    * */
   @MessageMapping("/chat/message")
    public void message(ChatMessage message, @Header("token") String token){
       String userName = jwtTokenProvider.getUserIdFromJwt(token);
        // 로그인 회원 정보로 대화명 설정
       message.setSender(userName);
       // 채팅방 인원 수 세팅
       message.setUserCount(chatRoomRepository.getUserCount(message.getRoomId()));
       // Websocket에 발행된 메시지를 redis로 발행(publish)
       chatService.sendChatMessage(message);
   }
}
