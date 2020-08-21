package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ResultMapperImpl implements ResultMapper {
    @Override
    public Order mapResultToOrder(Map<String, Object> result, Order order) {
        order.getMealList().forEach(meal -> {
            meal.setPortion((double)(result.get(meal.getItem().getItemName())));
        });
        return order;
    }
}