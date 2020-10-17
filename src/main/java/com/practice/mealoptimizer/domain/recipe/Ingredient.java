package com.practice.mealoptimizer.domain.recipe;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Ingredient {

    @Id
    @GeneratedValue
    private Integer id;

    private String name;

    private String description;

    @ManyToOne(cascade=CascadeType.ALL)
    private Recipe recipe;

    @OneToOne(mappedBy = "ingredient",cascade=CascadeType.ALL)
    private Quantity quantity;

    public Ingredient(Integer id, @NotBlank String name, @NotNull String description, Recipe recipe, Quantity quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.recipe = recipe;
        this.quantity = quantity;
    }

    public Ingredient() { }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonIgnore
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @JsonIgnore
    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Quantity getQuantity() {
        return quantity;
    }

    public void setQuantity(Quantity quantity) {
        this.quantity = quantity;
    }
}