package com.example.pengchat_server.model.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
public class UserPrincipal implements UserDetails {
    private final UserEntity userEntity;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        List<GrantedAuthority> authorities = new ArrayList<>();
        GrantedAuthority authority = new SimpleGrantedAuthority(Role.MEMBER.getValue());
        authorities.add(authority);
        return authorities;
    }

    @Override
    public String getPassword(){
        return this.userEntity.getUserPw();
    }

    @Override
    public String getUsername(){
        return this.userEntity.getUserName();
    }

    @Override
    public boolean isAccountNonExpired(){
        return true;
    }

    @Override
    public boolean isAccountNonLocked(){
        return !this.userEntity.getStatus().equals(Status.BLOCKED.getValue());
    }

    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }

    @Override
    public boolean isEnabled(){
        return !this.userEntity.getStatus().equals(Status.BLOCKED.getValue());
    }
}
