package com.practice.domain;

import java.util.List;
import java.util.Map;

public class Item {

    private Long itemId;
    private String itemName;
    private Map<String, Integer> nutritionProfile;
    private double itemCost;
    private int reward;
    private int maxSafeConsumption;
    private List<Category> itemCategories;

    public static enum Category {
     VEGAN, GLUTENFREE, DAIRYFREE, VEGETARIAN, FATFREE, ALL
    }

    public Item(Long itemId, String itemName, Map<String, Integer> nutritionProfile, int itemCost, int reward, int maxSafeConsumption, List<Category> itemCategories) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.nutritionProfile = nutritionProfile;
        this.itemCost = itemCost;
        this.reward = reward;
        this.maxSafeConsumption = maxSafeConsumption;
        this.itemCategories = itemCategories;
    }

    public Item() { }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Map<String, Integer> getNutritionProfile() {
        return nutritionProfile;
    }

    public void setNutritionProfile(Map<String, Integer> nutritionProfile) {
        this.nutritionProfile = nutritionProfile;
    }

    public double getItemCost() {
        return itemCost;
    }

    public void setItemCost(double itemCost) {
        this.itemCost = itemCost;
    }

    public int getReward() {
        return reward;
    }

    public void setReward(int reward) {
        this.reward = reward;
    }

    public int getMaxSafeConsumption() {
        return maxSafeConsumption;
    }

    public void setMaxSafeConsumption(int maxSafeConsumption) {
        this.maxSafeConsumption = maxSafeConsumption;
    }

    public List<Category> getItemCategories() {
        return itemCategories;
    }

    public void setItemCategories(List<Category> itemCategories) {
        this.itemCategories = itemCategories;
    }
}