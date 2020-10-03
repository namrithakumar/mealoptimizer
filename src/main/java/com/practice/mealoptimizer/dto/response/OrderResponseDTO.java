package com.practice.mealoptimizer.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.practice.mealoptimizer.dto.MealDTO;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

public class OrderResponseDTO {

    @NotNull
    private long orderId;

    @NotNull
    @Size(min=4, max=4, message="error in optimization, 4 meals not available")
    private List<MealDTO> meals;

    @NotNull
    @Min(value=1, message="error in optimization, cost of Order must be atleast $1")
    private double orderCost;

    @NotNull
    @Future
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    public OrderResponseDTO(@NotNull long orderId,
                            @NotNull @Size(min=4, max=4, message="error in optimization, 4 meals not available") List<MealDTO> meals,
                            @NotNull @Min(value=1, message="error in optimization, cost of Order must be atleast $1") double orderCost,
                            @NotNull @Future LocalDate dateOfDelivery) {
        this.orderId = orderId;
        this.meals = meals;
        this.orderCost = orderCost;
        this.dateOfDelivery = dateOfDelivery;
    }

    public OrderResponseDTO() {}

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