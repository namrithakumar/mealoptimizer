package com.practice.mealoptimizer.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

public class OrderRequestDTO {

    @NotNull
    @Size(min=4, max=4, message="select atleast 4 items")
    private List<String> itemNames;

    @NotNull
    @Future
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    public OrderRequestDTO(@NotNull @Size(min = 4, max = 4, message = "select atleast 4 items") List<String> itemNames, @NotNull @Future LocalDate dateOfDelivery) {
        this.itemNames = itemNames;
        this.dateOfDelivery = dateOfDelivery;
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

}