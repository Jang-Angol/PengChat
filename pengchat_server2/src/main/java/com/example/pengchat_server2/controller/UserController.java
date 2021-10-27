package com.example.pengchat_server2.controller;

import com.example.pengchat_server2.config.security.JwtTokenProvider;
import com.example.pengchat_server2.model.User;
import com.example.pengchat_server2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    // 회원가입
    @PostMapping("/signup")
    public Long signup(@RequestBody Map<String, String> user){
        return userRepository.save(User.builder()
                .userId(user.get("peng_id"))
                .userPw(passwordEncoder.encode(user.get("peng_pw")))
                .userName(user.get("peng_name"))
                .userEmail(user.get("peng_email"))
                .roles(Collections.singletonList("ROLE_USER"))
                .build()).getId();

    }

    @GetMapping("/test")
    public String test(){
        return "test";
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user){
        User member = userRepository.findByUserId(user.get("peng_id"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 유저입니다."));
        if (!passwordEncoder.matches(user.get("peng_pw"),member.getUserPw())){
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        String token = jwtTokenProvider.createToken(member.getUserId(), member.getRoles());
        return token;
    }


}
