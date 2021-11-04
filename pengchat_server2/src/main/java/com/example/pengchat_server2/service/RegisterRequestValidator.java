package com.example.pengchat_server2.config.security;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegisterRequestValidator implements validator{

    private static final String idRegExp = "^[A-Za-z0-9]{4,12}$";
    private static final String pwRegExp = "^[\x00-\x7F]{8,20}$";
    private static final String nameKorRegExp = "^[가-힣]+[가-힣\s]*[가-힣]+$";
    private static final String nameEngRegExp = "^[a-zA-Z]+[a-zA-Z\s]*[a-zA-Z]+$";
    private static final String emailRegExp = "^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$";

    private Pattern pattern;

    public RegisterRequestValidator() {
        
    }

    public boolean supports(Class<?> class){
        return RegisterRequest.class.isAssignalbleFrom();
    }

}