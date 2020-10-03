package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ItemMapperResolverTest {

    @Mock
    private ItemRepository itemRepository;

    @InjectMocks
    private ItemMapperResolver itemMapperResolver;

    private OrderRequestDTO orderRequestDTO;

    private Order resolvedOrder;

    @BeforeEach
    void setUp() {
        orderRequestDTO = new OrderRequestDTO();
        orderRequestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
    }

    @Test
    void resolveTest() {
        when(itemRepository.findByItemName(anyString())).thenReturn(new Item());

        resolvedOrder = itemMapperResolver.resolve(orderRequestDTO, Order.class);
        assertEquals(4, resolvedOrder.getMealList().size());
        resolvedOrder.getMealList().forEach(meal -> assertNotNull(meal.getItem()));

        verify(itemRepository, times(4)).findByItemName(anyString());
    }
}