package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class ResultMapperImpl implements ResultMapper {

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public Order mapResultToOrder(Map<String, Object> result, Order order) {
        order.getMealList().forEach(meal -> {
            meal.setPortion((double)(result.get(meal.getItem().getItemName())));
        });
        return order;
    }

    @Override
    public OrderResponseDTO mapOrderToOrderResponseDTO(List<Order> orders) {
        OrderResponseDTO response = orderMapper.orderToOrderResponseDTO(orders.get(0));

        List<OptimizedMealPlanDTO> optimizedMealPlan = new ArrayList<>(2);
        orders.forEach(savedOrder -> {
            optimizedMealPlan.add(orderMapper.orderToOptimizedMealPlan(savedOrder));
        });

        response.setMealPlan(optimizedMealPlan);
        return response;
    }
}