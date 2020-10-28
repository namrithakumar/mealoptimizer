package com.practice.mealoptimizer.exception;

public class UserException extends Exception {

    private String message;

    public UserException(String message) {
        this.message = message;
    }
}