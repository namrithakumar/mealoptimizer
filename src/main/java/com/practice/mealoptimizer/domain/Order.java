package com.practice.mealoptimizer.domain;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="orders")
@IdClass(OrderId.class)
@NamedEntityGraph(name = "Order.mealList",
        attributeNodes = @NamedAttributeNode("mealList")
)
public class Order implements Serializable {

    @Id
    private long orderId;

    @Id
    @Enumerated(EnumType.STRING)
    private OptimizationType optimizationType;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true)
    @Size(min=4, max=4, message="select atleast 4 meals")
    private List<Meal> mealList;

    @FutureOrPresent(message = "delivery date must be today or in the future")
    //@Pattern(regexp = "^(0[1-9]|1[0-2])([\\/])([1-3][0-9])(\\/)(20[1-3][0-9])", message="Date format MM/DD/YYYY")
    private LocalDate dateOfDelivery;

    @Transient
    private Map<String,Integer> nutrientMinLimits;

    @Transient
    private Map<String,Integer> nutrientMaxLimits;

    private LocalDate placedAt;

    private String username;

    public Order() {}

    public Order(List<Meal> mealList, LocalDate dateOfDelivery, Map<String,Integer> nutrientMinLimits, Map<String,Integer> nutrientMaxLimits, OptimizationType optimizationType, String username) {
        this.mealList = mealList;
        this.dateOfDelivery = dateOfDelivery;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.optimizationType = optimizationType;
        this.username = username;
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

    public double getOrderCost() {
        double orderCost = 0.0;
        for(Meal meal: this.getMealList()) {
            orderCost += meal.getMealCost();
        }
        return orderCost;
    }

    public OptimizationType getOptimizationType() {
        return optimizationType;
    }

    public void setOptimizationType(OptimizationType optimizationType) {
        this.optimizationType = optimizationType;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @PrePersist
    void setPlacedAt() {
        this.placedAt = LocalDate.now();
    }
}