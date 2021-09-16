package com.example.pengchat_server.service;

import com.example.pengchat_server.model.user.UserEntity;
import com.example.pengchat_server.model.user.UserPrincipal;
import com.example.pengchat_server.repo.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserPrincipalDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    //find user by its username
    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException{
        UserEntity user = this.userRepository.findByUserId(userId);
        return new UserPrincipal(user);
    }
}
