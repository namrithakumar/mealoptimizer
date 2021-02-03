package com.practice.mealoptimizer.domain.recipe;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;

@Entity
public class Quantity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @DecimalMin(value="0.25", message = "Value must be atleast 0.25")
    private Double amount;

    @NotBlank
    private String measure;

    @OneToOne(cascade=CascadeType.ALL)
    private Ingredient ingredient;

    public Quantity(Integer id, @DecimalMin(value = "0.25", message = "Value must be atleast 0.25") Double amount, @NotBlank String measure, Ingredient ingredient) {
        this.id = id;
        this.amount = amount;
        this.measure = measure;
        this.ingredient = ingredient;
    }

    public Quantity() { }

    @JsonIgnore
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getMeasure() {
        return measure;
    }

    public void setMeasure(String measure) {
        this.measure = measure;
    }

    @JsonIgnore
    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
}