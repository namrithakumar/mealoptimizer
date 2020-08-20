package com.practice.mealoptimizer.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

public class OrderDTO {
    
    @NotNull
    @Size(min=4, max=4, message="select atleast 4 items")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<String> itemNames;

    private long orderId;

    private List<MealDTO> meals;

    private double orderCost;

    @NotNull
    @Future
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    public OrderDTO(@NotNull @Size(min = 4, max = 4, message = "select atleast 4 items") List<String> itemNames, @NotNull @Future LocalDate dateOfDelivery) {
        this.itemNames = itemNames;
        this.dateOfDelivery = dateOfDelivery;
    }

    public OrderDTO() {}

    public List<String> getItemNames() {
        return itemNames;
    }

    public void setItemNames(List<String> itemNames) {
        this.itemNames = itemNames;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public List<MealDTO> getMeals() {
        return meals;
    }

    public void setMeals(List<MealDTO> meals) {
        this.meals = meals;
    }

    public double getOrderCost() {
        return orderCost;
    }

    public void setOrderCost(double orderCost) {
        this.orderCost = orderCost;
    }

    public LocalDate getDateOfDelivery() {
        return dateOfDelivery;
    }

    public void setDateOfDelivery(LocalDate dateOfDelivery) {
        this.dateOfDelivery = dateOfDelivery;
    }

}