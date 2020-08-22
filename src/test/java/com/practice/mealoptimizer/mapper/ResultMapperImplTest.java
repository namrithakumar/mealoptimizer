package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class ResultMapperImplTest {

    private Map<String, Object> result;

    private ResultMapper resultMapper;

    private Order order;

    private List<Meal> mealList;

    private String[] itemNames;

    @BeforeEach
    void setUp() {
        itemNames = new String[4];
        itemNames[0] = "Green Salad";
        itemNames[1] = "Icecream";
        itemNames[2] = "Strawberry Milkshake";
        itemNames[3] = "Garlic bread";

        result = new HashMap<>();
        result.put("STATE", "OPTIMAL");
        result.put("VALUE", 26.33);
        result.put(itemNames[0], 1.0);
        result.put(itemNames[1], 1.0);
        result.put(itemNames[2], 2.0);
        result.put(itemNames[3], 1.0);

        resultMapper = new ResultMapperImpl();

        order = new Order();

        mealList = new ArrayList<>();

        for(int i=0;i<4;i++) {
            Meal meal = new Meal();
            Item item = new Item();
            item.setItemName(itemNames[i]);
            meal.setItem(item);
            mealList.add(meal);
        }
        order.setMealList(mealList);
    }

    @Test
    void mapResultToOrderTest() {
        order = resultMapper.mapResultToOrder(result, order);
        order.getMealList().forEach(meal -> {
            assertEquals(result.get(meal.getItem().getItemName()), meal.getPortion());
        });
    }
}