package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import org.mapstruct.ObjectFactory;
import org.mapstruct.TargetType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ItemMapperResolver {

    private ItemRepository itemRepository;

    @Autowired
    public ItemMapperResolver(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @ObjectFactory
    public Order resolve(OrderDTO orderDTO, @TargetType Class<Order> order) {
        Order userOrder = new Order();
        List<Meal> mealList = new ArrayList<>();
        orderDTO.getItemNames().forEach(itemName -> {
            Meal meal = new Meal();
            Item item = itemRepository.findByItemName(itemName);
            meal.setItem(item);
            meal.setOrder(userOrder); // Use @AfterMapping to remove circular dependency
            mealList.add(meal);
        });

        userOrder.setMealList(mealList);

        /*
            TODO: Move below code from Order to User.
         */
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

        userOrder.setNutrientMaxLimits(nutrientMaxLimits);
        userOrder.setNutrientMinLimits(nutrientMinLimits);

        return userOrder;
    }
}