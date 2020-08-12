package com.practice.mealoptimizer.test;

import com.practice.mealoptimizer.test.processor.OptimizationType;
import com.practice.mealoptimizer.test.processor.Optimizer;
import com.practice.mealoptimizer.test.processor.OptimizerFactory;
import com.practice.mealoptimizer.test.setup.TestDataSetup;

/*
 *To be deleted, for reference only
 */
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