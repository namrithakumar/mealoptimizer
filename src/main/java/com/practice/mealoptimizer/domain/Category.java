package com.practice.mealoptimizer.domain;

import javax.persistence.*;
import java.util.List;

@Entity
public class Category {

    @Id
    @Column(unique=true)
    private String categoryName;

    private String displayValue;

    @ManyToMany(mappedBy="itemCategories")
    private List<Item> items;

    public Category(String categoryName, String displayValue, List<Item> items) {
        this.categoryName = categoryName;
        this.displayValue = displayValue;
        this.items = items;
    }

    public Category() {
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public void setDisplayValue(String displayValue) {
        this.displayValue = displayValue;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}