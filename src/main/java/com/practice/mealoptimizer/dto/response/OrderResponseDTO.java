package com.practice.mealoptimizer.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

public class OrderResponseDTO {

    @NotNull
    private long orderId;

    @NotNull
    @Size(min=2, max=2, message="error in optimization, exactly 2 meal plans must be available")
    private List<OptimizedMealPlanDTO> mealPlan;

    @NotNull
    @Future
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    @NotNull
    private String optimizationState;

    public OrderResponseDTO(@NotNull long orderId,
                            @NotNull @Future LocalDate dateOfDelivery,
                            @NotNull String optimizationState) {
        this.orderId = orderId;
        this.dateOfDelivery = dateOfDelivery;
        this.optimizationState = optimizationState;
    }

    public OrderResponseDTO() {}

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public LocalDate getDateOfDelivery() {
        return dateOfDelivery;
    }

    public void setDateOfDelivery(LocalDate dateOfDelivery) {
        this.dateOfDelivery = dateOfDelivery;
    }

    public List<OptimizedMealPlanDTO> getMealPlan() {
        return mealPlan;
    }

    public void setMealPlan(List<OptimizedMealPlanDTO> mealPlan) {
        this.mealPlan = mealPlan;
    }

    public String getOptimizationState() { return optimizationState; }

    public void setOptimizationState(String optimizationState) { this.optimizationState = optimizationState; }
}