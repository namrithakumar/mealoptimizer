package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface ResultMapper {
    public Order mapResultToOrder(Map<String, Object> result, Order order);
    public OrderResponseDTO mapOrderAndStateToOrderResponseDTO(List<Order> orders, String optimizationState);
}