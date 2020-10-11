package com.practice.mealoptimizer.dto.response;

import com.practice.mealoptimizer.domain.OptimizationType;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

public class OptimizedMealPlanDTO {

    @NotNull
    @Size(min=4, max=4, message="error in optimization, 4 meals not available")
    private List<MealDTO> meals;


    @NotNull
    @Min(value=1, message="error in optimization, cost of meal plan must be atleast $1")
    private double mealPlanCost;

    @NotNull
    private OptimizationType optimizationType;

    public OptimizedMealPlanDTO(@NotNull @Size(min = 4, max = 4, message = "error in optimization, 4 meals not available") List<MealDTO> meals, @NotNull @Min(value = 1, message = "error in optimization, cost of meal plan must be atleast $1") double mealPlanCost, @NotNull OptimizationType optimizationType) {
        this.meals = meals;
        this.mealPlanCost = mealPlanCost;
        this.optimizationType = optimizationType;
    }

    public OptimizedMealPlanDTO() {
    }

    public List<MealDTO> getMeals() {
        return meals;
    }

    public void setMeals(List<MealDTO> meals) {
        this.meals = meals;
    }

    public double getMealPlanCost() {
        return mealPlanCost;
    }

    public void setMealPlanCost(double mealPlanCost) {
        this.mealPlanCost = mealPlanCost;
    }

    public OptimizationType getOptimizationType() {
        return optimizationType;
    }

    public void setOptimizationType(OptimizationType optimizationType) {
        this.optimizationType = optimizationType;
    }
}