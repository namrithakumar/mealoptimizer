package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.recipe.Ingredient;
import com.practice.mealoptimizer.domain.recipe.Quantity;
import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
import com.practice.mealoptimizer.service.recipe.RecipeService;
import com.practice.mealoptimizer.web.recipe.RecipeController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class RecipeControllerTest {

    private String itemName = "Strawberry milkshake";

    @Mock
    private RecipeService recipeService;

    @InjectMocks
    private RecipeController recipeController;

    private MockMvc mockMvc;

    private Recipe strawberryMilkShakeRecipe = new Recipe();

    @BeforeEach
    public void setup() {
        List<Ingredient> ingredients = new ArrayList<>();

        strawberryMilkShakeRecipe.setName("Strawberry milkshake");
        strawberryMilkShakeRecipe.setDescription("Delight in every sip");
        strawberryMilkShakeRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIhI9cZoZBjSKCWYFQHeMjulmAwHc9Q08nEg&usqp=CAU");
        strawberryMilkShakeRecipe.setTutorialPath("https://www.youtube.com/watch?v=U17jQxLGZPo");

        Ingredient strawberries = new Ingredient();
        Quantity strawberriesQ = new Quantity();

        strawberries.setName("frozen/fresh strawberries");
        strawberries.setDescription("frozen/fresh strawberries");
        strawberries.setRecipe(strawberryMilkShakeRecipe);
        strawberries.setQuantity(strawberriesQ);
        ingredients.add(strawberries);

        strawberriesQ.setCount(1.0);
        strawberriesQ.setMeasure("cup");
        strawberriesQ.setIngredient(strawberries);

        Ingredient milkpowder = new Ingredient();
        Quantity milkpowderQ = new Quantity();

        milkpowder.setName("milk powder");
        milkpowder.setDescription("milk powder");
        milkpowder.setRecipe(strawberryMilkShakeRecipe);
        milkpowder.setQuantity(milkpowderQ);
        ingredients.add(milkpowder);

        milkpowderQ.setCount(3.0);
        milkpowderQ.setMeasure("tbsp");
        milkpowderQ.setIngredient(milkpowder);

        Ingredient milk = new Ingredient();
        Quantity milkQ = new Quantity();

        milk.setName("milk");
        milk.setDescription("milk");
        milk.setRecipe(strawberryMilkShakeRecipe);
        milk.setQuantity(milkQ);
        ingredients.add(milk);

        milkQ.setCount(0.75);
        milkQ.setMeasure("cup");
        milkQ.setIngredient(milk);

        Ingredient vanillaIcecream = new Ingredient();
        Quantity vanillaIcecreamQ = new Quantity();

        vanillaIcecream.setName("vanilla ice cream");
        vanillaIcecream.setDescription("vanilla ice cream");
        vanillaIcecream.setRecipe(strawberryMilkShakeRecipe);
        vanillaIcecream.setQuantity(vanillaIcecreamQ);
        ingredients.add(vanillaIcecream);

        vanillaIcecreamQ.setCount(3.0);
        vanillaIcecreamQ.setMeasure("scoop");
        vanillaIcecreamQ.setIngredient(vanillaIcecream);

        strawberryMilkShakeRecipe.setIngredients(ingredients);

        mockMvc = MockMvcBuilders.standaloneSetup(recipeController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();
    }

    @Test
    public void testGetRecipe() {
        //when(recipeService.findByName(itemName)).thenReturn(strawberryMilkShakeRecipe);
        try {
            mockMvc.perform(get("/mealoptimizer/recipe/find?name=" + itemName))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON));
            //verify(recipeService, times(1)).findByName(itemName);
        }
        catch(Exception e) {
            fail(this.getClass().getName() + " failed with message: " + e.getMessage());
        }
    }
}