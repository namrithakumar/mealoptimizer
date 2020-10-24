package com.practice.mealoptimizer.mapper.user;

import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.response.LoginResponseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    public LoginResponseDTO mapUserToLoginResponse(User user, String token, long tokenValidTime);
}