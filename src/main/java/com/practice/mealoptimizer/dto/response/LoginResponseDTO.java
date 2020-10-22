package com.practice.mealoptimizer.dto.response;

import com.practice.mealoptimizer.domain.user.User;

import javax.validation.constraints.NotNull;

public class LoginResponseDTO {

    @NotNull
    public User user;

    public LoginResponseDTO(@NotNull User user) {
        this.user = user;
    }

    public LoginResponseDTO() {}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
