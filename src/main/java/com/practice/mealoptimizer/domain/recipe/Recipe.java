package com.practice.mealoptimizer.domain.recipe;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
public class Recipe {

    @Id
    private String name;

    @NotNull
    private String description;

    @NotNull
    private String imageUrl;

    @NotNull
    private String tutorialPath;

    //Consider modifying to Approach 2:A join entity to combine Recipe, Ingredient and Quantity.
    //Consider modifying to approach 3. ref: https://stackoverflow.com/questions/29757514/hibernate-hashmapentitya-entityb-annotation-mapping
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<Ingredient> ingredients;

    public Recipe(String name, @NotBlank String description, @NotNull String imageUrl, @NotNull String tutorialPath, List<Ingredient> ingredients) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.tutorialPath = tutorialPath;
        this.ingredients = ingredients;
    }

    public Recipe() {}

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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getTutorialPath() {
        return tutorialPath;
    }

    public void setTutorialPath(String tutorialPath) {
        this.tutorialPath = tutorialPath;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
}