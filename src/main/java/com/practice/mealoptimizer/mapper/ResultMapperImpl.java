package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.ojalgo.optimisation.Optimisation;
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
    public OrderResponseDTO mapOrderAndStateToOrderResponseDTO(List<Order> orders, String optimizationState) {
        OrderResponseDTO response = orderMapper.orderToOrderResponseDTO(orders.get(0));

        //Map Orders -> ResponseDTO
        List<OptimizedMealPlanDTO> optimizedMealPlan = new ArrayList<>(2);
        orders.forEach(savedOrder -> {
            optimizedMealPlan.add(orderMapper.orderToOptimizedMealPlan(savedOrder));
        });

        response.setMealPlan(optimizedMealPlan);

        //Map State -> ResponseDTO
        if(optimizationState == null) {
            response.setOptimizationState(Optimisation.State.FAILED.name());
        }
        else {
            response.setOptimizationState(optimizationState);
        }
        return response;
    }
}