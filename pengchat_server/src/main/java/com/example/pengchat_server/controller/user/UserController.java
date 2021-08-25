package com.example.pengchat_server.controller.user;

import com.example.pengchat_server.model.user.User;
import com.example.pengchat_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    // 로그인 요청 처리
    @PostMapping("/user/login")
    public String login(@RequestParam String peng_id, String peng_pw){
        return "token"
    }

    // 회원 가입 요청 처리
    @PostMapping("/user/signup")
    public String signUp(@RequestParam String peng_id, String peng_pw, String peng_name, String peng_email){
        return "signup";
    }

    // 개인정보 조회
    @GetMapping("/user/{token}")
    public User findUserInfo(){

    }

    // 개인정보 변경
    @PostMapping("/user/modifyInfo")
    public Boolean modifyUserInfo(){

    }

    // 비밀번호 변경
    @PostMapping("/user/modifyPw")
    public Boolean modifyPw(){

    }

}
