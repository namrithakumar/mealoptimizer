package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.recipe.Ingredient;
import com.practice.mealoptimizer.domain.recipe.Quantity;
import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.repository.recipe.RecipeRepository;
import com.practice.mealoptimizer.service.recipe.RecipeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RecipeServiceTest {

    private String itemName = "Strawberry milkshake";

    @Mock
    private RecipeRepository recipeRepository;

    @InjectMocks
    private RecipeService recipeService;

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(recipeService).isNotNull();
    }

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
    }

    @Test
    public void testFindByNames() {
        when(recipeRepository.findByNameIn(Arrays.asList(itemName))).thenReturn(Arrays.asList(strawberryMilkShakeRecipe));
        assertThat(recipeService.findByNames(Arrays.asList(itemName))).hasSameElementsAs(Arrays.asList(strawberryMilkShakeRecipe));
        verify(recipeRepository, times(1)).findByNameIn(Arrays.asList(itemName));
    }
}