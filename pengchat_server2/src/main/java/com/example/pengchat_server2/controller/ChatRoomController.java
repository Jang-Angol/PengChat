package com.example.pengchat_server2.controller;

import com.example.pengchat_server2.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
@RequestMapping("/chat")
public class ChatRoomController {

    private final ChatRoomRepository chatRoomRepository;

    // 채팅 리스트 화면
    /*
    * // 모든 채팅방 목록 반환
    *
    * // 채팅방 생성
    *
    * // 채팅방 입장 화면
    *
    * // 특정 채팅방 조회회
    * */
}
