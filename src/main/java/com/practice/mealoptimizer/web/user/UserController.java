package com.practice.mealoptimizer.web.user;

import com.practice.mealoptimizer.dto.request.LoginRequestDTO;
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

    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginRequestDTO loginRequest) {
        return new ResponseEntity<String>("User logged in", HttpStatus.CREATED);
    }
}