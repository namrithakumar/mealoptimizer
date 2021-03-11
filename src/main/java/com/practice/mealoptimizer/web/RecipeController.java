package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.service.recipe.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Controller
@RequestMapping(path = "/mealoptimizer/recipe")
public class RecipeController {

    private RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @RequestMapping(method = RequestMethod.GET, path="find")
    public ResponseEntity<List<Recipe>> getRecipe(@RequestParam("names") List<String> names) {
        try {
            return new ResponseEntity<List<Recipe>>(recipeService.findByNames(names), HttpStatus.OK);
        } catch(Exception re) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, re.getMessage());
        }
    }
}