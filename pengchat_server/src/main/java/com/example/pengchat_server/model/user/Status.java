package com.example.pengchat_server.model.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Status {
    BLOCKED("BLOCKED"),
    NONBLOCKED("NONBLOCKED");

    private String value;
}