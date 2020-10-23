package com.practice.mealoptimizer.util;

import com.practice.mealoptimizer.domain.user.CustomUserDetails;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Component
public class JWTUtil {

    private String secret = "mealoptimizersecret";

    private long validityInMilliseconds = 36000000;

    public String getUsernameFromJWT(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().getSubject();
    }

    public List<String> getRolesFromJwt(String token) {
        Claims claims =  Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
        return claims.get("roles", List.class);
    }

    //Generate token based on roles and username
    public String generateToken(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        final Set<String> roles = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet());
        //ConcurrentHashMap class is thread-safe i.e. multiple threads can operate on a single object without any complications.
        Map<String, Object> roleMap = new ConcurrentHashMap<String, Object>();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + validityInMilliseconds);
        Claims claims = Jwts.claims().setSubject(userDetails.getUsername());
        claims.put("roles", roles);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public boolean validateToken(String authToken) throws Exception {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(authToken);
            return true;
    }

    /* FOR REFERENCE: For a simpler validateToken using username alone,
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired);
    }
    Github: https://github.com/Java-Techie-jt/spring-security-jwt-example/blob/master/src/main/java/com/javatechie/jwt/api/util/JwtUtil.java
     */
}