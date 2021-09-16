package com.example.pengchat_server.controller.user;

import com.example.pengchat_server.model.user.UserEntity;
import com.example.pengchat_server.model.user.UserPrincipal;
import com.example.pengchat_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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
    public String login(@RequestParam String peng_id, String peng_pw, HttpServletResponse response){

       String token = userService.login(peng_id,peng_pw);
       response.setHeader("X-AUTH-TOKEN",token);

        Cookie cookie = new Cookie("X-AUTH-TOKEN", token);
        cookie.setPath("/");
        cookie.setSecure(true);
        response.addCookie(cookie);

        return token;
    }

    // 회원 가입 요청 처리
    @PostMapping("/signup")
    public Boolean signUp(@RequestParam String peng_id, String peng_pw, String peng_name, String peng_email){
        return userService.signup(peng_id, peng_pw, peng_name, peng_email);
    }

    // 개인정보 조회
    @GetMapping("/find/{token}")
    public UserEntity findUserInfo(@PathVariable("token") String token){
        return userService.findByUserId(token);
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
