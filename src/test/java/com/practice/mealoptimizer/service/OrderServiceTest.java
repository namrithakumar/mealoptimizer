package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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

    private Order order;

    @BeforeEach
    void setUp() {
        order = new Order();
        order.setOrderId(1L);
    }

    @Test
    void saveOrderTest() {
        when(orderRepository.save(order)).thenReturn(order);
        assertEquals(order, orderService.saveOrder(order));
        verify(orderRepository, times(1)).save(order);
    }
}