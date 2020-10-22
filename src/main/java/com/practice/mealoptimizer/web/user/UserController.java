package com.practice.mealoptimizer.web.user;

import com.practice.mealoptimizer.dto.request.LoginRequestDTO;
import com.practice.mealoptimizer.dto.response.LoginResponseDTO;
import com.practice.mealoptimizer.mapper.user.UserMapper;
import com.practice.mealoptimizer.service.user.UserService;
import com.practice.mealoptimizer.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/mealoptimizer/user")
public class UserController {

    private JWTUtil jwtutil;

    private AuthenticationManager authenticationManager;

    private UserMapper userMapper;

    private UserService userService;

    @Autowired
    public UserController(JWTUtil jwtUtil, AuthenticationManager authenticationManager, UserMapper userMapper, UserService userService) {
        this.jwtutil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userMapper = userMapper;
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid LoginRequestDTO loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtutil.generateToken(authentication);
        return new ResponseEntity<LoginResponseDTO>(userMapper.mapUserToLoginResponse(userService.findByUsername(loginRequest.getUsername()), token), HttpStatus.FOUND);
    }
}