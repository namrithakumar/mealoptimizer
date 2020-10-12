package com.practice.mealoptimizer.domain.recipe;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Ingredient {

    @Id
    private String name; //name is same as itemName. We do not lnk name to itemName for now since we do not use this link anywhere.

    private String description;

    @ManyToOne
    @JoinColumn(name ="recipe_name", nullable = false)
    private Recipe recipe;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "quantity_id", referencedColumnName = "id")
    private Quantity quantity;

    public Ingredient(@NotBlank String name, @NotNull String description, @NotNull Quantity quantity, @NotNull Recipe recipe) {
        this.name = name;
        this.description = description;
        this.recipe = recipe;
        this.quantity = quantity;
    }

    public Ingredient() { }

    public String getName() {
        return name;
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