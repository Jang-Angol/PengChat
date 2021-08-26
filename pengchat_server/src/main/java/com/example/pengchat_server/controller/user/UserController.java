package com.example.pengchat_server.controller.user;

import com.example.pengchat_server.model.user.UserEntity;
import com.example.pengchat_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    // 로그인 요청 처리
    @PostMapping("/login")
    public String login(@RequestParam String peng_id, String peng_pw){
        return userService.login(peng_id,peng_pw);
    }

    // 회원 가입 요청 처리
    @PostMapping("/signup")
    public Boolean signUp(@RequestParam String peng_id, String peng_pw, String peng_name, String peng_email){
        return userService.signup(String peng_id, String peng_pw, String peng_name, String peng_email);
    }

    // 개인정보 조회
    @GetMapping("/find/{token}")
    public Optional<UserEntity> findUserInfo(@PathVariable("token") String token){
        return userService.findByuserId(token);
    }

    // 개인정보 변경
    @PostMapping("/modifyInfo")
    public Boolean modifyUserInfo(){
        return true;
    }

    // 비밀번호 변경
    @PostMapping("/modifyPw")
    public Boolean modifyPw(){
        return true;
    }

}
