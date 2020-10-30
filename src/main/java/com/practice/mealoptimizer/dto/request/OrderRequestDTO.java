package com.practice.mealoptimizer.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.user.User;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

public class OrderRequestDTO {

    @NotNull
    @Size(min=4, max=4, message="select atleast 4 items")
    @JsonProperty("mealSelected")
    private List<String> itemNames;

    @NotNull
    @Future
    @JsonProperty("deliveryDate")
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    @NotNull
    private List<OptimizationType> optimizationTypes;

    @NotBlank
    private String username;

    public OrderRequestDTO(@NotNull @Size(min = 4, max = 4, message = "select atleast 4 items") List<String> itemNames, @NotNull @Future LocalDate dateOfDelivery, @NotNull @Size(min = 2, max = 2, message = "select exactly 2 optimization types") List<OptimizationType> optimizationTypes, String username) {
        this.itemNames = itemNames;
        this.dateOfDelivery = dateOfDelivery;
        this.optimizationTypes = optimizationTypes;
        this.username = username;
    }

    public OrderRequestDTO() {}

    public List<String> getItemNames() {
        return itemNames;
    }

    public void setItemNames(List<String> itemNames) {
        this.itemNames = itemNames;
    }

    public LocalDate getDateOfDelivery() {
        return dateOfDelivery;
    }

    public void setDateOfDelivery(LocalDate dateOfDelivery) {
        this.dateOfDelivery = dateOfDelivery;
    }

    public List<OptimizationType> getOptimizationTypes() {
        return optimizationTypes;
    }

    public void setOptimizationTypes(List<OptimizationType> optimizationTypes) {
        this.optimizationTypes = optimizationTypes;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}