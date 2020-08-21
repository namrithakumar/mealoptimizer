package com.practice.mealoptimizer.domain;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long mealId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "orderId", referencedColumnName = "orderId")
    private Order order;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @NotNull
    private Item item;

    @Digits(integer=3, fraction=30, message = "portion must be a decimal value")
    @Min(value=1, message = "portion must be atleast 1")
    private double portion;

    //NOT USED FOR NOW. Will be revisited later.
    /*
    private int smallCount;
    private int mediumCount;
    private int fullCount;*/

    public Meal() {}

    public Meal(long mealId, Item item, double portion, Order order) {
        this.mealId = mealId;
        this.item = item;
        this.portion = portion;
        this.order = order;
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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    @Transient
    public double getMealCost(){
        return this.getPortion() * this.getItem().getItemCost();
    }
}