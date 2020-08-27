package com.practice.mealoptimizer.exception;

import org.springframework.http.HttpStatus;

import java.util.List;

public class MealOptimizerErrorFunctional extends MealOptimizerError {
    public MealOptimizerErrorFunctional(HttpStatus status, String message, List<String> errors) {
        super(status, message, errors);
        this.errorType = "FUNCTIONAL";
    }

    public MealOptimizerErrorFunctional(HttpStatus status, String message, String error) {
        super(status, message, error);
        this.errorType = "FUNCTIONAL";
    }
}
