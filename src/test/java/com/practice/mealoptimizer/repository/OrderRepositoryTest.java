package com.practice.mealoptimizer.repository;


import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
@TestPropertySource(locations="classpath:test.properties")
public class OrderRepositoryTest {

    @Autowired
    private OrderRepository orderRepository;

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

        List<Meal> mealList = new ArrayList<Meal>();
        order = new Order();
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

        order.setMealList(mealList);
        order.setDateOfDelivery(LocalDate.now().plusDays(7));
        order.setNutrientMaxLimits(nutrientMaxLimits);
        order.setNutrientMinLimits(nutrientMinLimits);
    }

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(orderRepository).isNotNull();
        assertThat(itemRepository).isNotNull();
    }

    @Test
    void testSaveOrder() {
    assertTrue(order!=null);
    Order savedOrder = orderRepository.save(order);
    assertThat(savedOrder).isEqualToComparingFieldByField(order);
    }

    @Test
    void testFindAllOrderByPlacedAtDesc () {
        Order savedOrder = orderRepository.save(order);
        List<Order> savedOrdersExpected = new ArrayList<>();
        savedOrdersExpected.add(savedOrder);

        List<Order> savedOrdersActual = (List<Order>) orderRepository.findAllByOrderByPlacedAtAsc();
        assertThat(savedOrdersActual).containsExactlyElementsOf(savedOrdersExpected);
    }
}