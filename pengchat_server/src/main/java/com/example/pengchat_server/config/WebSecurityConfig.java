package com.example.pengchat_server.config;

import com.example.pengchat_server.config.filter.JwtAuthenticationFilter;
import com.example.pengchat_server.service.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()// 기본값이 on인 csrf취약점 보안을 해제
                .headers()
                    .frameOptions().sameOrigin() // SockJs는 기본적으로 HTML iframe 요소를 통한 전송을 허용하지 않도록 설정되는데 해당 내용을 해제한다.
                .and()
                    .formLogin() // 권한없이 페이지 접근하면 로그인 페이지로 이동
                .and()
                    .authorizeRequests()
                        .antMatchers("/chat/**").hasRole("USER") // chat으로 시작하는 리소스에 대한 접근 권한 설정
                        .anyRequest().permitAll() // 나머지 리소스에 대한 접근 설정
                .and()
                    .addFilter(new JwtAuthenticationFilter(jwtTokenProvider));
    }
    /*
        In memory에 계정이 생성되어있다는 과정
        추후에 Repository를 생성하여 DB 데이터를 읽어 올 수 있도록 설정
    * */
    /*
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.inMemoryAuthentication()
                .withUser("happyddaddy")
                .password("blablabla")
                .roles("USER");
    }
    */
}
