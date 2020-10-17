package com.practice.mealoptimizer.web.recipe;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.service.recipe.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(path = "/mealoptimizer/recipe")
@ResponseBody
public class RecipeController {

    private RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @RequestMapping(method = RequestMethod.GET, path="find")
    public Recipe getRecipe(@RequestParam("name") String name) {
        return recipeService.findByName(name);
    }
}