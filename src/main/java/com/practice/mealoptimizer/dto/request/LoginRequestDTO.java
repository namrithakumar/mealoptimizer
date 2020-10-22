package com.practice.mealoptimizer.dto.request;

import javax.validation.constraints.NotBlank;

public class LoginRequestDTO {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public LoginRequestDTO(@NotBlank String username, @NotBlank String password) {
        this.username = username;
        this.password = password;
    }

    public LoginRequestDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}