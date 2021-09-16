package com.example.pengchat_server.service;

import com.example.pengchat_server.model.user.UserEntity;
import com.example.pengchat_server.repo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;

    // 로그인
    public String login(String peng_id, String peng_pw){
        UserEntity user = findByUserId(peng_id);
        if (user != null){
            // bcrypt hash
            String password = BCrypt.hashpw(peng_pw,user.getSalt());
            if(password.equals(user.getUserPw())){
                // jwt Token 생성
                return jwtTokenProvider.generateToken(user.getUserName());
            }
        }
        return null;
    }
    // 회원가입
    public Boolean signup(String peng_id, String peng_pw, String peng_name, String peng_email){
        // salt 생성
        String salt = BCrypt.gensalt();
        // password hash
        String password = BCrypt.hashpw(peng_pw,salt);
        UserEntity user = new UserEntity(peng_id,password,salt,peng_name,peng_email);
        save(user);
        return true;
    }

    public UserEntity findByUserId(String userId){
        return userRepository.findByUserId(userId);
    }

    public void save(UserEntity user){
        userRepository.save(user);
    }

    public void updateByUserId(String userId, UserEntity user){
        UserEntity e = userRepository.findByUserId(userId);

        if (e != null){
            e.setUserPw(user.getUserPw());
            e.setUserName(user.getUserName());
            e.setUserEmail(user.getUserEmail());
            userRepository.save(user);
        }
    }
}
