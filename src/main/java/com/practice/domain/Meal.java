package com.practice.domain;

import java.util.Map;

public class Meal {
    private long mealId;
    private Item item;
    private double portion;
    private int smallCount;
    private int mediumCount;
    private int fullCount;
    private int mealCost;
    private Map<String, Float> mealNutrition;

    public Meal() {}

    public Meal(long mealId, Item item, double portion, int smallCount, int mediumCount, int fullCount, int mealCost, Map<String, Float> mealNutrition) {
        this.mealId = mealId;
        this.item = item;
        this.portion = portion;
        this.smallCount = smallCount;
        this.mediumCount = mediumCount;
        this.fullCount = fullCount;
        this.mealCost = mealCost;
        this.mealNutrition = mealNutrition;
    }

    public long getMealId() {
        return mealId;
    }

    public void setMealId(long mealId) {
        this.mealId = mealId;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public double getPortion() {
        return portion;
    }

    public void setPortion(double portion) {
        this.portion = portion;
    }

    public int getSmallCount() {
        return smallCount;
    }

    private void setSmallCount(int smallCount) {
        this.smallCount = smallCount;
    }

    public int getMediumCount() {
        return mediumCount;
    }

    private void setMediumCount(int mediumCount) {
        this.mediumCount = mediumCount;
    }

    public int getFullCount() {
        return fullCount;
    }

    private void setFullCount(int fullCount) {
        this.fullCount = fullCount;
    }

    public int getMealCost() {
        return mealCost;
    }

    public void setMealCost(int mealCost) {
        this.mealCost = mealCost;
    }

    public Map<String, Float> getMealNutrition() {
        return mealNutrition;
    }

    public void setMealNutrition(Map<String, Float> mealNutrition) {
        this.mealNutrition = mealNutrition;
    }
}