package com.practice.mealoptimizer.dto.response;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class MealDTO {

    @NotNull
    @Digits(integer=500, fraction=0)
    private long mealId;

    @NotBlank
    private String itemName;

    @NotNull
    @Digits(integer=3, fraction=30, message = "meal cost must be a decimal value")
    @Min(value=1, message = "meal cost must be atleast 1")
    private double mealCost;

    @Digits(integer=3, fraction=30, message = "portion must be a decimal value")
    @Min(value=1, message = "portion must be atleast 1")
    private double portion;

    public MealDTO() {
    }

    public MealDTO(@NotNull @Digits(integer = 500, fraction = 0) long mealId, @NotBlank String itemName, @NotNull @Digits(integer = 3, fraction = 30, message = "meal cost must be a decimal value") @Min(value = 1, message = "meal cost must be atleast 1") double mealCost, @Digits(integer = 3, fraction = 30, message = "portion must be a decimal value") @Min(value = 1, message = "portion must be atleast 1") double portion) {
        this.mealId = mealId;
        this.itemName = itemName;
        this.mealCost = mealCost;
        this.portion = portion;
    }

    public long getMealId() {
        return mealId;
    }

    public void setMealId(long mealId) {
        this.mealId = mealId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getMealCost() {
        return mealCost;
    }

    public void setMealCost(double mealCost) {
        this.mealCost = mealCost;
    }

    public double getPortion() {
        return portion;
    }

    public void setPortion(double portion) {
        this.portion = portion;
    }
}