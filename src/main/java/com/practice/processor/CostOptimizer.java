package com.practice.processor;

import com.practice.domain.Meal;
import com.practice.domain.Order;
import java.util.HashMap;
import java.util.Map;

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
