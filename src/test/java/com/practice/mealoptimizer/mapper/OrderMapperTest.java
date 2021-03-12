package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.MealDTO;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestPropertySource(locations="classpath:application-junit.properties")
public class OrderMapperTest {

    @Autowired
    private OrderMapper orderMapper;

    List<String> itemNames = new ArrayList<>();

    String ITEM_NAME_1;
    String ITEM_NAME_2;
    String ITEM_NAME_3;
    String ITEM_NAME_4;

    List<Meal> mealList = new ArrayList<>();

    Order order = new Order();

    @BeforeEach
    void setup() {

        //setup list of items
        ITEM_NAME_1 = "Green Salad";
        ITEM_NAME_2 = "Icecream";
        ITEM_NAME_3 = "Strawberry Milkshake";
        ITEM_NAME_4 = "Garlic bread";

        itemNames.add(ITEM_NAME_1);
        itemNames.add(ITEM_NAME_2);
        itemNames.add(ITEM_NAME_3);
        itemNames.add(ITEM_NAME_4);

        //setup item + mealList
        AtomicReference<Long> ID = new AtomicReference<>(0L);
        itemNames.forEach((itemName) -> {
            Meal meal = new Meal();
            meal.setMealId(ID.get() + 1);
            Item item = new Item();
            item.setItemCost(2); //Cost of every item is 1 for simplicity
            item.setItemName(itemNames.get(ID.get().intValue()));
            meal.setItem(item);
            meal.setPortion(ID.get() + 1);
            ID.getAndSet(ID.get() + 1);
            mealList.add(meal);
        });

        //setup order
        order.setOrderId(5L);
        order.setMealList(mealList);
        order.setOptimizationType(OptimizationType.COST);
    }

    @Test
    public void testOrderRequestDTOtoOrder() {

        List<OptimizationType> optimizationTypes = new ArrayList<>();
        optimizationTypes.add(OptimizationType.COST);
        optimizationTypes.add(OptimizationType.REWARD);

        OrderRequestDTO orderRequestDTO = new OrderRequestDTO(itemNames, LocalDate.now().plusDays(7), optimizationTypes, "existentuser");
        Order order = orderMapper.orderRequestDTOtoOrder(orderRequestDTO);
        assertEquals(order.getMealList().size(), itemNames.size());
        order.getMealList().forEach(meal -> assertNotNull(meal.getItem()));
        assertEquals(orderRequestDTO.getDateOfDelivery(), order.getDateOfDelivery());
    }

    @Test
    public void testMealToMealDTO() {
        //Setup
        Item item = new Item();
        item.setItemName(ITEM_NAME_1);
        item.setItemCost(10.0);
        Meal meal = new Meal(1, item, 2.4, new Order());

        //Test
        MealDTO mealDTO = orderMapper.MealToMealDTO(meal);

        //Verify
        assertEquals(ITEM_NAME_1, mealDTO.getItemName());
        assertEquals(1, mealDTO.getMealId());
        assertEquals(2.4, mealDTO.getPortion());
        assertEquals(24.0, mealDTO.getMealCost());
    }

    @Test
    public void testOrderToOptimizedMealPlan() {

        //Test
        OptimizedMealPlanDTO optimizedMealPlanDTO = orderMapper.orderToOptimizedMealPlan(order);

        //Verify
        assertEquals(20.0, optimizedMealPlanDTO.getMealPlanCost()); //since price of every item is 2

        AtomicInteger index = new AtomicInteger();
        assertEquals(4, optimizedMealPlanDTO.getMeals().size());

        optimizedMealPlanDTO.getMeals().forEach((meal) -> {
            assertEquals(itemNames.get(index.get()), meal.getItemName());
            assertEquals((index.get() + 1) * 2, meal.getMealCost()); //since price of every item is 2
            assertEquals(index.get() + 1, meal.getMealId());
            assertEquals(index.get() + 1, meal.getPortion());
            index.getAndIncrement();
        });
        assertEquals(order.getOptimizationType(), optimizedMealPlanDTO.getOptimizationType());
    }

    @Test
    public void testOrderToOrderResponseDTO() {
        OrderResponseDTO orderResponseDTO = orderMapper.orderToOrderResponseDTO(order);
        assertEquals(order.getDateOfDelivery(), orderResponseDTO.getDateOfDelivery());
        assertEquals(order.getOrderId(), orderResponseDTO.getOrderId());

        //MealPlan is not mapped in OrderMapper, hence not checking.
    }
}