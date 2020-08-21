package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public interface ResultMapper {
    public Order mapResultToOrder(Map<String, Object> result, Order order);
}