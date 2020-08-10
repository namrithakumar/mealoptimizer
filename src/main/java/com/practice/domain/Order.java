package com.practice.domain;

import com.practice.domain.Meal;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class Order {
    private long orderId;
    private List<Meal> mealList;
    private Date dateOfDelivery;
    private Map<String,Integer> nutrientMinLimits;
    private Map<String,Integer> nutrientMaxLimits;

    public Order() {}

    public Order(long orderId, List<Meal> mealList, Date dateOfDelivery, Map<String,Integer> nutrientMinLimits, Map<String,Integer> nutrientMaxLimits) {
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

    public Date getDateOfDelivery() {
        return dateOfDelivery;
    }

    public void setDateOfDelivery(Date dateOfDelivery) {
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