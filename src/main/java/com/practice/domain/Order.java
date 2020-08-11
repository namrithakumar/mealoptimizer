package com.practice.domain;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public class Order {
    private long orderId;
    private List<Meal> mealList;
    private LocalDate dateOfDelivery;
    private Map<String,Integer> nutrientMinLimits;
    private Map<String,Integer> nutrientMaxLimits;

    public Order() {}

    public Order(long orderId, List<Meal> mealList, LocalDate dateOfDelivery, Map<String,Integer> nutrientMinLimits, Map<String,Integer> nutrientMaxLimits) {
        this.orderId = orderId;
        this.mealList = mealList;
        this.dateOfDelivery = dateOfDelivery;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public List<Meal> getMealList() {
        return mealList;
    }

    public void setMealList(List<Meal> mealList) {
        this.mealList = mealList;
    }

    public LocalDate getDateOfDelivery() {
        return dateOfDelivery;
    }

    public void setDateOfDelivery(LocalDate dateOfDelivery) {
        this.dateOfDelivery = dateOfDelivery;
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
}