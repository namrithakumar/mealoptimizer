package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    private Order order1;
    private Order order2;

    private List<Order> ordersToBeSaved = new ArrayList<>();

    @BeforeEach
    void setUp() {
        order1 = new Order();
        order1.setOrderId(1L);

        order2 = new Order();
        order2.setOrderId(1L);

        ordersToBeSaved.add(order1);
        ordersToBeSaved.add(order2);
    }

    @Test
    void testSaveAll() {
        when(orderRepository.saveAll(ordersToBeSaved)).thenReturn(ordersToBeSaved);
        List<Order> savedOrders = (List) orderService.saveAll(ordersToBeSaved);
        AtomicInteger index = new AtomicInteger();
        ordersToBeSaved.forEach(order -> {
            assertThat(order).isEqualToComparingFieldByField(savedOrders.get(index.get()));
        });
        verify(orderRepository, times(1)).saveAll(ordersToBeSaved);
    }

}