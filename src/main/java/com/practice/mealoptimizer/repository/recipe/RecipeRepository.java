package com.practice.mealoptimizer.repository.recipe;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, String> {

    public List<Recipe> findByNameIn(List<String> names); //name refers to Recipe Name
}