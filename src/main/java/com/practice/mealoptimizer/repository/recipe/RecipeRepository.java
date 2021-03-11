package com.practice.mealoptimizer.repository.recipe;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, String> {

    @EntityGraph(value = "Recipe.ingredients")
    public List<Recipe> findByNameIn(List<String> names) throws Exception; //name refers to Recipe Name
}