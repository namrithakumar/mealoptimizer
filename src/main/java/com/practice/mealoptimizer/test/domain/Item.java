package com.practice.mealoptimizer.test.domain;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.util.List;
import java.util.Map;

@Entity
public class Item {

    @Id
    private Long itemId;

    @NotBlank
    private String itemName;

    @NotNull
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="item_nutrition_profile", joinColumns = {@JoinColumn(name="item_id", referencedColumnName = "itemId")})
    @MapKeyJoinColumn(name="nutrient_name")
    @Column(name="nutrient_content")
    private Map<String, Double> nutritionProfile;

    @Min(value=1, message="Cost must be atleast 1")
    private double itemCost;

    @Min(value=1, message="Reward must be atleast 1")
    @Max(value=19, message="Reward must not exceed 19")
    private int reward;

    @Min(value=1, message="Max safe consumption should be atleast 1")
    private int maxSafeConsumption;

    @ElementCollection(targetClass = Category.class, fetch=FetchType.EAGER)
    @CollectionTable(name ="item_category", joinColumns = @JoinColumn(name = "item_id"))
    @Enumerated(EnumType.STRING)
    @Column(name="category_name")
    @Size(min=1, message="Item must belong to atleast 1 category")
    private List<Category> itemCategories;

    public Item(Long itemId, String itemName, double itemCost,  List<Category> itemCategories, int reward, Map<String, Double> nutritionProfile, int maxSafeConsumption) {
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

    public Map<String, Double> getNutritionProfile() {
        return nutritionProfile;
    }

    public void setNutritionProfile(Map<String, Double> nutritionProfile) {
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