package com.practice.mealoptimizer.repository.recipe;

import com.practice.mealoptimizer.domain.recipe.Ingredient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, String> {
}