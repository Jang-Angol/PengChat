package com.example.pengchat_server.model.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private String userId;
    private String userPw;
    private String userName;
    private String userEmail;
    private String token;

    @Builder
    public User(String userId, String userPw, String userName, String userEmail, String token){
        this.userId = userId;
        this.userPw = userPw;
        this.userName = userName;
        this.userEmail = userEmail;
        this.token = token;
    }
}
