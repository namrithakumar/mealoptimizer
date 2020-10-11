package com.practice.mealoptimizer.repository;


import com.practice.mealoptimizer.domain.*;
import jdk.nashorn.internal.ir.annotations.Ignore;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
@TestPropertySource(locations="classpath:test.properties")
public class OrderRepositoryTest {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ItemRepository itemRepository;

    private Order order1 = null;
    private Order order2 = null;

    List<Order> ordersToBeSaved = new ArrayList<>();

    String ITEM_NAME_1 = "Green Salad";
    String ITEM_NAME_2 = "Icecream";
    String ITEM_NAME_3 = "Strawberry Milkshake";
    String ITEM_NAME_4 = "Garlic bread";

    /*
     * TODO: Get nutrient max, min info from User table, replace hardcoded string with values read from a file.
     */
    @BeforeEach
    public void setup() {

        List<Meal> mealList = new ArrayList<Meal>();
        order1 = new Order();
        List categoryList = new ArrayList<Category>();
        categoryList.add(new Category("GENERAL", "ALL"));

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
        meal1.setPortion(1.0);

        Meal meal2 = new Meal();
        meal2.setItem(itemRepository.findByItemName(ITEM_NAME_2));
        meal2.setPortion(1.0);

        Meal meal3 = new Meal();
        meal3.setItem(itemRepository.findByItemName(ITEM_NAME_3));
        meal3.setPortion(2.0);

        Meal meal4 = new Meal();
        meal4.setItem(itemRepository.findByItemName(ITEM_NAME_4));
        meal4.setPortion(1.0);

        mealList.add(meal1);
        mealList.add(meal2);
        mealList.add(meal3);
        mealList.add(meal4);

        order1.setMealList(mealList);
        order1.setDateOfDelivery(LocalDate.now().plusDays(7));
        order1.setNutrientMaxLimits(nutrientMaxLimits);
        order1.setNutrientMinLimits(nutrientMinLimits);
        order1.setOptimizationType(OptimizationType.COST);

        order2 = order1;
        order2.setOptimizationType(OptimizationType.REWARD);

        ordersToBeSaved.add(order1);
        ordersToBeSaved.add(order2);
    }

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(orderRepository).isNotNull();
        assertThat(itemRepository).isNotNull();
    }

    @Test
    void testSaveAll() {
    assertTrue(!ordersToBeSaved.isEmpty());
    List savedOrders = (List) orderRepository.saveAll(ordersToBeSaved);
    //isEqualToComparingFieldByField(order);
    assertEquals(ordersToBeSaved.size(), savedOrders.size());
    }

    @Disabled
    @Test
    void testFindAllOrderByPlacedAtDesc () {
        List<Order> savedOrders = (List) orderRepository.saveAll(ordersToBeSaved);
        List<Order> savedOrdersExpected = new ArrayList<>();
        savedOrdersExpected.addAll(savedOrders);
        List<Order> savedOrdersActual = (List<Order>) orderRepository.findAllByOrderByPlacedAtAsc();
        assertThat(savedOrdersActual).containsExactlyElementsOf(savedOrdersExpected);
    }
}