package com.example.pengchat_server.model.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@Entity(name="USER_TB")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;
    private String userPw;
    private String salt;
    private String userName;
    private String userEmail;

    @Builder
    public UserEntity(String userId, String userPw, String salt, String userName, String userEmail){
        this.userId = userId;
        this.userPw = userPw;
        this.salt = salt;
        this.userName = userName;
        this.userEmail = userEmail;
    }
}
