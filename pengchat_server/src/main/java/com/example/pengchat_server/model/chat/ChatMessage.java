package com.example.pengchat_server.model.chat;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    public ChatMessage() {}

    @Builder
    public ChatMessage(MessageType type, String roomId, String sender, String message, long userCount){
        this.type = type;
        this.roomId = roomId;
        this.sender = sender;
        this.message = message;
        this.userCount = userCount;
    }
    // 메시지 타입 : 입장, 채팅
    public enum MessageType {
        ENTER, QUIT, TALK
    }
    private MessageType type; // 메시지 타입
    private String roomId; // 방번호
    private String sender; // 메시지 보낸 사람
    private String message; // 메시지
    private long userCount; // 채팅방 인원수, 채팅방 내에서 메시지가 전달 될 때 인원 수 갱신시 사용
}
