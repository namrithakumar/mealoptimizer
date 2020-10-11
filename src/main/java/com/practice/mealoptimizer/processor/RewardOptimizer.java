package com.practice.mealoptimizer.processor;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import org.ojalgo.optimisation.ExpressionsBasedModel;
import org.ojalgo.optimisation.Optimisation;
import org.ojalgo.optimisation.Variable;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
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
        Variable[] variables = new Variable[order.getMealList().size()];
        ExpressionsBasedModel model = super.constructModel(order, this.constructWeightMap(order));
        // Solve
        Optimisation.Result result = model.maximise();
        return super.constructMealMap(result, model.getVariables().toArray(variables));
    }
}
