package com.practice.mealoptimizer.web.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.request.LoginRequestDTO;
import com.practice.mealoptimizer.dto.response.LoginResponseDTO;
import com.practice.mealoptimizer.mapper.user.UserMapper;
import com.practice.mealoptimizer.service.user.UserService;
import com.practice.mealoptimizer.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
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
import java.util.Set;

@RestController
@RequestMapping(path = "/mealoptimizer/user")
public class UserController {

    private JWTUtil jwtutil;

    private AuthenticationManager authenticationManager;

    private UserMapper userMapper;

    private UserService userService;

    private ObjectMapper objectMapper;

    @Autowired
    public UserController(JWTUtil jwtUtil, AuthenticationManager authenticationManager, UserMapper userMapper, UserService userService, ObjectMapper objectMapper) {
        this.jwtutil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userMapper = userMapper;
        this.userService = userService;
        this.objectMapper = objectMapper;
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
        return new ResponseEntity<LoginResponseDTO>(userMapper.mapUserToLoginResponse(userService.findByUsername(loginRequest.getUsername()), token, jwtutil.getTokenValidTimeInMilliseconds()), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/register")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody @Valid User user) throws Exception {
        String password = user.getPassword();
        User savedUser = userService.saveUser(user);
        //User is registered and also logged in immediately. Hence return a login response with jwt.
        return this.login(new LoginRequestDTO(user.getUsername(), password));
    }

    @RequestMapping(method = RequestMethod.GET, path = "/fetchAllUsernames")
    public ResponseEntity<Set<String>> fetchAllUsernames() throws Exception {
        return new ResponseEntity<>(userService.fetchAllUsernames(), HttpStatus.OK);
    }
}