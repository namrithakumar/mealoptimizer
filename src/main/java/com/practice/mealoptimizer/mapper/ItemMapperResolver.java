package com.practice.mealoptimizer.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.nutrient.NutrientMaxLimit;
import com.practice.mealoptimizer.domain.nutrient.NutrientMinLimit;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.repository.NutrientsRepository;
import org.mapstruct.ObjectFactory;
import org.mapstruct.TargetType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class ItemMapperResolver {

    private ItemRepository itemRepository;

    private NutrientsRepository nutrientsRepository;

    @Autowired
    public ItemMapperResolver(ItemRepository itemRepository, NutrientsRepository nutrientsRepository) {
        this.itemRepository = itemRepository;
        this.nutrientsRepository = nutrientsRepository;
    }

    @ObjectFactory
    public Order resolve(OrderRequestDTO orderRequestDTO, @TargetType Class<Order> order) {
        Order userOrder = new Order();
        List<Meal> mealList = new ArrayList<>();
        orderRequestDTO.getItemNames().forEach(itemName -> {
            Meal meal = new Meal();
            Item item = itemRepository.findByItemName(itemName);
            meal.setItem(item);
            meal.setOrder(userOrder); // Use @AfterMapping to remove circular dependency
            mealList.add(meal);
        });

        userOrder.setMealList(mealList);

        //Setup min and max nutrient limits
        Map<String, Integer> nutrientMinLimits = this.nutrientsRepository.getNutrientMinLimits().stream().collect(Collectors.toMap(NutrientMinLimit::getNutrientName, NutrientMinLimit::getNutrientMinLimit));
        Map<String, Integer> nutrientMaxLimits = this.nutrientsRepository.getNutrientMaxLimits().stream().collect(Collectors.toMap(NutrientMaxLimit::getNutrientName, NutrientMaxLimit::getNutrientMaxLimit));

        userOrder.setNutrientMaxLimits(nutrientMaxLimits);
        userOrder.setNutrientMinLimits(nutrientMinLimits);

        userOrder.setUsername(orderRequestDTO.getUsername());

        return userOrder;
    }
}