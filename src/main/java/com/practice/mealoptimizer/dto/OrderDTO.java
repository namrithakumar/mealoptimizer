package com.practice.mealoptimizer.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

public class OrderDTO {
    
    @NotNull
    @Size(min=4, max=4, message="select atleast 4 items")
    private List<String> itemNames;

    @NotNull
    @Future
    @JsonFormat(pattern="MM/dd/yyyy")
    private LocalDate dateOfDelivery;

    public OrderDTO() {}

    public OrderDTO(List<String> itemNames, LocalDate dateOfDelivery) {
        this.itemNames = itemNames;
        this.dateOfDelivery = dateOfDelivery;
    }

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