package com.practice.mealoptimizer.service.recipe;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.repository.recipe.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService {

    private RecipeRepository recipeRepo;

    @Autowired
    public RecipeService(RecipeRepository recipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    public List<Recipe> findByNames(List<String> names) {
        List<Recipe> recipes = recipeRepo.findByNameIn(names);
        return recipes;
    }
}