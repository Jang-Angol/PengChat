package com.example.pengchat_server.model.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

    private long id;

    private String userId;
    private String userPw;
    private String userName;
    private String userEmail;

    private int active;
    private Role role;
    private Status status;
}
