package com.practice.mealoptimizer;

import com.opencsv.CSVReader;
import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.repository.CategoryRepository;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.io.FileReader;
import java.net.URL;
import java.nio.file.Paths;
import java.util.*;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/*
 *To be deleted, for reference only
 */
//@Component
public class TheDietProblem {
/*
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ItemRepository itemRepository;

    public void readDataLineByLine(String file)
    {

        try {
            //Save all categories
            List<Category> allCategories = new ArrayList<Category>();
            allCategories.add(new Category("VEGAN", "VEGAN"));
            allCategories.add(new Category("GLUTENFREE", "GLUTEN FREE"));
            allCategories.add(new Category("DAIRYFREE", "DAIRY FREE"));
            allCategories.add(new Category("VEGETARIAN", "VEGETARIAN"));
            allCategories.add(new Category("FATFREE", "FAT FREE"));
            allCategories.add(new Category("GENERAL", "ALL"));
            categoryRepository.saveAll(allCategories);

            // Create an object of filereader
            // class with CSV file as a parameter.
            FileReader filereader = new FileReader(file);

            // create csvReader object passing
            // file reader as a parameter
            CSVReader csvReader = new CSVReader(filereader);
            String[] nextRecord;

            Item item = null;
            List<Item> itemList = new ArrayList<Item>();
            Map<String, Double> nutritionProfile = null;
            Map<Long, List<Category>> itemCatgoryMapping = new HashMap<>();
            List<Category> categoryList = null;
            // we are going to read data line by line
            while ((nextRecord = csvReader.readNext()) != null) {

                //For each record create a map <ItemID, categories>
                categoryList = new ArrayList<>();
                for(String displayValue : nextRecord[3].split(Pattern.quote("-"))) {
                    categoryList.add(new Category((displayValue.equalsIgnoreCase("ALL") ? "GENERAL" : displayValue), displayValue));
                }
                itemCatgoryMapping.put(Long.valueOf(nextRecord[0]), categoryList);

                //Create the nutrition profile
                nutritionProfile = new HashMap<String,Double>();
                nutritionProfile.put("calories",Double.valueOf(nextRecord[5]));
                nutritionProfile.put("fat",Double.valueOf(nextRecord[6]));
                nutritionProfile.put("sodium",Double.valueOf(nextRecord[7]));
                nutritionProfile.put("carbs",Double.valueOf(nextRecord[8]));
                nutritionProfile.put("protein",Double.valueOf(nextRecord[9]));
                nutritionProfile.put("calcium",Double.valueOf(nextRecord[10]));
                itemList.add(new Item(Long.valueOf(nextRecord[0]), nextRecord[1], Double.parseDouble(nextRecord[2]),  Integer.parseInt(nextRecord[4]), nutritionProfile, Integer.valueOf(nextRecord[11])));
            }
            //After reading each line, store in Item table
            itemRepository.saveAll(itemList);
            itemRepository.findAll().forEach((storedItem) -> {
                storedItem.setItemCategories(itemCatgoryMapping.get(storedItem.getItemId()));
                itemRepository.save(storedItem);
            });

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
    //In ItemController.java
    @RequestMapping(method = RequestMethod.GET, path = "/save")
    public void saveItems() {
        this.theDietProblem.readDataLineByLine("C:\\Users\\narmitha Rajesh\\IdeaProjects\\mealoptimizer\\src\\main\\resources\\items\\ItemList.csv");
    }*/
}