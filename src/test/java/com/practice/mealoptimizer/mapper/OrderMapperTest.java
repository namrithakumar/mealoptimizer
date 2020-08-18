package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@TestPropertySource(locations="classpath:test.properties")
public class OrderMapperTest {

    @Autowired
    OrderMapper orderMapper;

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

        OrderDTO orderDTO = new OrderDTO(itemNames, LocalDate.now().plusDays(7));
        Order order = orderMapper.orderDTOtoOrder(orderDTO);
        assertEquals(order.getMealList().size(), itemNames.size());
        order.getMealList().forEach(meal -> assertNotNull(meal.getItem()));
        assertEquals(orderDTO.getDateOfDelivery(), order.getDateOfDelivery());
    }
}