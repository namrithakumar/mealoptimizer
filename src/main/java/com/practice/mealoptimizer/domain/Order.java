package com.practice.mealoptimizer.domain;

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

    @NotNull
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="orders_nutrient_min_limits",
            joinColumns = { @JoinColumn(name="order_id", referencedColumnName = "orderId"),
                            @JoinColumn(name="optimizationType", referencedColumnName = "optimizationType")})
    @MapKeyJoinColumn(name="nutrient_name")
    @Column(name="nutrient_min_limit")
    private Map<String,Integer> nutrientMinLimits;

    @NotNull
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="orders_nutrient_max_limits",
            joinColumns = { @JoinColumn(name="order_id", referencedColumnName = "orderId"),
                            @JoinColumn(name="optimizationType", referencedColumnName = "optimizationType")})
    @MapKeyJoinColumn(name="nutrient_name")
    @Column(name="nutrient_max_limit")
    private Map<String,Integer> nutrientMaxLimits;

    private LocalDate placedAt;

    public Order() {}

    public Order(List<Meal> mealList, LocalDate dateOfDelivery, Map<String,Integer> nutrientMinLimits, Map<String,Integer> nutrientMaxLimits, OptimizationType optimizationType) {
        this.mealList = mealList;
        this.dateOfDelivery = dateOfDelivery;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.optimizationType = optimizationType;
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

    @PrePersist
    void setPlacedAt() {
        this.placedAt = LocalDate.now();
    }
}