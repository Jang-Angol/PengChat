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

    // 로그인
    public String login(String peng_id, String peng_pw){
        Optional<UserEntity> user = findByuserId(peng_id);
        if (user.isPresent()){
            // bcrypt hash
            String password = BCrypt.hashpw(peng_pw,user.get().getSalt());
            if(password.equals(user.get().getUserPw())){
                // 세션 생성
            }
        }
        return null;
    }
    // 회원가입
    public Boolean signup(String peng_id, String peng_pw, String peng_name, String peng_email){
        UserEntity user = new UserEntity(peng_id,peng_pw,BCrypt.gensalt(),peng_name,peng_email);
        save(user);
        return true;
    }

    public Optional<UserEntity> findByuserId(String userId){
        return userRepository.findByUserId(userId);
    }

    public void save(UserEntity user){
        userRepository.save(user);
    }

    public void updateByuserId(String userId, UserEntity user){
        Optional<UserEntity> e = userRepository.findByUserId(userId);

        if (e.isPresent()){
            e.get().setUserPw(user.getUserPw());
            e.get().setUserName(user.getUserName());
            e.get().setUserEmail(user.getUserEmail());
            userRepository.save(user);
        }
    }
}
