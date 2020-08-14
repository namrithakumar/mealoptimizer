package com.practice.mealoptimizer.test.processor;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Item.Category;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.ojalgo.optimisation.Optimisation;
import com.practice.mealoptimizer.processor.OptimizationType;
import com.practice.mealoptimizer.processor.OptimizerFactory;
import com.practice.mealoptimizer.processor.Optimizer;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.opencsv.CSVReader;
import java.io.FileReader;

import org.paukov.combinatorics3.Generator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestAlgorithmDataSetCompatability {

    /*
     * TODO: Replace Item object creation with reading object information from DB table once DB is introduced.
     */
    @BeforeEach
    public void setup() {
        Logger logger = LoggerFactory.getLogger(TestAlgorithmDataSetCompatability.class);
        OptimizerFactory optimizerFactory = new OptimizerFactory();
        Optimizer mealOptimizer = optimizerFactory.getOptimizerByType(OptimizationType.COST);
        Map<String, Object> resultMap = new HashMap<>();
        //Setup all Items map
        try
        {
            Map<String, Item> allItemsMap = new HashMap<>();
            CSVReader reader = null;
            Item item;
            Map<String, Double> nutrientsMap = null;
            List<Category> itemCategories = null;
            //parsing a CSV file into CSVReader class constructor
            reader = new CSVReader(new FileReader("src/test/resources/items/ItemList.csv"));
            String [] nextLine;

            //itemNames to be used for generating combinations
            List<String> itemNames = new ArrayList<>();

            //Setup min and max nutrient limits
            Map<String, Integer> nutrientMinLimits = new HashMap<String, Integer>();
            Map<String, Integer> nutrientMaxLimits = new HashMap<String, Integer>();

            nutrientMinLimits.put("calories", 2000);
            nutrientMinLimits.put("fat", 5);
            nutrientMinLimits.put("sodium", 30);
            nutrientMinLimits.put("carbs", 105);
            nutrientMinLimits.put("protein", 20);
            nutrientMinLimits.put("calcium", 100);

            nutrientMaxLimits.put("calories", 2400);
            nutrientMaxLimits.put("fat", 80);
            nutrientMaxLimits.put("sodium", 5000);
            nutrientMaxLimits.put("carbs", 500);
            nutrientMaxLimits.put("protein", 200);
            nutrientMaxLimits.put("calcium", 5000);

            //reads one line at a time
            while ((nextLine = reader.readNext()) != null)
            {
                nutrientsMap = new HashMap<>();
                nutrientsMap.put("calories", Double.valueOf(nextLine[5]));
                nutrientsMap.put("fat", Double.valueOf(nextLine[6]));
                nutrientsMap.put("sodium", Double.valueOf(nextLine[7]));
                nutrientsMap.put("carbs", Double.valueOf(nextLine[8]));
                nutrientsMap.put("protein", Double.valueOf(nextLine[9]));
                nutrientsMap.put("calcium", Double.valueOf(nextLine[10]));

                itemCategories = new ArrayList<>();
                itemCategories.add(Item.Category.valueOf(nextLine[3]));
                item = new Item(Long.valueOf(nextLine[0]), nextLine[1], Double.valueOf(nextLine[2]), itemCategories, Integer.valueOf(nextLine[4]), nutrientsMap, Integer.valueOf(nextLine[11]));
                allItemsMap.put(nextLine[1], item);
                itemNames.add(nextLine[1]);
            }
            List<List<String>> combinationList = new ArrayList();

            //Generate combinations - repetition allowed
/*             Generator.combination(itemNames)
                    .multi(4)
                    .stream()
                    .forEach(m -> combinationList.add(m));*/

            //Generate combinations - repetition not allowed
                Generator.combination("Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich","Pizza","Icecream","Yogurt plain","Rice cake","Pasta","Quinoa bar","Parfait","Kefir blueberry","Cheesecake","Carrot cake","Cheese balls","Garlic bread","Peach pie","Lemon pudding","Honey garlic salmon")
                    .simple(4)
                    .stream()
                    .forEach(m -> combinationList.add(m));

            //Setup Order object
            List<Meal> mealList;
            Meal meal = null;
            Order order = null;
            for(List<String> combination: combinationList){
                mealList = null;
                mealList = new ArrayList();
                //Construct Meal for each item in the combination and add to list of Meals
                for(String itemInCombination:combination) {
                    meal = new Meal();
                    meal.setItem(allItemsMap.get(itemInCombination));
                    mealList.add(meal);
                }
                //Set up Order for each combination
                order = new Order();
                order.setOrderId(1L);
                order.setMealList(mealList);
                order.setNutrientMinLimits(nutrientMinLimits);
                order.setNutrientMaxLimits(nutrientMaxLimits);
                resultMap = mealOptimizer.optimizeByOptimizationType(order);

                logger.info("\n Meal:::: \n");

                //Printing result
                for(String key: resultMap.keySet()) {
                    logger.info(key + " : " + resultMap.get(key) + " , ");
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    @Test
    public void testOptimize() {
        assertTrue(true);
    }
}