package com.practice.mealoptimizer.processor;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Orders;
import org.ojalgo.optimisation.Expression;
import org.ojalgo.optimisation.ExpressionsBasedModel;
import org.ojalgo.optimisation.Optimisation;
import org.ojalgo.optimisation.Variable;
import org.ojalgo.type.context.NumberContext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class Optimizer {
    
    public abstract Map<String, Double> constructWeightMap(Orders orders);

    public abstract Map<String, Object> optimizeByOptimizationType(Orders orders);

    public Map<String, Object> optimize(Orders orders, Map<String, Double> weightMap) {

        Map<String, Object> optimizedMealPlanMap = new HashMap<>();

        List<String> nutrientNames = new ArrayList<String>();
        nutrientNames.addAll(orders.getMealList().get(0).getItem().getNutritionProfile().keySet());
        int i = 0,j = 0,k = 0,l = 0;

        // Create a new model.
        ExpressionsBasedModel model = new ExpressionsBasedModel();

        Variable[] variables = new Variable[orders.getMealList().size()];
        for( Meal meal : orders.getMealList() ) {
            meal.getItem().getMaxSafeConsumption();
            //variables[i] = model.addVariable(meal.getItem().getItemName()).lower(0).upper(meal.getItem().getMaxSafeConsumption()).weight(meal.getItem().getItemCost());
            variables[i] = model.addVariable(meal.getItem().getItemName()).lower(0).upper(meal.getItem().getMaxSafeConsumption()).weight(weightMap.get(meal.getItem().getItemName()));
            variables[i].integer(true);
            i++;
        }

        Expression[] expressions = new Expression[nutrientNames.size()];
        for(String nutrientName: nutrientNames) {

            // Set lower and upper limits for each nutrient
            expressions[j] = model.addExpression(nutrientName).lower(orders.getNutrientMinLimits().get(nutrientName)).upper(orders.getNutrientMaxLimits().get(nutrientName));

            // nutrient amount a serving of each of the foods contain.
            for(k=0;k< variables.length;k++) {
                Map<String, Double> itemNutrientsMap = null;
                for(Meal meal: orders.getMealList()) {
                    if(meal.getItem().getItemName().equalsIgnoreCase(variables[k].getName())) {
                        itemNutrientsMap = meal.getItem().getNutritionProfile();
                        break;
                    }
                }
                expressions[j].set(variables[k], itemNutrientsMap.get(nutrientName));
            }
        }

        // Solve
        Optimisation.Result result = model.minimise();

        int size = result.getSolution(new NumberContext()).size();

        optimizedMealPlanMap.put("STATE", result.getState());
        optimizedMealPlanMap.put("VALUE", result.getValue());
        for(l=0; l<size; l++) {
            optimizedMealPlanMap.put(variables[l].getName(), result.getSolution(new NumberContext()).doubleValue(l));
        }
        return optimizedMealPlanMap;
    }
}