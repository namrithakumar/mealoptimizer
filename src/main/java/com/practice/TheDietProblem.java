package com.practice;

import com.practice.processor.OptimizationType;
import com.practice.processor.Optimizer;
import com.practice.processor.OptimizerFactory;
import com.practice.setup.TestDataSetup;

import java.util.Map;

public class TheDietProblem {

    public static void main(final String[] args) {
        OptimizerFactory optimizerFactory = new OptimizerFactory();
        Optimizer mealOptimizer = optimizerFactory.getOptimizerByType(OptimizationType.COST);
        mealOptimizer.optimizeByOptimizationType(TestDataSetup.getDataSetup());

        /*Map<String, Object> optimizedPlanMap = mealOptimizer.optimizeByOptimizationType(TestDataSetup.getDataSetup());
        optimizedPlanMap.forEach((key, value) -> {
            System.out.println("Key ::: " + key);
            System.out.println("Value ::: " + value);
        });*/
    }
}