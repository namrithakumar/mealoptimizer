package com.practice.mealoptimizer.mapper.user;

import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.response.LoginResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class UserMapperImpl implements UserMapper {


    @Override
    public LoginResponseDTO mapUserToLoginResponse(User user) {
        return new LoginResponseDTO(user);
    }
}