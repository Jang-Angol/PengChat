package com.example.pengchat_server.model.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity(name="USER_TB")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userId;
    @Column(nullable = false)
    private String userPw;
    @Column(nullable = false)
    private String salt;
    @Column(nullable = false)
    private String userName;
    @Column(nullable = false)
    private String userEmail;

    private String role;
    private String status;



    @Builder
    public UserEntity(String userId, String userPw, String salt, String userName, String userEmail){
        this.userId = userId;
        this.userPw = userPw;
        this.salt = salt;
        this.userName = userName;
        this.userEmail = userEmail;
        this.role = Role.MEMBER.getValue();
        this.status = Status.NONBLOCKED.getValue();
    }
}
