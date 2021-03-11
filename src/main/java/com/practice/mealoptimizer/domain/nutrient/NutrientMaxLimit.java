package com.practice.mealoptimizer.domain.nutrient;

public class NutrientMaxLimit {

    private String nutrientName;
    private Integer nutrientMaxLimit;

    public NutrientMaxLimit() {
    }

    public NutrientMaxLimit(String nutrientName, Integer nutrientMaxLimit) {
        this.nutrientName = nutrientName;
        this.nutrientMaxLimit = nutrientMaxLimit;
    }

    public String getNutrientName() {
        return nutrientName;
    }

    public void setNutrientName(String nutrientName) {
        this.nutrientName = nutrientName;
    }

    public Integer getNutrientMaxLimit() {
        return nutrientMaxLimit;
    }

    public void setNutrientMaxLimit(Integer nutrientMaxLimit) {
        this.nutrientMaxLimit = nutrientMaxLimit;
    }
}