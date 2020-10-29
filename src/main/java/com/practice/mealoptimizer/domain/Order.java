package com.practice.mealoptimizer.domain;

import com.practice.mealoptimizer.domain.user.User;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="orders")
@IdClass(OrderId.class)
public class Order implements Serializable {

    @Id
    private long orderId;

    @Id
    @Enumerated(EnumType.STRING)
    private OptimizationType optimizationType;

    @OneToMany(fetch=FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true)
    @Size(min=4, max=4, message="select atleast 4 meals")
    private List<Meal> mealList;

    @Future(message = "delivery date must be in the future")
    //@Pattern(regexp = "^(0[1-9]|1[0-2])([\\/])([1-3][0-9])(\\/)(20[1-3][0-9])", message="Date format MM/DD/YYYY")
    private LocalDate dateOfDelivery;

    @Transient
    private Map<String,Integer> nutrientMinLimits;

    @Transient
    private Map<String,Integer> nutrientMaxLimits;

    private LocalDate placedAt;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public Order() {}

    public Order(List<Meal> mealList, LocalDate dateOfDelivery, Map<String,Integer> nutrientMinLimits, Map<String,Integer> nutrientMaxLimits, OptimizationType optimizationType, User user) {
        this.mealList = mealList;
        this.dateOfDelivery = dateOfDelivery;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.optimizationType = optimizationType;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @PrePersist
    void setPlacedAt() {
        this.placedAt = LocalDate.now();
    }
}