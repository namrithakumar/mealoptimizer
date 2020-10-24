package com.practice.mealoptimizer.dto.response;

import java.util.Map;

public class LoginResponseDTO {

    private Integer id;
    private String username;
    private String email;
    private String preferredDietType;
    private Map<String, Integer> nutrientMinLimits;
    private Map<String, Integer> nutrientMaxLimits;
    private String token;
    public long tokenValidTime;

    public LoginResponseDTO() { }

    public LoginResponseDTO(Integer id, String username, String email, String preferredDietType, Map<String, Integer> nutrientMinLimits, Map<String, Integer> nutrientMaxLimits, String token, long tokenValidationTime) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.preferredDietType = preferredDietType;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.token = token;
        this.tokenValidTime = tokenValidationTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPreferredDietType() {
        return preferredDietType;
    }

    public void setPreferredDietType(String preferredDietType) {
        this.preferredDietType = preferredDietType;
    }

    public Map<String, Integer> getNutrientMinLimits() {
        return nutrientMinLimits;
    }

    public void setNutrientMinLimits(Map<String, Integer> nutrientMinLimits) {
        this.nutrientMinLimits = nutrientMinLimits;
    }

    public Map<String, Integer> getNutrientMaxLimits() {
        return nutrientMaxLimits;
    }

    public void setNutrientMaxLimits(Map<String, Integer> nutrientMaxLimits) {
        this.nutrientMaxLimits = nutrientMaxLimits;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getTokenValidTime() {
        return tokenValidTime;
    }

    public void setTokenValidationTime(long tokenValidTime) {
        this.tokenValidTime = tokenValidTime;
    }
}