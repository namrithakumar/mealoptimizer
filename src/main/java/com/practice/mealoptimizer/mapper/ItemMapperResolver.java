package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.repository.user.UserRepository;
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

    private UserRepository userRepository;

    @Autowired
    public ItemMapperResolver(ItemRepository itemRepository, UserRepository userRepository) {
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
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

        /*
            TODO: Move below code from Order to User.
         */
        //Setup min and max nutrient limits
        Map<String, Integer> nutrientMinLimits = this.userRepository.findByUsername(orderRequestDTO.getUsername()).getNutrientMinLimits();
        Map<String, Integer> nutrientMaxLimits = this.userRepository.findByUsername(orderRequestDTO.getUsername()).getNutrientMaxLimits();

        userOrder.setNutrientMaxLimits(nutrientMaxLimits);
        userOrder.setNutrientMinLimits(nutrientMinLimits);

        User user = this.userRepository.findByUsername(orderRequestDTO.getUsername());

        userOrder.setUser(user);

        return userOrder;
    }
}