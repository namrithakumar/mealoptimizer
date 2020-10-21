package com.practice.mealoptimizer.domain.recipe;

import javax.persistence.*;

@Entity
public class RecipeIngredientQuantityMapper {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "recipe_id", unique = false)
    private Recipe recipe;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "quantity_id")
    private Quantity quantity;

    public RecipeIngredientQuantityMapper() { }

    public RecipeIngredientQuantityMapper(int id, Recipe recipe, Ingredient ingredient, Quantity quantity) {
        this.id = id;
        this.recipe = recipe;
        this.ingredient = ingredient;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public Quantity getQuantity() {
        return quantity;
    }

    public void setQuantity(Quantity quantity) {
        this.quantity = quantity;
    }
}