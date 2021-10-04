package com.example.pengchat_server2.controller;

import com.example.pengchat_server2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    // 로그인
    @PostMapping("/user/login")
    public String login(){
        return "login";
    }

    // 회원가입
    @PostMapping("/user/signup")
    public String signup(){
        return "signup";
    }

    //

}
