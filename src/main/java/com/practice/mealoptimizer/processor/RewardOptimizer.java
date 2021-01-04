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

    //Template design pattern - weight map constructed based on Reward.
    @Override
    public Map<String, Double> constructWeightMap(Order order) {
        Map<String, Double> weightMap = new HashMap<>();

        for(Meal meal: order.getMealList()) {
            weightMap.put(meal.getItem().getItemName(), Double.valueOf(meal.getItem().getReward()));
        }
        return weightMap;
    }

    //Optimize by maximising reward.
    @Override
    public Optimisation.Result optimize(ExpressionsBasedModel model) {
        return model.maximise();
    }
}
