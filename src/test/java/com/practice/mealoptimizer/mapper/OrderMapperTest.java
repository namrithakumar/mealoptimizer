package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class OrderMapperTest {

    @Autowired
    private OrderMapper orderMapper;

    @Test
    public void testOrderDTOtoOrder() {

        String ITEM_NAME_1 = "Green Salad";
        String ITEM_NAME_2 = "Icecream";
        String ITEM_NAME_3 = "Strawberry Milkshake";
        String ITEM_NAME_4 = "Garlic bread";

        List<String> itemNames = new ArrayList<>();
        itemNames.add(ITEM_NAME_1);
        itemNames.add(ITEM_NAME_2);
        itemNames.add(ITEM_NAME_3);
        itemNames.add(ITEM_NAME_4);

        OrderRequestDTO orderRequestDTO = new OrderRequestDTO(itemNames, LocalDate.now().plusDays(7));
        Order order = orderMapper.orderDTOtoOrder(orderRequestDTO);
        assertEquals(order.getMealList().size(), itemNames.size());
        order.getMealList().forEach(meal -> assertNotNull(meal.getItem()));
        assertEquals(orderRequestDTO.getDateOfDelivery(), order.getDateOfDelivery());
    }
}