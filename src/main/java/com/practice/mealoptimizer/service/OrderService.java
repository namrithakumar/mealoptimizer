package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Iterable<Order> saveAll(List<Order> orders) {
        return orderRepository.saveAll(orders);
    }

    public long getCountOfOrders() { return orderRepository.count(); }
}