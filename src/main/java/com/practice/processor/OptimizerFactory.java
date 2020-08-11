package com.practice.processor;

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
