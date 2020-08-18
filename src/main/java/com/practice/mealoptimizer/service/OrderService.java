package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
