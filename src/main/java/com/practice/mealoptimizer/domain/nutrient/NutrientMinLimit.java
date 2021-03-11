package com.practice.mealoptimizer.domain.nutrient;

public class NutrientMinLimit {

    private String nutrientName;
    private Integer nutrientMinLimit;

    public NutrientMinLimit() {
    }

    public NutrientMinLimit(String nutrientName, Integer nutrientMinLimit) {
        this.nutrientName = nutrientName;
        this.nutrientMinLimit = nutrientMinLimit;
    }

    public String getNutrientName() {
        return nutrientName;
    }

    public void setNutrientName(String nutrientName) {
        this.nutrientName = nutrientName;
    }

    public Integer getNutrientMinLimit() {
        return nutrientMinLimit;
    }

    public void setNutrientMinLimit(Integer NutrientMinLimit) {
        this.nutrientMinLimit = NutrientMinLimit;
    }
}