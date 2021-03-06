package com.example.pengchat_server2.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String token = null;
        // Header에서 JWT 토큰 추출
        if (req.getHeader("X-AUTH-TOKEN") != null) {
            token = jwtTokenProvider.resolveToken(req);
            System.out.println(jwtTokenProvider.validateToken(token));
        }
        // 토큰 유효성 확인
        if (token != null && jwtTokenProvider.validateToken(token)) {
            // 토큰으로부터 유저 정보 추출
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            // SecyrityContext에 Authentication 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request, response);
    }
}
