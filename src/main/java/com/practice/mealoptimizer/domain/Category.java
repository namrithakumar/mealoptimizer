package com.practice.mealoptimizer.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@NamedEntityGraph(name = "Category.item",
        attributeNodes = @NamedAttributeNode("item")
)
public class Category {

    @Id
    @Column(unique=true)
    private String categoryName;

    private String displayValue;

    @ManyToMany(mappedBy="itemCategories")
    @Size(min=1, message="Category must have at least 1 item")
    private List<Item> item = new ArrayList<>();

    public Category(String categoryName, String displayValue) {
        this.categoryName = categoryName;
        this.displayValue = displayValue;
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

    public List<Item> getItem() {
        return item;
    }

    public void setItemList(List<Item> item) {
        this.item = item;
    }
}