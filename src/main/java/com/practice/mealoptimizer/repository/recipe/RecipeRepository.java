package com.practice.mealoptimizer.repository.recipe;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, String> {

    public Recipe findByName(String name); //name refers to Recipe Name
}