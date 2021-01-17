package com.practice.mealoptimizer.processor;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.Order;
import org.ojalgo.optimisation.Expression;
import org.ojalgo.optimisation.ExpressionsBasedModel;
import org.ojalgo.optimisation.Optimisation;
import org.ojalgo.optimisation.Variable;
import org.ojalgo.type.context.NumberContext;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public abstract class Optimizer {

    //private OptimizationType optimizationType;

    public abstract Map<String, Double> constructWeightMap(Order order);

    public abstract Optimisation.Result optimize(ExpressionsBasedModel model);

    //Template design pattern - The subclasses RewardOptimizer and CostOptimizer decide how to implement constructWeightMap() and optimize().
    public Map<String, Object> optimizeByOptimizationType(Order order) {
        Variable[] variables = new Variable[order.getMealList().size()];
        ExpressionsBasedModel model = this.constructModel(order, constructWeightMap(order));
        // Solve
        Optimisation.Result result = optimize(model);
        return this.constructMealMap(result, model.getVariables().toArray(variables));
    }

    public ExpressionsBasedModel constructModel(Order order, Map<String, Double> weightMap) {

        List<String> nutrientNames = new ArrayList<String>();
        nutrientNames.addAll(order.getMealList().get(0).getItem().getNutritionProfile().keySet());
        int i = 0,j = 0,k = 0;

        // Create a new model.
        ExpressionsBasedModel model = new ExpressionsBasedModel();

        Variable[] variables = new Variable[order.getMealList().size()];
        for( Meal meal : order.getMealList() ) {
            meal.getItem().getMaxSafeConsumption();
            //variables[i] = model.addVariable(meal.getItem().getItemName()).lower(0).upper(meal.getItem().getMaxSafeConsumption()).weight(meal.getItem().getItemCost());
            variables[i] = model.addVariable(meal.getItem().getItemName()).lower(1).upper(meal.getItem().getMaxSafeConsumption()).weight(weightMap.get(meal.getItem().getItemName()));
            variables[i].integer(true);
            i++;
        }

        Expression[] expressions = new Expression[nutrientNames.size()];
        for(String nutrientName: nutrientNames) {

            // Set lower and upper limits for each nutrient
            expressions[j] = model.addExpression(nutrientName).lower(order.getNutrientMinLimits().get(nutrientName)).upper(order.getNutrientMaxLimits().get(nutrientName));

            // nutrient amount a serving of each of the foods contain.
            for(k=0;k< variables.length;k++) {
                Map<String, Double> itemNutrientsMap = null;
                for(Meal meal: order.getMealList()) {
                    if(meal.getItem().getItemName().equalsIgnoreCase(variables[k].getName())) {
                        itemNutrientsMap = meal.getItem().getNutritionProfile();
                        break;
                    }
                }
                expressions[j].set(variables[k], itemNutrientsMap.get(nutrientName));
            }
        }
        return model;
    }

    public Map<String, Object> constructMealMap(Optimisation.Result result, Variable[] variables) {
        Map<String, Object> optimizedMealPlanMap = new HashMap<>();

        int size = result.getSolution(new NumberContext()).size();

        optimizedMealPlanMap.put("STATE", result.getState());
        optimizedMealPlanMap.put("VALUE", result.getValue());
        //optimizedMealPlanMap.put("OPTIMIZATION-TYPE", this.getOptimizationType());
        for(int l=0; l<size; l++) {
            optimizedMealPlanMap.put(variables[l].getName(), result.getSolution(new NumberContext()).doubleValue(l));
        }
        return optimizedMealPlanMap;
    }

    /* public void setOptimizationType(OptimizationType optimizationType) {
        this.optimizationType = optimizationType;
    }*/

    /*public OptimizationType getOptimizationType() {
        return this.optimizationType;
    }*/
}