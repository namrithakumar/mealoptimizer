package com.practice.mealoptimizer.setup;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;

import java.util.*;

//This class must be deleted once Spring is introduced.
public class TestDataSetup {

    public static Order getDataSetup() {
        List categoryList = new ArrayList<Item.Category>();
        categoryList.add(Item.Category.ALL);
        List<Meal> mealList = new ArrayList<Meal>();
        Order order = new Order();
        Map<String, Integer> nutrientMinLimits = new HashMap<String, Integer>();
        nutrientMinLimits.put("Vit-A", 5000);
        nutrientMinLimits.put("Calories", 2000);
        Map<String, Integer> nutrientMaxLimits = new HashMap<String, Integer>();
        nutrientMaxLimits.put("Vit-A", 50000);
        nutrientMaxLimits.put("Calories", 2250);

        Item item1 = new Item();
        item1.setItemId(1L);
        item1.setItemName("bread");
        item1.setItemCost(0.05);
        item1.setItemCategories(categoryList);
        item1.setMaxSafeConsumption(10);
        Map<String,Double> nutritionProfileBread = new HashMap<String, Double>();
        nutritionProfileBread.put("Vit-A", Double.valueOf(0));
        nutritionProfileBread.put("Calories", Double.valueOf(65));
        item1.setNutritionProfile(nutritionProfileBread);
        item1.setReward(3);

        Meal meal1 = new Meal();
        meal1.setItem(item1);

        Item item2 = new Item();
        item2.setItemId(2L);
        item2.setItemName("corn");
        item2.setItemCost(0.18);
        item2.setItemCategories(categoryList);
        item2.setMaxSafeConsumption(10);
        Map<String,Double> nutritionProfileCorn = new HashMap<String, Double>();
        nutritionProfileCorn.put("Vit-A", Double.valueOf(107));
        nutritionProfileCorn.put("Calories", Double.valueOf(72));
        item2.setNutritionProfile(nutritionProfileCorn);
        item2.setReward(5);

        Meal meal2 = new Meal();
        meal2.setItem(item2);

        Item item3 = new Item();
        item3.setItemId(3L);
        item3.setItemName("milk");
        item3.setItemCost(0.23);
        item3.setItemCategories(categoryList);
        item3.setMaxSafeConsumption(10);
        Map<String,Double> nutritionProfileMilk = new HashMap<String, Double>();
        nutritionProfileMilk.put("Vit-A", Double.valueOf(500));
        nutritionProfileMilk.put("Calories", Double.valueOf(121));
        item3.setNutritionProfile(nutritionProfileMilk);
        item3.setReward(6);

        Meal meal3 = new Meal();
        meal3.setItem(item3);

        mealList.add(meal1);
        mealList.add(meal2);
        mealList.add(meal3);

        order.setMealList(mealList);
//        order.setDateOfDelivery(new Date("2021-01-20"));
        order.setNutrientMaxLimits(nutrientMaxLimits);
        order.setNutrientMinLimits(nutrientMinLimits);
        return order;
    }
}
