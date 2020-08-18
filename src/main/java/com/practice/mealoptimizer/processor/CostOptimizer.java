package com.practice.mealoptimizer.processor;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class CostOptimizer extends Optimizer {
    @Override
    public Map<String, Double> constructWeightMap(Order order) {
        Map<String, Double> weightMap = new HashMap<>();

        for(Meal meal: order.getMealList()) {
            weightMap.put(meal.getItem().getItemName(), meal.getItem().getItemCost());
        }
        return weightMap;
    }

    @Override
    public Map<String, Object> optimizeByOptimizationType(Order order) {
        return super.optimize(order, this.constructWeightMap(order));
    }
}
