package com.practice.mealoptimizer.dto.response;

import java.util.Map;

public class LoginResponseDTO {

    private Integer id;
    private String username;
    private String email;
    private String preferredDietType;
    private String firstName;
    private String lastName;
    private String address;
    private Map<String, Integer> nutrientMinLimits;
    private Map<String, Integer> nutrientMaxLimits;
    private String token;
    public long tokenValidTime;

    public LoginResponseDTO() { }

    public LoginResponseDTO(Integer id, String username, String email, String preferredDietType, String firstName, String lastName, String address, Map<String, Integer> nutrientMinLimits, Map<String, Integer> nutrientMaxLimits, String token, long tokenValidTime) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.preferredDietType = preferredDietType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.token = token;
        this.tokenValidTime = tokenValidTime;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public void setTokenValidTime(long tokenValidTime) {
        this.tokenValidTime = tokenValidTime;
    }
}