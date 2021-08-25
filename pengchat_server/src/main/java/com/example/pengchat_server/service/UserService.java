package com.example.pengchat_server.service;

import com.example.pengchat_server.model.user.User;
import com.example.pengchat_server.repo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> findByuserId(String userId){
        Optional<User> user = userRepository.findByUserId(userId);
        return user;
    }

    public User save(User user){
        userRepository.save(user);
        return user;
    }

    public void updateByuserId(String userId, User user){
        Optional<User> e = userRepository.findByUserId(userId);

        if (e.isPresent()){
            e.get().setUserPw(user.getUserPw());
        }
    }
}
