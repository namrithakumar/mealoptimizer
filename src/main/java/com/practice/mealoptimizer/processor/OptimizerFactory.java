package com.practice.mealoptimizer.processor;

import org.springframework.stereotype.Component;
import com.practice.mealoptimizer.domain.OptimizationType;

@Component
public class OptimizerFactory {
    public Optimizer getOptimizerByType(OptimizationType optimizationType) {
        switch(optimizationType) {
            case COST: return new CostOptimizer();
            case REWARD: return new RewardOptimizer();
            //default to be changed to exception
            default: return new CostOptimizer();
        }
    }
}
