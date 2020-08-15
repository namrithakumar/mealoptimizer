package com.practice.mealoptimizer.test.processor;

import com.practice.mealoptimizer.test.data.ItemRepository;
import com.practice.mealoptimizer.test.domain.Category;
import com.practice.mealoptimizer.test.domain.Meal;
import com.practice.mealoptimizer.test.domain.Order;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.ojalgo.optimisation.Optimisation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@TestPropertySource(locations="classpath:test.properties")
public class OptimizerTest {

    @Autowired
    private ItemRepository itemRepository;

    Order order = null;

    String ITEM_NAME_1 = "Green Salad";
    String ITEM_NAME_2 = "Icecream";
    String ITEM_NAME_3 = "Strawberry Milkshake";
    String ITEM_NAME_4 = "Garlic bread";

    /*
     * TODO: Get nutrient max, min info from User table, replace hardcoded string with values read from a file.
     */
    @BeforeEach
    public void setup() {

        List categoryList = new ArrayList<Category>();
        categoryList.add(Category.ALL);
        List<Meal> mealList = new ArrayList<Meal>();
        order = new Order();

        //Setup min and max nutrient limits
        Map<String, Integer> nutrientMinLimits = new HashMap<String, Integer>();
        Map<String, Integer> nutrientMaxLimits = new HashMap<String, Integer>();

        nutrientMinLimits.put("calories", 2000);
        nutrientMinLimits.put("fat", 5);
        nutrientMinLimits.put("sodium", 30);
        nutrientMinLimits.put("carbs", 105);
        nutrientMinLimits.put("protein", 20);
        nutrientMinLimits.put("calcium", 100);

        nutrientMaxLimits.put("calories", 2400);
        nutrientMaxLimits.put("fat", 80);
        nutrientMaxLimits.put("sodium", 5000);
        nutrientMaxLimits.put("carbs", 500);
        nutrientMaxLimits.put("protein", 200);
        nutrientMaxLimits.put("calcium", 5000);

        Meal meal1 = new Meal();
        meal1.setItem(itemRepository.findByItemName(ITEM_NAME_1));

        Meal meal2 = new Meal();
        meal2.setItem(itemRepository.findByItemName(ITEM_NAME_2));

        Meal meal3 = new Meal();
        meal3.setItem(itemRepository.findByItemName(ITEM_NAME_3));

        Meal meal4 = new Meal();
        meal4.setItem(itemRepository.findByItemName(ITEM_NAME_4));

        mealList.add(meal1);
        mealList.add(meal2);
        mealList.add(meal3);
        mealList.add(meal4);

        order.setMealList(mealList);
        order.setDateOfDelivery(LocalDate.now().plusDays(7));
        order.setNutrientMaxLimits(nutrientMaxLimits);
        order.setNutrientMinLimits(nutrientMinLimits);
    }

    @Test
    public void testOptimize() {
        Map<String, Object> expectedOptimizedMealPlanMap = new HashMap<>();
        expectedOptimizedMealPlanMap.put("STATE", Optimisation.State.OPTIMAL);
        expectedOptimizedMealPlanMap.put("VALUE", 26.33);
        expectedOptimizedMealPlanMap.put(ITEM_NAME_1, 1.0);
        expectedOptimizedMealPlanMap.put(ITEM_NAME_2, 1.0);
        expectedOptimizedMealPlanMap.put(ITEM_NAME_3, 2.0);
        expectedOptimizedMealPlanMap.put(ITEM_NAME_4, 1.0);
        OptimizerFactory optimizerFactory = new OptimizerFactory();
        Optimizer mealOptimizer = optimizerFactory.getOptimizerByType(OptimizationType.COST);
        assertTrue(expectedOptimizedMealPlanMap.equals(mealOptimizer.optimizeByOptimizationType(order)));
    }
}