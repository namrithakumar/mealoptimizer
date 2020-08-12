package com.practice.mealoptimizer.test.processor;

import com.practice.mealoptimizer.test.domain.Meal;
import com.practice.mealoptimizer.test.domain.Order;

import java.util.HashMap;
import java.util.Map;

public class RewardOptimizer extends Optimizer {
    @Override
    public Map<String, Double> constructWeightMap(Order order) {
        Map<String, Double> weightMap = new HashMap<>();

        for(Meal meal: order.getMealList()) {
            weightMap.put(meal.getItem().getItemName(), Double.valueOf(meal.getItem().getReward()));
        }
        return weightMap;
    }

    @Override
    public Map<String, Object> optimizeByOptimizationType(Order order) {
        return super.optimize(order, this.constructWeightMap(order));
    }
}
