package com.practice.mealoptimizer.mapper.user;

import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.response.LoginResponseDTO;
import org.springframework.stereotype.Component;

@Component
public interface UserMapper {

    public LoginResponseDTO mapUserToLoginResponse(User user);
}