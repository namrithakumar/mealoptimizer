package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.repository.user.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ItemMapperResolverTest {

    @Mock
    private ItemRepository itemRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private ItemMapperResolver itemMapperResolver;

    private OrderRequestDTO orderRequestDTO;

    private Order resolvedOrder;

    private User user;

    @BeforeEach
    void setUp() {
        orderRequestDTO = new OrderRequestDTO();
        orderRequestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
        orderRequestDTO.setUsername("existentuser");

        user = new User();
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

        user.setNutrientMinLimits(nutrientMinLimits);
        user.setNutrientMaxLimits(nutrientMaxLimits);
    }

    @Test
    void resolveTest() {
        when(itemRepository.findByItemName(anyString())).thenReturn(new Item());
        when(userRepository.findByUsername(anyString())).thenReturn(user);
        resolvedOrder = itemMapperResolver.resolve(orderRequestDTO, Order.class);
        assertEquals(4, resolvedOrder.getMealList().size());
        resolvedOrder.getMealList().forEach(meal -> assertNotNull(meal.getItem()));

        verify(itemRepository, times(4)).findByItemName(anyString());
    }
}