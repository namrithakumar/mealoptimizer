package com.practice.mealoptimizer.dto;

import java.time.LocalDate;
import java.util.List;

//OrderRequestDTO
public class OrderDTO {
    private List<String> itemNames;

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