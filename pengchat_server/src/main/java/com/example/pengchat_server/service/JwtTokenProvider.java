package com.example.pengchat_server.service;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Slf4j
@Component
public class JwtTokenProvider {

    @Value("${spring.jwt.secret}")
    private String secretKey;

    private long tokenValidMilisecond = 1000L * 60 * 60; // 토큰 유효시간 1시간

    /*
        이름으로 Jwt Token을 생성
    * */
    public String generateToken(String userName){
        Date now = new Date();
        return Jwts.builder()
                .setId(userName)
                .setIssuedAt(now) // 토큰 발행일자
                .setExpiration(new Date(now.getTime() + tokenValidMilisecond)) // 토큰 유효시간
                .signWith(SignatureAlgorithm.HS256, secretKey) // 암호화 알고리즘
                .compact();
    }
    // jwt 복호화하여 이름 획득
    public String getUserNameFromJwt(String jwt){
        return getClaims(jwt).getBody().getId();
    }
    // jwt token 유효성 체크
    public boolean validateToken(String jwt){
        return this.getClaims(jwt) != null;
    }

    private Jws<Claims> getClaims(String jwt) {
        try {
            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwt);
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
            throw ex;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            throw ex;
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            throw ex;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
            throw ex;
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty");
            throw ex;
        }
    }
}
