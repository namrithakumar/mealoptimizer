package com.practice.mealoptimizer.processor;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Orders;

import java.util.HashMap;
import java.util.Map;

public class RewardOptimizer extends Optimizer {
    @Override
    public Map<String, Double> constructWeightMap(Orders orders) {
        Map<String, Double> weightMap = new HashMap<>();

        for(Meal meal: orders.getMealList()) {
            weightMap.put(meal.getItem().getItemName(), Double.valueOf(meal.getItem().getReward()));
        }
        return weightMap;
    }

    @Override
    public Map<String, Object> optimizeByOptimizationType(Orders orders) {
        return super.optimize(orders, this.constructWeightMap(orders));
    }
}
