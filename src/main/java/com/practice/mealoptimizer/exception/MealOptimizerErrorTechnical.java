package com.practice.mealoptimizer.exception;

import org.springframework.http.HttpStatus;

import java.util.Arrays;
import java.util.List;

public class MealOptimizerErrorTechnical extends MealOptimizerError {

    public MealOptimizerErrorTechnical(HttpStatus status, String message, List<String> errors) {
        super(status, message, errors);
        this.errorType = "TECHNICAL";
    }

    public MealOptimizerErrorTechnical(HttpStatus status, String message, String error) {
        super(status, message, error);
        this.errorType = "TECHNICAL";
    }
}
