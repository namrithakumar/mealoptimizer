package com.practice.mealoptimizer;

import com.opencsv.CSVReader;
import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.recipe.Ingredient;
import com.practice.mealoptimizer.domain.recipe.Quantity;
import com.practice.mealoptimizer.domain.recipe.Recipe;
import com.practice.mealoptimizer.domain.recipe.RecipeIngredientQuantityMapper;
import com.practice.mealoptimizer.repository.CategoryRepository;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.repository.recipe.IngredientRepository;
import com.practice.mealoptimizer.repository.recipe.QuantityRepository;
import com.practice.mealoptimizer.repository.recipe.RecipeRepository;
import com.practice.mealoptimizer.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import com.practice.mealoptimizer.repository.recipe.RecipeRepository;
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
@Component
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

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private QuantityRepository quantityRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    public void saveIngredients() {

        List<Quantity> quantities = new ArrayList<>();
        List<Ingredient> ingredients = new ArrayList<>();
        List<Recipe> recipes = new ArrayList<>();

        Recipe recipeEggRoll = new Recipe();
        recipeEggRoll.setName("Egg Roll");
        recipeEggRoll.setDescription("A healthy way to meet your protein needs");
        recipeEggRoll.setImageUrl("https://images.indianexpress.com/2020/05/egg-roll-759.jpg");
        recipeEggRoll.setTutorialPath("https://www.youtube.com/watch?v=4z36OcbxovQ");
        recipes.add(recipeEggRoll);

        Quantity eggsQ = new Quantity();
        Ingredient egg = new Ingredient();

        //Populate values

        eggsQ.setCount(2.0);
        eggsQ.setMeasure("no");
        eggsQ.setIngredient(egg);
        quantities.add(eggsQ);

        egg.setName("egg");
        egg.setDescription("A healthy way to meet your protein needs");
        egg.setRecipe(recipeEggRoll);
        ingredients.add(egg);
        //ONION
        //Setup
        Quantity onionQ = new Quantity();
        Ingredient onion = new Ingredient();

        //Populate values
        onionQ.setCount(1.0);
        onionQ.setMeasure("no");
        onionQ.setIngredient(onion);
        quantities.add(onionQ);

        onion.setName("onion");
        onion.setDescription("Keep your heart healthy");
        onion.setRecipe(recipeEggRoll);
        ingredients.add(onion);
        //Carrot - Setup
        RecipeIngredientQuantityMapper recipeIngredientQuantityMapperCarrot = new RecipeIngredientQuantityMapper();

        Quantity carrotQ = new Quantity();
        Ingredient carrot = new Ingredient();

        //Populate values
        carrotQ.setCount(0.25);
        carrotQ.setMeasure("cup");
        carrotQ.setIngredient(carrot);
        quantities.add(carrotQ);

        carrot.setName("carrot");
        carrot.setDescription("Keep your eyes healthy");
        carrot.setRecipe(recipeEggRoll);
        ingredients.add(carrot);
        //Green chilli - Setup
        Quantity greenchilliQ = new Quantity();
        Ingredient greenchilli = new Ingredient();

        //Populate values
        greenchilliQ.setCount(1.0);
        greenchilliQ.setMeasure("no");
        greenchilliQ.setIngredient(greenchilli);
        quantities.add(greenchilliQ);

        greenchilli.setName("green chilli");
        greenchilli.setDescription("green chilli");
        greenchilli.setRecipe(recipeEggRoll);
        ingredients.add(greenchilli);
        //Cabbage - Setup
        Quantity cabbageQ = new Quantity();
        Ingredient cabbage = new Ingredient();

        //Populate values
        cabbageQ.setCount(2.0);
        cabbageQ.setMeasure("no");
        cabbageQ.setIngredient(cabbage);
        quantities.add(cabbageQ);

        cabbage.setName("cabbage");
        cabbage.setDescription("cabbage");
        cabbage.setRecipe(recipeEggRoll);
        ingredients.add(cabbage);
        //Soya sauce - Setup
        Quantity soyasauceQ = new Quantity();
        Ingredient soyasauce = new Ingredient();

       //Populate values
        soyasauceQ.setCount(2.0);
        soyasauceQ.setMeasure("spoon");
        soyasauceQ.setIngredient(soyasauce);
        quantities.add(soyasauceQ);

        soyasauce.setName("soya sauce");
        soyasauce.setDescription("soya sauce");
        soyasauce.setRecipe(recipeEggRoll);
        ingredients.add(soyasauce);
        //Butter - Setup
        Quantity butterQ = new Quantity();
        Ingredient butter = new Ingredient();

        //Populate values
        butterQ.setCount(3.0);
        butterQ.setMeasure("tbsp");
        butterQ.setIngredient(butter);
        quantities.add(butterQ);

        butter.setName("butter");
        butter.setDescription("butter");
        butter.setRecipe(recipeEggRoll);
        ingredients.add(butter);
        //Mayonnaise - Setup
        Quantity mayonnaiseQ = new Quantity();
        Ingredient mayonnaise = new Ingredient();

        //Populate values
        mayonnaiseQ.setCount(3.0);
        mayonnaiseQ.setMeasure("tsp");
        mayonnaiseQ.setIngredient(mayonnaise);
        quantities.add(mayonnaiseQ);

        mayonnaise.setName("mayonnaise");
        mayonnaise.setDescription("mayonnaise");
        mayonnaise.setRecipe(recipeEggRoll);
        ingredients.add(mayonnaise);
        //Capsicum - Setup
        Quantity capsicumQ = new Quantity();
        Ingredient capsicum = new Ingredient();
        //Populate values
        capsicumQ.setCount(0.25);
        capsicumQ.setMeasure("cup");
        capsicumQ.setIngredient(capsicum);
        quantities.add(capsicumQ);

        capsicum.setName("capsicum");
        capsicum.setDescription("capsicum");
        capsicum.setRecipe(recipeEggRoll);
        ingredients.add(capsicum);

        //Strawberry milkshake
        Recipe strawberryMilkShakeRecipe = new Recipe();
        strawberryMilkShakeRecipe.setName("Strawberry milkshake");
        strawberryMilkShakeRecipe.setDescription("Delight in every sip");
        strawberryMilkShakeRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIhI9cZoZBjSKCWYFQHeMjulmAwHc9Q08nEg&usqp=CAU");
        strawberryMilkShakeRecipe.setTutorialPath("https://www.youtube.com/watch?v=U17jQxLGZPo");
        recipes.add(strawberryMilkShakeRecipe);

        Ingredient strawberries = new Ingredient();
        Quantity strawberriesQ = new Quantity();

        strawberries.setName("frozen/fresh strawberries");
        strawberries.setDescription("frozen/fresh strawberries");
        strawberries.setRecipe(strawberryMilkShakeRecipe);
        strawberries.setQuantity(strawberriesQ);
        ingredients.add(strawberries);

        strawberriesQ.setCount(1.0);
        strawberriesQ.setMeasure("cup");
        strawberriesQ.setIngredient(strawberries);
        quantities.add(strawberriesQ);

        Ingredient milkpowder = new Ingredient();
        Quantity milkpowderQ = new Quantity();

        milkpowder.setName("milk powder");
        milkpowder.setDescription("milk powder");
        milkpowder.setRecipe(strawberryMilkShakeRecipe);
        milkpowder.setQuantity(milkpowderQ);
        ingredients.add(milkpowder);

        milkpowderQ.setCount(3.0);
        milkpowderQ.setMeasure("tbsp");
        milkpowderQ.setIngredient(milkpowder);
        quantities.add(milkpowderQ);

        Ingredient milk = new Ingredient();
        Quantity milkQ = new Quantity();

        milk.setName("milk");
        milk.setDescription("milk");
        milk.setRecipe(strawberryMilkShakeRecipe);
        milk.setQuantity(milkQ);
        ingredients.add(milk);

        milkQ.setCount(0.75);
        milkQ.setMeasure("cup");
        milkQ.setIngredient(milk);
        quantities.add(milkQ);

        Ingredient vanillaIcecream = new Ingredient();
        Quantity vanillaIcecreamQ = new Quantity();

        vanillaIcecream.setName("vanilla ice cream");
        vanillaIcecream.setDescription("vanilla ice cream");
        vanillaIcecream.setRecipe(strawberryMilkShakeRecipe);
        vanillaIcecream.setQuantity(vanillaIcecreamQ);
        ingredients.add(vanillaIcecream);

        vanillaIcecreamQ.setCount(3.0);
        vanillaIcecreamQ.setMeasure("scoop");
        vanillaIcecreamQ.setIngredient(vanillaIcecream);
        quantities.add(vanillaIcecreamQ);

        //Green salad
        Recipe greensaladRecipe = new Recipe();
        greensaladRecipe.setName("Green salad");
        greensaladRecipe.setDescription("A healthy blend of veggies to provide your daily needs");
        greensaladRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBkR4iqnG2uDfxmJ0A-bSn4YSY0sMGBGncug&usqp=CAU");
        greensaladRecipe.setTutorialPath("https://www.youtube.com/watch?v=N7qbUUD3klE");
        recipes.add(greensaladRecipe);

        Ingredient italiandressing = new Ingredient();
        Quantity italiandressingQ = new Quantity();

        italiandressing.setName("italian dressing");
        italiandressing.setDescription("italian dressing");
        italiandressing.setRecipe(greensaladRecipe);
        italiandressing.setQuantity(italiandressingQ);
        ingredients.add(italiandressing);

        italiandressingQ.setCount(0.5);
        italiandressingQ.setMeasure("cup");
        italiandressingQ.setIngredient(italiandressing);
        quantities.add(italiandressingQ);

        Ingredient romaineheart = new Ingredient();
        Quantity romaineheartQ = new Quantity();

        romaineheart.setName("romaine heart");
        romaineheart.setDescription("romaine heart");
        romaineheart.setRecipe(greensaladRecipe);
        romaineheart.setQuantity(romaineheartQ);
        ingredients.add(romaineheart);

        romaineheartQ.setCount(3.0);
        romaineheartQ.setMeasure("cup");
        romaineheartQ.setIngredient(romaineheart);
        quantities.add(romaineheartQ);

        Ingredient leafylettuce = new Ingredient();
        Quantity leafylettuceQ = new Quantity();

        leafylettuce.setName("leafy lettuce");
        leafylettuce.setDescription("leafy lettuce");
        leafylettuce.setRecipe(greensaladRecipe);
        leafylettuce.setQuantity(leafylettuceQ);
        ingredients.add(leafylettuce);

        leafylettuceQ.setCount(5.0);
        leafylettuceQ.setMeasure("cup");
        leafylettuceQ.setIngredient(leafylettuce);
        quantities.add(leafylettuceQ);

        Ingredient shallot = new Ingredient();
        Quantity shallotQ = new Quantity();

        shallot.setName("shallot (large)");
        shallot.setDescription("shallot (large)");
        shallot.setRecipe(greensaladRecipe);
        shallot.setQuantity(shallotQ);
        ingredients.add(shallot);

        shallotQ.setCount(1.0);
        shallotQ.setMeasure("no");
        shallotQ.setIngredient(shallot);
        quantities.add(shallotQ);

        Ingredient cucumber = new Ingredient();
        Quantity cucumberQ = new Quantity();

        cucumber.setName("english cucumber");
        cucumber.setDescription("english cucumber");
        cucumber.setRecipe(greensaladRecipe);
        cucumber.setQuantity(cucumberQ);
        ingredients.add(cucumber);

        cucumberQ.setCount(1.0);
        cucumberQ.setMeasure("no");
        cucumberQ.setIngredient(cucumber);
        quantities.add(cucumberQ);

        Ingredient tomato = new Ingredient();
        Quantity tomatoQ = new Quantity();

        tomato.setName("cherry tomatoes");
        tomato.setDescription("cherry tomatoes");
        tomato.setRecipe(greensaladRecipe);
        tomato.setQuantity(tomatoQ);
        ingredients.add(tomato);

        tomatoQ.setCount(0.5);
        tomatoQ.setMeasure("cup");
        tomatoQ.setIngredient(tomato);
        quantities.add(tomatoQ);

        Ingredient olive = new Ingredient();
        Quantity oliveQ = new Quantity();

        olive.setName("green olives");
        olive.setDescription("green olives");
        olive.setRecipe(greensaladRecipe);
        olive.setQuantity(oliveQ);
        ingredients.add(olive);

        oliveQ.setCount(0.5);
        oliveQ.setMeasure("cup");
        oliveQ.setIngredient(olive);
        quantities.add(oliveQ);

        Ingredient pepperoncini = new Ingredient();
        Quantity pepperonciniQ = new Quantity();

        pepperoncini.setName("sliced pepperoncini");
        pepperoncini.setDescription("sliced pepperoncini");
        pepperoncini.setRecipe(greensaladRecipe);
        pepperoncini.setQuantity(pepperonciniQ);
        ingredients.add(pepperoncini);

        pepperonciniQ.setCount(0.5);
        pepperonciniQ.setMeasure("cup");
        pepperonciniQ.setIngredient(pepperoncini);
        quantities.add(pepperonciniQ);

        Ingredient parmesan = new Ingredient();
        Quantity parmesanQ = new Quantity();

        parmesan.setName("parmesan shavings");
        parmesan.setDescription("parmesan shavings");
        parmesan.setRecipe(greensaladRecipe);
        parmesan.setQuantity(parmesanQ);
        ingredients.add(parmesan);

        parmesanQ.setCount(0.25);
        parmesanQ.setMeasure("cup");
        parmesanQ.setIngredient(parmesan);
        quantities.add(parmesanQ);

        Ingredient redpepperflakes = new Ingredient();
        Quantity redpepperflakesQ = new Quantity();

        redpepperflakes.setName("red pepper flakes");
        redpepperflakes.setDescription("red pepper flakes");
        redpepperflakes.setRecipe(greensaladRecipe);
        redpepperflakes.setQuantity(redpepperflakesQ);
        ingredients.add(redpepperflakes);

        redpepperflakesQ.setCount(0.25);
        redpepperflakesQ.setMeasure("tsp");
        redpepperflakesQ.setIngredient(redpepperflakes);
        quantities.add(redpepperflakesQ);

        //Chicken Sandwich
        Recipe chickensandwichRecipe = new Recipe();
        chickensandwichRecipe.setName("chicken sandwich");
        chickensandwichRecipe.setDescription("Taste and Health all in one");
        chickensandwichRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEAQ4Gel-woOr5dAlpf3zQZJiydAHqssWacQ&usqp=CAU");
        chickensandwichRecipe.setTutorialPath("https://www.youtube.com/watch?v=_SSGoVq5eSY");
        recipes.add(chickensandwichRecipe);

        Ingredient boiledchicken = new Ingredient();
        Quantity boiledchickenQ = new Quantity();

        boiledchicken.setName("chicken (boiled)");
        boiledchicken.setDescription("chicken (boiled)");
        boiledchicken.setRecipe(chickensandwichRecipe);
        boiledchicken.setQuantity(boiledchickenQ);
        ingredients.add(boiledchicken);

        boiledchickenQ.setCount(1.0);
        boiledchickenQ.setMeasure("cup");
        boiledchickenQ.setIngredient(boiledchicken);
        quantities.add(boiledchickenQ);

        Ingredient mayonnaiseForChicken = new Ingredient();
        Quantity mayonnaiseForChickenQ = new Quantity();

        mayonnaiseForChicken.setName("mayonnaise");
        mayonnaiseForChicken.setDescription("mayonnaise");
        mayonnaiseForChicken.setRecipe(chickensandwichRecipe);
        mayonnaiseForChicken.setQuantity(mayonnaiseForChickenQ);
        ingredients.add(boiledchicken);

        mayonnaiseForChickenQ.setCount(2.0);
        mayonnaiseForChickenQ.setMeasure("tsp");
        mayonnaiseForChickenQ.setIngredient(mayonnaiseForChicken);
        quantities.add(mayonnaiseForChickenQ);

        Ingredient pepperForChicken = new Ingredient();
        Quantity pepperForChickenQ = new Quantity();

        pepperForChicken.setName("pepper");
        pepperForChicken.setDescription("pepper");
        pepperForChicken.setRecipe(chickensandwichRecipe);
        pepperForChicken.setQuantity(pepperForChickenQ);
        ingredients.add(pepperForChicken);

        pepperForChickenQ.setCount(2.0);
        pepperForChickenQ.setMeasure("tsp");
        pepperForChickenQ.setIngredient(pepperForChicken);
        quantities.add(pepperForChickenQ);

        Ingredient breadForChicken = new Ingredient();
        Quantity breadForChickenQ = new Quantity();

        breadForChicken.setName("bread");
        breadForChicken.setDescription("bread");
        breadForChicken.setRecipe(chickensandwichRecipe);
        breadForChicken.setQuantity(breadForChickenQ);
        ingredients.add(breadForChicken);

        breadForChickenQ.setCount(2.0);
        breadForChickenQ.setMeasure("no");
        breadForChickenQ.setIngredient(breadForChicken);
        quantities.add(breadForChickenQ);

        Ingredient capsicumForChicken = new Ingredient();
        Quantity capsicumForChickenQ = new Quantity();

        capsicumForChicken.setName("capsicum");
        capsicumForChicken.setDescription("capsicum");
        capsicumForChicken.setRecipe(chickensandwichRecipe);
        capsicumForChicken.setQuantity(capsicumForChickenQ);
        ingredients.add(capsicumForChicken);

        capsicumForChickenQ.setCount(1.0);
        capsicumForChickenQ.setMeasure("no");
        capsicumForChickenQ.setIngredient(capsicumForChicken);
        quantities.add(capsicumForChickenQ);

        Ingredient lettuceForChicken = new Ingredient();
        Quantity lettuceForChickenQ = new Quantity();

        lettuceForChicken.setName("lettuce");
        lettuceForChicken.setDescription("lettuce");
        lettuceForChicken.setRecipe(chickensandwichRecipe);
        lettuceForChicken.setQuantity(lettuceForChickenQ);
        ingredients.add(lettuceForChicken);

        lettuceForChickenQ.setCount(1.0);
        lettuceForChickenQ.setMeasure("no");
        lettuceForChickenQ.setIngredient(lettuceForChicken);
        quantities.add(lettuceForChickenQ);

        //Pizza
        Recipe pizzaRecipe = new Recipe();
        pizzaRecipe.setName("pizza");
        pizzaRecipe.setDescription("Delight in every Bite");
        pizzaRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc4QGxnjN8FiWNKcBwxu1Xig_2gB35nSIKnA&usqp=CAU");
        pizzaRecipe.setTutorialPath("https://www.youtube.com/watch?v=7zY7UpcJr0g");
        recipes.add(pizzaRecipe);

        Ingredient pizzasauce = new Ingredient();
        Quantity pizzasauceQ = new Quantity();

        pizzasauce.setName("pizza sauce");
        pizzasauce.setDescription("pizza sauce");
        pizzasauce.setRecipe(pizzaRecipe);
        pizzasauce.setQuantity(pizzasauceQ);
        ingredients.add(pizzasauce);

        pizzasauceQ.setCount(3.0);
        pizzasauceQ.setMeasure("tbsp");
        pizzasauceQ.setIngredient(pizzasauce);
        quantities.add(pizzasauceQ);

        Ingredient mushroom = new Ingredient();
        Quantity mushroomQ = new Quantity();

        mushroom.setName("mushroom (sliced)");
        mushroom.setDescription("mushroom (sliced)");
        mushroom.setRecipe(pizzaRecipe);
        mushroom.setQuantity(mushroomQ);
        ingredients.add(mushroom);

        mushroomQ.setCount(5.0);
        mushroomQ.setMeasure("no");
        mushroomQ.setIngredient(mushroom);
        quantities.add(mushroomQ);

        Ingredient onionForPizza = new Ingredient();
        Quantity onionForPizzaQ = new Quantity();

        onionForPizza.setName("onion (chopped)");
        onionForPizza.setDescription("onion (chopped)");
        onionForPizza.setRecipe(pizzaRecipe);
        onionForPizza.setQuantity(onionForPizzaQ);
        ingredients.add(onionForPizza);

        onionForPizzaQ.setCount(3.0);
        onionForPizzaQ.setMeasure("tbsp");
        onionForPizzaQ.setIngredient(onionForPizza);
        quantities.add(onionForPizzaQ);

        Ingredient capsicumForPizza = new Ingredient();
        Quantity capsicumForPizzaQ = new Quantity();

        capsicumForPizza.setName("capsicum (chopped)");
        capsicumForPizza.setDescription("capsicum (chopped)");
        capsicumForPizza.setRecipe(pizzaRecipe);
        capsicumForPizza.setQuantity(capsicumForPizzaQ);
        ingredients.add(capsicumForPizza);

        capsicumForPizzaQ.setCount(0.25);
        capsicumForPizzaQ.setMeasure("cup");
        capsicumForPizzaQ.setIngredient(capsicumForPizza);
        quantities.add(capsicumForPizzaQ);

        Ingredient jalapenosForPizza = new Ingredient();
        Quantity jalapenosForPizzaQ = new Quantity();

        jalapenosForPizza.setName("pickled jalapenos");
        jalapenosForPizza.setDescription("pickled jalapenos");
        jalapenosForPizza.setRecipe(pizzaRecipe);
        jalapenosForPizza.setQuantity(jalapenosForPizzaQ);
        ingredients.add(jalapenosForPizza);

        jalapenosForPizzaQ.setCount(9.0);
        jalapenosForPizzaQ.setMeasure("no");
        jalapenosForPizzaQ.setIngredient(jalapenosForPizza);
        quantities.add(jalapenosForPizzaQ);

        Ingredient oliveForPizza = new Ingredient();
        Quantity oliveForPizzaQ = new Quantity();

        oliveForPizza.setName("black olives (chopped)");
        oliveForPizza.setDescription("black olives (chopped)");
        oliveForPizza.setRecipe(pizzaRecipe);
        oliveForPizza.setQuantity(oliveForPizzaQ);
        ingredients.add(oliveForPizza);

        oliveForPizzaQ.setCount(0.25);
        oliveForPizzaQ.setMeasure("cup");
        oliveForPizzaQ.setIngredient(oliveForPizza);
        quantities.add(oliveForPizzaQ);

        Ingredient cheeseForPizza = new Ingredient();
        Quantity cheeseForPizzaQ = new Quantity();

        cheeseForPizza.setName("mozzarella cheese");
        cheeseForPizza.setDescription("mozzarella cheese");
        cheeseForPizza.setRecipe(pizzaRecipe);
        cheeseForPizza.setQuantity(cheeseForPizzaQ);
        ingredients.add(cheeseForPizza);

        cheeseForPizzaQ.setCount(0.5);
        cheeseForPizzaQ.setMeasure("cup");
        cheeseForPizzaQ.setIngredient(cheeseForPizza);
        quantities.add(cheeseForPizzaQ);

        Ingredient seasoningForPizza = new Ingredient();
        Quantity seasoningForPizzaQ = new Quantity();

        seasoningForPizza.setName("oregano / italian seasoning / mixed herbs");
        seasoningForPizza.setDescription("oregano / italian seasoning / mixed herbs");
        seasoningForPizza.setRecipe(pizzaRecipe);
        seasoningForPizza.setQuantity(seasoningForPizzaQ);
        ingredients.add(seasoningForPizza);

        seasoningForPizzaQ.setCount(0.5);
        seasoningForPizzaQ.setMeasure("tsp");
        seasoningForPizzaQ.setIngredient(seasoningForPizza);
        quantities.add(seasoningForPizzaQ);

        Ingredient doughForPizza = new Ingredient();
        Quantity doughForPizzaQ = new Quantity();

        doughForPizza.setName("pizza dough");
        doughForPizza.setDescription("oregano / italian seasoning / mixed herbs");
        doughForPizza.setRecipe(pizzaRecipe);
        doughForPizza.setQuantity(doughForPizzaQ);
        ingredients.add(doughForPizza);

        doughForPizzaQ.setCount(0.5);
        doughForPizzaQ.setMeasure("cup");
        doughForPizzaQ.setIngredient(doughForPizza);
        quantities.add(doughForPizzaQ);

        //Icecream
        Recipe icecreamRecipe = new Recipe();
        icecreamRecipe.setName("icecream");
        icecreamRecipe.setDescription("A frozen dessert you can enjoy on a hot day");
        icecreamRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMfZ3Pwml_Y6x8u7g5BYSAXMVcEXRlAM_IMQ&usqp=CAU");
        icecreamRecipe.setTutorialPath("https://www.youtube.com/watch?v=4rsLIcl7sW4");
        recipes.add(icecreamRecipe);

        Ingredient whippedCream = new Ingredient();
        Quantity whippedCreamQ = new Quantity();

        whippedCream.setName("whipped cream, cold");
        whippedCream.setDescription("Whipped cream, cold");
        whippedCream.setRecipe(icecreamRecipe);
        whippedCream.setQuantity(whippedCreamQ);
        ingredients.add(whippedCream);

        whippedCreamQ.setCount(2.0);
        whippedCreamQ.setMeasure("cup");
        whippedCreamQ.setIngredient(whippedCream);
        quantities.add(whippedCreamQ);

        Ingredient condensedMilk = new Ingredient();
        Quantity condensedMilkQ = new Quantity();

        condensedMilk.setName("condensed milk, cold");
        condensedMilk.setDescription("condensed milk, cold");
        condensedMilk.setRecipe(icecreamRecipe);
        condensedMilk.setQuantity(condensedMilkQ);
        ingredients.add(condensedMilk);

        condensedMilkQ.setCount(14.0);
        condensedMilkQ.setMeasure("oz");
        condensedMilkQ.setIngredient(condensedMilk);
        quantities.add(condensedMilkQ);

        Ingredient vanillaExtract = new Ingredient();
        Quantity vanillaExtractQ = new Quantity();

        vanillaExtract.setName("vanilla extract");
        vanillaExtract.setDescription("vanilla extract");
        vanillaExtract.setRecipe(icecreamRecipe);
        vanillaExtract.setQuantity(vanillaExtractQ);
        ingredients.add(vanillaExtract);

        vanillaExtractQ.setCount(1.0);
        vanillaExtractQ.setMeasure("tsp");
        vanillaExtractQ.setIngredient(vanillaExtract);
        quantities.add(vanillaExtractQ);

        //Yogurt plain
        Recipe yogurtRecipe = new Recipe();
        yogurtRecipe.setName("yogurt plain");
        yogurtRecipe.setDescription("Good Yogurt for Good Moments");
        yogurtRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvKxTWhkUToXyfXbGMUtnPUU8D5K01bBZaoA&usqp=CAU");
        yogurtRecipe.setTutorialPath("https://www.youtube.com/watch?v=abKmq-qm77Q");
        recipes.add(yogurtRecipe);

        Ingredient milkpowderForYogurt = new Ingredient();
        Quantity milkpowderForYogurtQ = new Quantity();

        milkpowderForYogurt.setName("milk powder");
        milkpowderForYogurt.setDescription("milk powder");
        milkpowderForYogurt.setRecipe(yogurtRecipe);
        milkpowderForYogurt.setQuantity(milkpowderForYogurtQ);
        ingredients.add(milkpowderForYogurt);

        milkpowderForYogurtQ.setCount(300.0);
        milkpowderForYogurtQ.setMeasure("g");
        milkpowderForYogurtQ.setIngredient(milkpowderForYogurt);
        quantities.add(milkpowderForYogurtQ);

        Ingredient hotwaterForYogurt = new Ingredient();
        Quantity hotwaterForYogurtQ = new Quantity();

        hotwaterForYogurt.setName("hot water");
        hotwaterForYogurt.setDescription("hot water");
        hotwaterForYogurt.setRecipe(yogurtRecipe);
        hotwaterForYogurt.setQuantity(hotwaterForYogurtQ);
        ingredients.add(hotwaterForYogurt);

        hotwaterForYogurtQ.setCount(1.0);
        hotwaterForYogurtQ.setMeasure("l");
        hotwaterForYogurtQ.setIngredient(hotwaterForYogurt);
        quantities.add(hotwaterForYogurtQ);

        Ingredient yogurtcultureForYogurt = new Ingredient();
        Quantity yogurtcultureForYogurtQ = new Quantity();

        yogurtcultureForYogurt.setName("yogurt culture / yogurt");
        yogurtcultureForYogurt.setDescription("yogurt culture / yogurt");
        yogurtcultureForYogurt.setRecipe(yogurtRecipe);
        yogurtcultureForYogurt.setQuantity(yogurtcultureForYogurtQ);
        ingredients.add(yogurtcultureForYogurt);

        yogurtcultureForYogurtQ.setCount(2.0);
        yogurtcultureForYogurtQ.setMeasure("tbsp");
        yogurtcultureForYogurtQ.setIngredient(yogurtcultureForYogurt);
        quantities.add(yogurtcultureForYogurtQ);

        //Rice cake
        Recipe ricecakeRecipe = new Recipe();
        ricecakeRecipe.setName("rice cake");
        ricecakeRecipe.setDescription("A cake so yummy, it will fill your tummy");
        ricecakeRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTkRVAPy8mEe7cZrOgtjKKmNwTBHfsegoXbQ&usqp=CAU");
        ricecakeRecipe.setTutorialPath("https://www.youtube.com/watch?v=dxadGMN6AP8");
        recipes.add(ricecakeRecipe);

        Ingredient riceflour = new Ingredient();
        Quantity riceflourQ = new Quantity();

        riceflour.setName("rice flour");
        riceflour.setDescription("rice flour");
        riceflour.setRecipe(ricecakeRecipe);
        riceflour.setQuantity(riceflourQ);
        ingredients.add(riceflour);

        riceflourQ.setCount(130.0);
        riceflourQ.setMeasure("g");
        riceflourQ.setIngredient(riceflour);
        quantities.add(riceflourQ);

        Ingredient sugar = new Ingredient();
        Quantity sugarQ = new Quantity();

        sugar.setName("sugar");
        sugar.setDescription("sugar");
        sugar.setRecipe(ricecakeRecipe);
        sugar.setQuantity(sugarQ);
        ingredients.add(sugar);

        sugarQ.setCount(100.0);
        sugarQ.setMeasure("g");
        sugarQ.setIngredient(sugar);
        quantities.add(sugarQ);

        Ingredient milkForRiceCake = new Ingredient();
        Quantity milkForRiceCakeQ = new Quantity();

        milkForRiceCake.setName("milk");
        milkForRiceCake.setDescription("milk");
        milkForRiceCake.setRecipe(ricecakeRecipe);
        milkForRiceCake.setQuantity(milkForRiceCakeQ);
        ingredients.add(milkForRiceCake);

        milkForRiceCakeQ.setCount(60.0);
        milkForRiceCakeQ.setMeasure("ml");
        milkForRiceCakeQ.setIngredient(milkForRiceCake);
        quantities.add(milkForRiceCakeQ);

        Ingredient cookingOilForRiceCake = new Ingredient();
        Quantity cookingOilForRiceCakeQ = new Quantity();

        cookingOilForRiceCake.setName("cooking oil");
        cookingOilForRiceCake.setDescription("cooking oil");
        cookingOilForRiceCake.setRecipe(ricecakeRecipe);
        cookingOilForRiceCake.setQuantity(cookingOilForRiceCakeQ);
        ingredients.add(cookingOilForRiceCake);

        cookingOilForRiceCakeQ.setCount(40.0);
        cookingOilForRiceCakeQ.setMeasure("ml");
        cookingOilForRiceCakeQ.setIngredient(cookingOilForRiceCake);
        quantities.add(cookingOilForRiceCakeQ);

        Ingredient eggsForRiceCake = new Ingredient();
        Quantity eggsForRiceCakeQ = new Quantity();

        eggsForRiceCake.setName("eggs");
        eggsForRiceCake.setDescription("eggs");
        eggsForRiceCake.setRecipe(ricecakeRecipe);
        eggsForRiceCake.setQuantity(eggsForRiceCakeQ);
        ingredients.add(eggsForRiceCake);

        eggsForRiceCakeQ.setCount(5.0);
        eggsForRiceCakeQ.setMeasure("no");
        eggsForRiceCakeQ.setIngredient(eggsForRiceCake);
        quantities.add(eggsForRiceCakeQ);

        Ingredient lemonjuiceForRiceCake = new Ingredient();
        Quantity lemonjuiceForRiceCakeQ = new Quantity();

        lemonjuiceForRiceCake.setName("lemon juice");
        lemonjuiceForRiceCake.setDescription("lemon juice");
        lemonjuiceForRiceCake.setRecipe(ricecakeRecipe);
        lemonjuiceForRiceCake.setQuantity(lemonjuiceForRiceCakeQ);
        ingredients.add(lemonjuiceForRiceCake);

        lemonjuiceForRiceCakeQ.setCount(1.0);
        lemonjuiceForRiceCakeQ.setMeasure("tsp");
        lemonjuiceForRiceCakeQ.setIngredient(lemonjuiceForRiceCake);
        quantities.add(lemonjuiceForRiceCakeQ);

        Ingredient vanillaextractForRiceCake = new Ingredient();
        Quantity vanillaextractForRiceCakeQ = new Quantity();

        vanillaextractForRiceCake.setName("vanilla extract");
        vanillaextractForRiceCake.setDescription("vanilla extract");
        vanillaextractForRiceCake.setRecipe(ricecakeRecipe);
        vanillaextractForRiceCake.setQuantity(vanillaextractForRiceCakeQ);
        ingredients.add(vanillaextractForRiceCake);

        vanillaextractForRiceCakeQ.setCount(2.0);
        vanillaextractForRiceCakeQ.setMeasure("tsp");
        vanillaextractForRiceCakeQ.setIngredient(vanillaextractForRiceCake);
        quantities.add(vanillaextractForRiceCakeQ);

        //Pasta
        Recipe pastaRecipe = new Recipe();
        pastaRecipe.setName("pasta");
        pastaRecipe.setDescription("From Italy, with love");
        pastaRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc5uyrM3mOd2zWNtRDtLtMboQNOrYWIDdapA&usqp=CAU");
        pastaRecipe.setTutorialPath("https://www.youtube.com/watch?v=0VQEJARHJ44");
        recipes.add(pastaRecipe);

        Ingredient pennePasta = new Ingredient();
        Quantity pennePastaQ = new Quantity();

        pennePasta.setName("penne pasta");
        pennePasta.setDescription("penne pasta");
        pennePasta.setRecipe(pastaRecipe);
        pennePasta.setQuantity(pennePastaQ);
        ingredients.add(pennePasta);

        pennePastaQ.setCount(1.0);
        pennePastaQ.setMeasure("cup");
        pennePastaQ.setIngredient(pennePasta);
        quantities.add(pennePastaQ);

        Ingredient saltForPasta = new Ingredient();
        Quantity saltForPastaQ = new Quantity();

        saltForPasta.setName("salt");
        saltForPasta.setDescription("salt");
        saltForPasta.setRecipe(pastaRecipe);
        saltForPasta.setQuantity(saltForPastaQ);
        ingredients.add(saltForPasta);

        saltForPastaQ.setCount(0.5);
        saltForPastaQ.setMeasure("tsp");
        saltForPastaQ.setIngredient(saltForPasta);
        quantities.add(saltForPastaQ);

        Ingredient oilForPasta = new Ingredient();
        Quantity oilForPastaQ = new Quantity();

        oilForPasta.setName("oil");
        oilForPasta.setDescription("oil");
        oilForPasta.setRecipe(pastaRecipe);
        oilForPasta.setQuantity(oilForPastaQ);
        ingredients.add(oilForPasta);

        oilForPastaQ.setCount(1.0);
        oilForPastaQ.setMeasure("tsp");
        oilForPastaQ.setIngredient(oilForPasta);
        quantities.add(oilForPastaQ);

        Ingredient butterForPasta = new Ingredient();
        Quantity butterForPastaQ = new Quantity();

        butterForPasta.setName("butter");
        butterForPasta.setDescription("butter");
        butterForPasta.setRecipe(pastaRecipe);
        butterForPasta.setQuantity(butterForPastaQ);
        ingredients.add(butterForPasta);

        butterForPastaQ.setCount(1.0);
        butterForPastaQ.setMeasure("tsp");
        butterForPastaQ.setIngredient(butterForPasta);
        quantities.add(butterForPastaQ);

        Ingredient garlicForPasta = new Ingredient();
        Quantity garlicForPastaQ = new Quantity();

        garlicForPasta.setName("chopped garlic");
        garlicForPasta.setDescription("chopped garlic");
        garlicForPasta.setRecipe(pastaRecipe);
        garlicForPasta.setQuantity(garlicForPastaQ);
        ingredients.add(garlicForPasta);

        garlicForPastaQ.setCount(4.0);
        garlicForPastaQ.setMeasure("tsp");
        garlicForPastaQ.setIngredient(garlicForPasta);
        quantities.add(garlicForPastaQ);

        Ingredient gingerForPasta = new Ingredient();
        Quantity gingerForPastaQ = new Quantity();

        gingerForPasta.setName("chopped ginger");
        gingerForPasta.setDescription("chopped ginger");
        gingerForPasta.setRecipe(pastaRecipe);
        gingerForPasta.setQuantity(gingerForPastaQ);
        ingredients.add(gingerForPasta);

        gingerForPastaQ.setCount(2.0);
        gingerForPastaQ.setMeasure("tsp");
        gingerForPastaQ.setIngredient(gingerForPasta);
        quantities.add(gingerForPastaQ);

        Ingredient onionForPasta = new Ingredient();
        Quantity onionForPastaQ = new Quantity();

        onionForPasta.setName("chopped onion");
        onionForPasta.setDescription("chopped onion");
        onionForPasta.setRecipe(pastaRecipe);
        onionForPasta.setQuantity(onionForPastaQ);
        ingredients.add(onionForPasta);

        onionForPastaQ.setCount(0.5);
        onionForPastaQ.setMeasure("cup");
        onionForPastaQ.setIngredient(onionForPasta);
        quantities.add(onionForPastaQ);

        Ingredient tomatoPulp = new Ingredient();
        Quantity tomatoPulpQ = new Quantity();

        tomatoPulp.setName("tomato pulp");
        tomatoPulp.setDescription("tomato pulp");
        tomatoPulp.setRecipe(pastaRecipe);
        tomatoPulp.setQuantity(tomatoPulpQ);
        ingredients.add(tomatoPulp);

        tomatoPulpQ.setCount(1.0);
        tomatoPulpQ.setMeasure("cup");
        tomatoPulpQ.setIngredient(tomatoPulp);
        quantities.add(tomatoPulpQ);

        Ingredient tomatoSauce = new Ingredient();
        Quantity tomatoSauceQ = new Quantity();

        tomatoSauce.setName("tomato sauce");
        tomatoSauce.setDescription("tomato sauce");
        tomatoSauce.setRecipe(pastaRecipe);
        tomatoSauce.setQuantity(tomatoSauceQ);
        ingredients.add(tomatoSauce);

        tomatoSauceQ.setCount(2.0);
        tomatoSauceQ.setMeasure("tbsp");
        tomatoSauceQ.setIngredient(tomatoSauce);
        quantities.add(tomatoSauceQ);

        Ingredient cornForPasta = new Ingredient();
        Quantity cornForPastaQ = new Quantity();

        cornForPasta.setName("corn");
        cornForPasta.setDescription("corn");
        cornForPasta.setRecipe(pastaRecipe);
        cornForPasta.setQuantity(cornForPastaQ);
        ingredients.add(cornForPasta);

        cornForPastaQ.setCount(2.0);
        cornForPastaQ.setMeasure("tbsp");
        cornForPastaQ.setIngredient(cornForPasta);
        quantities.add(cornForPastaQ);

        Ingredient capsicumForPasta = new Ingredient();
        Quantity capsicumForPastaQ = new Quantity();

        capsicumForPasta.setName("chopped capsicum");
        capsicumForPasta.setDescription("chopped capsicum");
        capsicumForPasta.setRecipe(pastaRecipe);
        capsicumForPasta.setQuantity(capsicumForPastaQ);
        ingredients.add(capsicumForPasta);

        capsicumForPastaQ.setCount(0.25);
        capsicumForPastaQ.setMeasure("cup");
        capsicumForPastaQ.setIngredient(capsicumForPasta);
        quantities.add(capsicumForPastaQ);

        Ingredient carrotForPasta = new Ingredient();
        Quantity carrotForPastaQ = new Quantity();

        carrotForPasta.setName("chopped carrot");
        carrotForPasta.setDescription("chopped carrot");
        carrotForPasta.setRecipe(pastaRecipe);
        carrotForPasta.setQuantity(carrotForPastaQ);
        ingredients.add(carrotForPasta);

        carrotForPastaQ.setCount(0.25);
        carrotForPastaQ.setMeasure("cup");
        carrotForPastaQ.setIngredient(carrotForPasta);
        quantities.add(carrotForPastaQ);

        Ingredient broccoliForPasta = new Ingredient();
        Quantity broccoliForPastaQ = new Quantity();

        broccoliForPasta.setName("broccoli florets");
        broccoliForPasta.setDescription("broccoli florets");
        broccoliForPasta.setRecipe(pastaRecipe);
        broccoliForPasta.setQuantity(broccoliForPastaQ);
        ingredients.add(broccoliForPasta);

        broccoliForPastaQ.setCount(7.0);
        broccoliForPastaQ.setMeasure("no");
        broccoliForPastaQ.setIngredient(broccoliForPasta);
        quantities.add(broccoliForPastaQ);

        Ingredient waterForPasta = new Ingredient();
        Quantity waterForPastaQ = new Quantity();

        waterForPasta.setName("water");
        waterForPasta.setDescription("water");
        waterForPasta.setRecipe(pastaRecipe);
        waterForPasta.setQuantity(waterForPastaQ);
        ingredients.add(waterForPasta);

        waterForPastaQ.setCount(3.0);
        waterForPastaQ.setMeasure("tbsp");
        waterForPastaQ.setIngredient(waterForPasta);
        quantities.add(waterForPastaQ);

        Ingredient herbsForPasta = new Ingredient();
        Quantity herbsForPastaQ = new Quantity();

        herbsForPasta.setName("mixed herbs( basil, marjoram, oregano, rosemary, sage, thyme )");
        herbsForPasta.setDescription("mixed herbs( basil, marjoram, oregano, rosemary, sage, thyme )");
        herbsForPasta.setRecipe(pastaRecipe);
        herbsForPasta.setQuantity(herbsForPastaQ);
        ingredients.add(herbsForPasta);

        herbsForPastaQ.setCount(0.5);
        herbsForPastaQ.setMeasure("tsp");
        herbsForPastaQ.setIngredient(herbsForPasta);
        quantities.add(herbsForPastaQ);

        //Quinoa bar
        Recipe quinoaBarRecipe = new Recipe();
        quinoaBarRecipe.setName("quinoa bar");
        quinoaBarRecipe.setDescription("Just what your body needs");
        quinoaBarRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxVQPW4jqyC-KLFiwBeOQOQgKZiqRo5pGpQw&usqp=CAU");
        quinoaBarRecipe.setTutorialPath("https://www.youtube.com/watch?v=DvSGKjXnDVY");
        recipes.add(quinoaBarRecipe);

        Ingredient oatFlakes = new Ingredient();
        Quantity oatFlakesQ = new Quantity();

        oatFlakes.setName("oat flakes");
        oatFlakes.setDescription("oat flakes");
        oatFlakes.setRecipe(quinoaBarRecipe);
        oatFlakes.setQuantity(oatFlakesQ);
        ingredients.add(oatFlakes);

        oatFlakesQ.setCount(100.0);
        oatFlakesQ.setMeasure("g");
        oatFlakesQ.setIngredient(oatFlakes);
        quantities.add(oatFlakesQ);

        Ingredient quinoa = new Ingredient();
        Quantity quinoaQ = new Quantity();

        quinoa.setName("quinoa");
        quinoa.setDescription("quinoa");
        quinoa.setRecipe(quinoaBarRecipe);
        quinoa.setQuantity(quinoaQ);
        ingredients.add(quinoa);

        quinoaQ.setCount(50.0);
        quinoaQ.setMeasure("g");
        quinoaQ.setIngredient(quinoa);
        quantities.add(quinoaQ);

        Ingredient chiaSeeds = new Ingredient();
        Quantity chiaSeedsQ = new Quantity();

        chiaSeeds.setName("chia seeds");
        chiaSeeds.setDescription("chia seeds");
        chiaSeeds.setRecipe(quinoaBarRecipe);
        chiaSeeds.setQuantity(chiaSeedsQ);
        ingredients.add(chiaSeeds);

        chiaSeedsQ.setCount(20.0);
        chiaSeedsQ.setMeasure("g");
        chiaSeedsQ.setIngredient(chiaSeeds);
        quantities.add(chiaSeedsQ);

        Ingredient raisins = new Ingredient();
        Quantity raisinsQ = new Quantity();

        raisins.setName("raisins");
        raisins.setDescription("raisins");
        raisins.setRecipe(quinoaBarRecipe);
        raisins.setQuantity(raisinsQ);
        ingredients.add(raisins);

        raisinsQ.setCount(30.0);
        raisinsQ.setMeasure("g");
        raisinsQ.setIngredient(raisins);
        quantities.add(raisinsQ);

        Ingredient almonds = new Ingredient();
        Quantity almondsQ = new Quantity();

        almonds.setName("chopped almonds");
        almonds.setDescription("chopped almonds");
        almonds.setRecipe(quinoaBarRecipe);
        almonds.setQuantity(almondsQ);
        ingredients.add(almonds);

        almondsQ.setCount(30.0);
        almondsQ.setMeasure("g");
        almondsQ.setIngredient(almonds);
        quantities.add(almondsQ);

        Ingredient peanutButter = new Ingredient();
        Quantity peanutButterQ = new Quantity();

        peanutButter.setName("peanut butter");
        peanutButter.setDescription("peanut butter");
        peanutButter.setRecipe(quinoaBarRecipe);
        peanutButter.setQuantity(peanutButterQ);
        ingredients.add(peanutButter);

        peanutButterQ.setCount(50.0);
        peanutButterQ.setMeasure("g");
        peanutButterQ.setIngredient(peanutButter);
        quantities.add(peanutButterQ);

        Ingredient honeyForQuinoaBar = new Ingredient();
        Quantity honeyForQuinoaBarQ = new Quantity();

        honeyForQuinoaBar.setName("honey");
        honeyForQuinoaBar.setDescription("honey");
        honeyForQuinoaBar.setRecipe(quinoaBarRecipe);
        honeyForQuinoaBar.setQuantity(honeyForQuinoaBarQ);
        ingredients.add(honeyForQuinoaBar);

        honeyForQuinoaBarQ.setCount(70.0);
        honeyForQuinoaBarQ.setMeasure("g");
        honeyForQuinoaBarQ.setIngredient(honeyForQuinoaBar);
        quantities.add(honeyForQuinoaBarQ);

        //Parfait
        Recipe parfaitRecipe = new Recipe();
        parfaitRecipe.setName("parfait");
        parfaitRecipe.setDescription("The best thing you will ever taste");
        parfaitRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjfRRCWU_BANMahwp2VrQffxlTJwNF7-GNzw&usqp=CAU");
        parfaitRecipe.setTutorialPath("https://www.youtube.com/watch?v=uaa2NqGsOzI");
        recipes.add(parfaitRecipe);

        Ingredient oatFlakesForParfait = new Ingredient();
        Quantity oatFlakesForParfaitQ = new Quantity();

        oatFlakesForParfait.setName("oat flakes");
        oatFlakesForParfait.setDescription("oat flakes");
        oatFlakesForParfait.setRecipe(quinoaBarRecipe);
        oatFlakesForParfait.setQuantity(oatFlakesForParfaitQ);
        ingredients.add(oatFlakesForParfait);

        oatFlakesForParfaitQ.setCount(0.5);
        oatFlakesForParfaitQ.setMeasure("cup");
        oatFlakesForParfaitQ.setIngredient(oatFlakesForParfait);
        quantities.add(oatFlakesForParfaitQ);

        Ingredient walnuts = new Ingredient();
        Quantity walnutsQ = new Quantity();

        walnuts.setName("walnuts");
        walnuts.setDescription("walnuts");
        walnuts.setRecipe(quinoaBarRecipe);
        walnuts.setQuantity(walnutsQ);
        ingredients.add(walnuts);

        walnutsQ.setCount(1.0);
        walnutsQ.setMeasure("tbsp");
        walnutsQ.setIngredient(walnuts);
        quantities.add(walnutsQ);

        Ingredient raisinsForParfait = new Ingredient();
        Quantity raisinsForParfaitQ = new Quantity();

        raisinsForParfait.setName("raisins");
        raisinsForParfait.setDescription("raisins");
        raisinsForParfait.setRecipe(quinoaBarRecipe);
        raisinsForParfait.setQuantity(raisinsForParfaitQ);
        ingredients.add(raisinsForParfait);

        raisinsForParfaitQ.setCount(1.0);
        raisinsForParfaitQ.setMeasure("tbsp");
        raisinsForParfaitQ.setIngredient(raisinsForParfait);
        quantities.add(raisinsForParfaitQ);

        Ingredient melonseeds = new Ingredient();
        Quantity melonseedsQ = new Quantity();

        melonseeds.setName("melon seeds");
        melonseeds.setDescription("melon seeds");
        melonseeds.setRecipe(quinoaBarRecipe);
        melonseeds.setQuantity(melonseedsQ);
        ingredients.add(melonseeds);

        melonseedsQ.setCount(0.5);
        melonseedsQ.setMeasure("tbsp");
        melonseedsQ.setIngredient(melonseeds);
        quantities.add(melonseedsQ);

        Ingredient pumpkinseeds = new Ingredient();
        Quantity pumpkinseedsQ = new Quantity();

        pumpkinseeds.setName("pumpkin seeds");
        pumpkinseeds.setDescription("pumpkin seeds");
        pumpkinseeds.setRecipe(quinoaBarRecipe);
        pumpkinseeds.setQuantity(pumpkinseedsQ);
        ingredients.add(pumpkinseeds);

        pumpkinseedsQ.setCount(0.5);
        pumpkinseedsQ.setMeasure("tbsp");
        pumpkinseedsQ.setIngredient(pumpkinseeds);
        quantities.add(pumpkinseedsQ);

        Ingredient honeyForParfait = new Ingredient();
        Quantity honeyForParfaitQ = new Quantity();

        honeyForParfait.setName("honey");
        honeyForParfait.setDescription("honey");
        honeyForParfait.setRecipe(quinoaBarRecipe);
        honeyForParfait.setQuantity(honeyForParfaitQ);
        ingredients.add(honeyForParfait);

        honeyForParfaitQ.setCount(5.0);
        honeyForParfaitQ.setMeasure("tbsp");
        honeyForParfaitQ.setIngredient(honeyForParfait);
        quantities.add(honeyForParfaitQ);

        Ingredient yogurtForParfait = new Ingredient();
        Quantity yogurtForParfaitQ = new Quantity();

        yogurtForParfait.setName("yogurt");
        yogurtForParfait.setDescription("yogurt");
        yogurtForParfait.setRecipe(quinoaBarRecipe);
        yogurtForParfait.setQuantity(yogurtForParfaitQ);
        ingredients.add(yogurtForParfait);

        yogurtForParfaitQ.setCount(0.75);
        yogurtForParfaitQ.setMeasure("cup");
        yogurtForParfaitQ.setIngredient(yogurtForParfait);
        quantities.add(yogurtForParfaitQ);

        Ingredient strawberriesForParfait = new Ingredient();
        Quantity strawberriesForParfaitQ = new Quantity();

        strawberriesForParfait.setName("strawberries");
        strawberriesForParfait.setDescription("strawberries");
        strawberriesForParfait.setRecipe(quinoaBarRecipe);
        strawberriesForParfait.setQuantity(strawberriesForParfaitQ);
        ingredients.add(strawberriesForParfait);

        strawberriesForParfaitQ.setCount(4.0);
        strawberriesForParfaitQ.setMeasure("no");
        strawberriesForParfaitQ.setIngredient(strawberriesForParfait);
        quantities.add(strawberriesForParfaitQ);

        Ingredient mulberriesForParfait = new Ingredient();
        Quantity mulberriesForParfaitQ = new Quantity();

        mulberriesForParfait.setName("mulberries");
        mulberriesForParfait.setDescription("mulberries");
        mulberriesForParfait.setRecipe(quinoaBarRecipe);
        mulberriesForParfait.setQuantity(mulberriesForParfaitQ);
        ingredients.add(mulberriesForParfait);

        mulberriesForParfaitQ.setCount(10.0);
        mulberriesForParfaitQ.setMeasure("no");
        mulberriesForParfaitQ.setIngredient(mulberriesForParfait);
        quantities.add(mulberriesForParfaitQ);

        Ingredient blueberriesForParfait = new Ingredient();
        Quantity blueberriesForParfaitQ = new Quantity();

        blueberriesForParfait.setName("blueberries");
        blueberriesForParfait.setDescription("blueberries");
        blueberriesForParfait.setRecipe(quinoaBarRecipe);
        blueberriesForParfait.setQuantity(blueberriesForParfaitQ);
        ingredients.add(blueberriesForParfait);

        blueberriesForParfaitQ.setCount(14.0);
        blueberriesForParfaitQ.setMeasure("no");
        blueberriesForParfaitQ.setIngredient(blueberriesForParfait);
        quantities.add(blueberriesForParfaitQ);

        Ingredient mintForParfait = new Ingredient();
        Quantity mintForParfaitQ = new Quantity();

        mintForParfait.setName("fresh mint");
        mintForParfait.setDescription("fresh mint");
        mintForParfait.setRecipe(quinoaBarRecipe);
        blueberriesForParfait.setQuantity(mintForParfaitQ);
        ingredients.add(mintForParfait);

        mintForParfaitQ.setCount(0.5);
        mintForParfaitQ.setMeasure("tsp");
        mintForParfaitQ.setIngredient(mintForParfait);
        quantities.add(mintForParfaitQ);

        //Kefir blueberry
        Recipe kefirBlueberryRecipe = new Recipe();
        kefirBlueberryRecipe.setName("kefir blueberry");
        kefirBlueberryRecipe.setDescription("Hot summer sun? Try one.");
        kefirBlueberryRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsVUejZ99xee31E6OqKrYugE4N-lx6sDn7tQ&usqp=CAU");
        kefirBlueberryRecipe.setTutorialPath("https://www.youtube.com/watch?v=mizf8zkqoh4");
        recipes.add(kefirBlueberryRecipe);

        Ingredient kefir = new Ingredient();
        Quantity kefirQ = new Quantity();

        kefir.setName("homemade kefir");
        kefir.setDescription("homemade kefir");
        kefir.setRecipe(kefirBlueberryRecipe);
        kefir.setQuantity(kefirQ);
        ingredients.add(kefir);

        kefirQ.setCount(4.0);
        kefirQ.setMeasure("cup");
        kefirQ.setIngredient(kefir);
        quantities.add(kefirQ);

        Ingredient blueberriesForKefir = new Ingredient();
        Quantity blueberriesForKefirQ = new Quantity();

        blueberriesForKefir.setName("fresh blueberries");
        blueberriesForKefir.setDescription("fresh blueberries");
        blueberriesForKefir.setRecipe(kefirBlueberryRecipe);
        blueberriesForKefir.setQuantity(blueberriesForKefirQ);
        ingredients.add(blueberriesForKefir);

        blueberriesForKefirQ.setCount(1.0);
        blueberriesForKefirQ.setMeasure("cup");
        blueberriesForKefirQ.setIngredient(blueberriesForKefir);
        quantities.add(blueberriesForKefirQ);

        Ingredient sugarForKefir = new Ingredient();
        Quantity sugarForKefirQ = new Quantity();

        sugarForKefir.setName("granulated sugar");
        sugarForKefir.setDescription("granulated sugar");
        sugarForKefir.setRecipe(kefirBlueberryRecipe);
        sugarForKefir.setQuantity(sugarForKefirQ);
        ingredients.add(sugarForKefir);

        sugarForKefirQ.setCount(0.25);
        sugarForKefirQ.setMeasure("cup");
        sugarForKefirQ.setIngredient(sugarForKefir);
        quantities.add(sugarForKefirQ);

        //Cheesecake
        Recipe cheesecakeRecipe = new Recipe();
        cheesecakeRecipe.setName("cheesecake");
        cheesecakeRecipe.setDescription("Find regular cake boring? Gimme a try");
        cheesecakeRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwTy6PZPqcIoQ61idPrl1Hr9lEUQ1irJKGrQ&usqp=CAU");
        cheesecakeRecipe.setTutorialPath("https://www.youtube.com/watch?v=wNLxiRcNsPg");
        recipes.add(cheesecakeRecipe);

        Ingredient grahamCrackerCrumbs = new Ingredient();
        Quantity grahamCrackerCrumbsQ = new Quantity();

        grahamCrackerCrumbs.setName("graham cracker crumbs");
        grahamCrackerCrumbs.setDescription("graham cracker crumbs");
        grahamCrackerCrumbs.setRecipe(cheesecakeRecipe);
        grahamCrackerCrumbs.setQuantity(grahamCrackerCrumbsQ);
        ingredients.add(grahamCrackerCrumbs);

        grahamCrackerCrumbsQ.setCount(170.0);
        grahamCrackerCrumbsQ.setMeasure("g");
        grahamCrackerCrumbsQ.setIngredient(grahamCrackerCrumbs);
        quantities.add(grahamCrackerCrumbsQ);

        Ingredient sugarForCheesecake = new Ingredient();
        Quantity sugarForCheesecakeQ = new Quantity();

        sugarForCheesecake.setName("brown/white sugar");
        sugarForCheesecake.setDescription("brown/white sugar");
        sugarForCheesecake.setRecipe(cheesecakeRecipe);
        sugarForCheesecake.setQuantity(sugarForCheesecakeQ);
        ingredients.add(sugarForCheesecake);

        sugarForCheesecakeQ.setCount(3.0);
        sugarForCheesecakeQ.setMeasure("tbsp");
        sugarForCheesecakeQ.setIngredient(sugarForCheesecake);
        quantities.add(sugarForCheesecakeQ);

        Ingredient butterForCheesecake = new Ingredient();
        Quantity butterForCheesecakeQ = new Quantity();

        butterForCheesecake.setName("butter - melted");
        butterForCheesecake.setDescription("butter - melted");
        butterForCheesecake.setRecipe(cheesecakeRecipe);
        butterForCheesecake.setQuantity(butterForCheesecakeQ);
        ingredients.add(butterForCheesecake);

        butterForCheesecakeQ.setCount(1.0);
        butterForCheesecakeQ.setMeasure("tbsp");
        butterForCheesecakeQ.setIngredient(butterForCheesecake);
        quantities.add(butterForCheesecakeQ);

        Ingredient creamcheeseForCheesecake = new Ingredient();
        Quantity creamcheeseForCheesecakeQ = new Quantity();

        creamcheeseForCheesecake.setName("cream cheese - softened to room temperature");
        creamcheeseForCheesecake.setDescription("cream cheese - softened to room temperature");
        creamcheeseForCheesecake.setRecipe(cheesecakeRecipe);
        creamcheeseForCheesecake.setQuantity(creamcheeseForCheesecakeQ);
        ingredients.add(creamcheeseForCheesecake);

        creamcheeseForCheesecakeQ.setCount(910.0);
        creamcheeseForCheesecakeQ.setMeasure("g");
        creamcheeseForCheesecakeQ.setIngredient(creamcheeseForCheesecake);
        quantities.add(creamcheeseForCheesecakeQ);

        Ingredient sourcreamForCheesecake = new Ingredient();
        Quantity sourcreamForCheesecakeQ = new Quantity();

        sourcreamForCheesecake.setName("sour cream");
        sourcreamForCheesecake.setDescription("sour cream");
        sourcreamForCheesecake.setRecipe(cheesecakeRecipe);
        sourcreamForCheesecake.setQuantity(sourcreamForCheesecakeQ);
        ingredients.add(sourcreamForCheesecake);

        sourcreamForCheesecakeQ.setCount(160.0);
        sourcreamForCheesecakeQ.setMeasure("g");
        sourcreamForCheesecakeQ.setIngredient(sourcreamForCheesecake);
        quantities.add(sourcreamForCheesecakeQ);

        Ingredient vanillaextractForCheesecake = new Ingredient();
        Quantity vanillaextractForCheesecakeQ = new Quantity();

        vanillaextractForCheesecake.setName("vanilla extract");
        vanillaextractForCheesecake.setDescription("vanilla extract");
        vanillaextractForCheesecake.setRecipe(cheesecakeRecipe);
        vanillaextractForCheesecake.setQuantity(vanillaextractForCheesecakeQ);
        ingredients.add(vanillaextractForCheesecake);

        vanillaextractForCheesecakeQ.setCount(1.5);
        vanillaextractForCheesecakeQ.setMeasure("tsp");
        vanillaextractForCheesecakeQ.setIngredient(vanillaextractForCheesecake);
        quantities.add(vanillaextractForCheesecakeQ);

        Ingredient saltForCheesecake = new Ingredient();
        Quantity saltForCheesecakeQ = new Quantity();

        saltForCheesecake.setName("salt");
        saltForCheesecake.setDescription("salt");
        saltForCheesecake.setRecipe(cheesecakeRecipe);
        saltForCheesecake.setQuantity(saltForCheesecakeQ);
        ingredients.add(saltForCheesecake);

        saltForCheesecakeQ.setCount(0.25);
        saltForCheesecakeQ.setMeasure("tsp");
        saltForCheesecakeQ.setIngredient(saltForCheesecake);
        quantities.add(saltForCheesecakeQ);

        Ingredient eggForCheesecake = new Ingredient();
        Quantity eggForCheesecakeQ = new Quantity();

        eggForCheesecake.setName("large eggs - lightly beaten");
        eggForCheesecake.setDescription("large eggs - lightly beaten");
        eggForCheesecake.setRecipe(cheesecakeRecipe);
        eggForCheesecake.setQuantity(eggForCheesecakeQ);
        ingredients.add(eggForCheesecake);

        eggForCheesecakeQ.setCount(2.0);
        eggForCheesecakeQ.setMeasure("no");
        eggForCheesecakeQ.setIngredient(eggForCheesecake);
        quantities.add(eggForCheesecakeQ);

        //Carrot cake
        Recipe carrotcakeRecipe = new Recipe();
        carrotcakeRecipe.setName("carrot cake");
        carrotcakeRecipe.setDescription("A healthier version of regular cake");
        carrotcakeRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfSnzAf0Khl3Bw0KmVUcnO1J4cBbxmvLuG_Q&usqp=CAU");
        carrotcakeRecipe.setTutorialPath("https://www.youtube.com/watch?v=zm0Ea9ZscpU");
        recipes.add(carrotcakeRecipe);

        Ingredient eggsForCarrotCake = new Ingredient();
        Quantity eggsForCarrotCakeQ = new Quantity();

        eggsForCarrotCake.setName("large eggs");
        eggsForCarrotCake.setDescription("large eggs");
        eggsForCarrotCake.setRecipe(carrotcakeRecipe);
        eggsForCarrotCake.setQuantity(eggsForCarrotCakeQ);
        ingredients.add(eggsForCarrotCake);

        eggsForCarrotCakeQ.setCount(4.0);
        eggsForCarrotCakeQ.setMeasure("no");
        eggsForCarrotCakeQ.setIngredient(eggsForCarrotCake);
        quantities.add(eggsForCarrotCakeQ);

        Ingredient vegOilForCarrotCake = new Ingredient();
        Quantity vegOilForCarrotCakeQ = new Quantity();

        vegOilForCarrotCake.setName("vegetable oil");
        vegOilForCarrotCake.setDescription("vegetable oil");
        vegOilForCarrotCake.setRecipe(carrotcakeRecipe);
        vegOilForCarrotCake.setQuantity(vegOilForCarrotCakeQ);
        ingredients.add(vegOilForCarrotCake);

        vegOilForCarrotCakeQ.setCount(1.25);
        vegOilForCarrotCakeQ.setMeasure("cup");
        vegOilForCarrotCakeQ.setIngredient(vegOilForCarrotCake);
        quantities.add(vegOilForCarrotCakeQ);

        Ingredient whiteSugarForCarrotCake = new Ingredient();
        Quantity whiteSugarForCarrotCakeQ = new Quantity();

        whiteSugarForCarrotCake.setName("white sugar");
        whiteSugarForCarrotCake.setDescription("white sugar");
        whiteSugarForCarrotCake.setRecipe(carrotcakeRecipe);
        whiteSugarForCarrotCake.setQuantity(whiteSugarForCarrotCakeQ);
        ingredients.add(whiteSugarForCarrotCake);

        whiteSugarForCarrotCakeQ.setCount(2.0);
        whiteSugarForCarrotCakeQ.setMeasure("cup");
        whiteSugarForCarrotCakeQ.setIngredient(whiteSugarForCarrotCake);
        quantities.add(whiteSugarForCarrotCakeQ);

        Ingredient confectionersSugarForCarrotCake = new Ingredient();
        Quantity confectionersSugarForCarrotCakeQ = new Quantity();

        confectionersSugarForCarrotCake.setName("confectioners' sugar");
        confectionersSugarForCarrotCake.setDescription("confectioners' sugar");
        confectionersSugarForCarrotCake.setRecipe(carrotcakeRecipe);
        confectionersSugarForCarrotCake.setQuantity(confectionersSugarForCarrotCakeQ);
        ingredients.add(confectionersSugarForCarrotCake);

        confectionersSugarForCarrotCakeQ.setCount(4.0);
        confectionersSugarForCarrotCakeQ.setMeasure("cup");
        confectionersSugarForCarrotCakeQ.setIngredient(confectionersSugarForCarrotCake);
        quantities.add(confectionersSugarForCarrotCakeQ);

        Ingredient vanillaextractForCarrotCake = new Ingredient();
        Quantity vanillaextractForCarrotCakeQ = new Quantity();

        vanillaextractForCarrotCake.setName("vanilla extract");
        vanillaextractForCarrotCake.setDescription("vanilla extract");
        vanillaextractForCarrotCake.setRecipe(carrotcakeRecipe);
        vanillaextractForCarrotCake.setQuantity(vanillaextractForCarrotCakeQ);
        ingredients.add(vanillaextractForCarrotCake);

        vanillaextractForCarrotCakeQ.setCount(2.0);
        vanillaextractForCarrotCakeQ.setMeasure("tsp");
        vanillaextractForCarrotCakeQ.setIngredient(vanillaextractForCarrotCake);
        quantities.add(vanillaextractForCarrotCakeQ);

        Ingredient allPurposeFlourForCarrotCake = new Ingredient();
        Quantity allPurposeFlourForCarrotCakeQ = new Quantity();

        allPurposeFlourForCarrotCake.setName("all-purpose flour");
        allPurposeFlourForCarrotCake.setDescription("all-purpose flour");
        allPurposeFlourForCarrotCake.setRecipe(carrotcakeRecipe);
        allPurposeFlourForCarrotCake.setQuantity(allPurposeFlourForCarrotCakeQ);
        ingredients.add(allPurposeFlourForCarrotCake);

        allPurposeFlourForCarrotCakeQ.setCount(2.0);
        allPurposeFlourForCarrotCakeQ.setMeasure("cup");
        allPurposeFlourForCarrotCakeQ.setIngredient(allPurposeFlourForCarrotCake);
        quantities.add(allPurposeFlourForCarrotCakeQ);

        Ingredient bakingSodaForCarrotCake = new Ingredient();
        Quantity bakingSodaForCarrotCakeQ = new Quantity();

        bakingSodaForCarrotCake.setName("all-purpose flour");
        bakingSodaForCarrotCake.setDescription("all-purpose flour");
        bakingSodaForCarrotCake.setRecipe(carrotcakeRecipe);
        bakingSodaForCarrotCake.setQuantity(bakingSodaForCarrotCakeQ);
        ingredients.add(bakingSodaForCarrotCake);

        bakingSodaForCarrotCakeQ.setCount(2.0);
        bakingSodaForCarrotCakeQ.setMeasure("cup");
        bakingSodaForCarrotCakeQ.setIngredient(bakingSodaForCarrotCake);
        quantities.add(bakingSodaForCarrotCakeQ);

        Ingredient saltForCarrotCake = new Ingredient();
        Quantity saltForCarrotCakeQ = new Quantity();

        saltForCarrotCake.setName("salt");
        saltForCarrotCake.setDescription("salt");
        saltForCarrotCake.setRecipe(carrotcakeRecipe);
        saltForCarrotCake.setQuantity(saltForCarrotCakeQ);
        ingredients.add(saltForCarrotCake);

        saltForCarrotCakeQ.setCount(0.5);
        saltForCarrotCakeQ.setMeasure("tsp");
        saltForCarrotCakeQ.setIngredient(saltForCarrotCake);
        quantities.add(saltForCarrotCakeQ);

        Ingredient cinnamonForCarrotCake = new Ingredient();
        Quantity cinnamonForCarrotCakeQ = new Quantity();

        cinnamonForCarrotCake.setName("ground cinnamon");
        cinnamonForCarrotCake.setDescription("ground cinnamon");
        cinnamonForCarrotCake.setRecipe(carrotcakeRecipe);
        cinnamonForCarrotCake.setQuantity(cinnamonForCarrotCakeQ);
        ingredients.add(cinnamonForCarrotCake);

        cinnamonForCarrotCakeQ.setCount(2.0);
        cinnamonForCarrotCakeQ.setMeasure("tsp");
        cinnamonForCarrotCakeQ.setIngredient(cinnamonForCarrotCake);
        quantities.add(cinnamonForCarrotCakeQ);

        Ingredient carrotsForCarrotCake = new Ingredient();
        Quantity carrotsForCarrotCakeQ = new Quantity();

        carrotsForCarrotCake.setName("grated carrots");
        carrotsForCarrotCake.setDescription("grated carrots");
        carrotsForCarrotCake.setRecipe(carrotcakeRecipe);
        carrotsForCarrotCake.setQuantity(carrotsForCarrotCakeQ);
        ingredients.add(carrotsForCarrotCake);

        carrotsForCarrotCakeQ.setCount(3.0);
        carrotsForCarrotCakeQ.setMeasure("cup");
        carrotsForCarrotCakeQ.setIngredient(carrotsForCarrotCake);
        quantities.add(carrotsForCarrotCakeQ);

        Ingredient butterForCarrotCake = new Ingredient();
        Quantity butterForCarrotCakeQ = new Quantity();

        butterForCarrotCake.setName("butter, softened");
        butterForCarrotCake.setDescription("butter, softened");
        butterForCarrotCake.setRecipe(carrotcakeRecipe);
        butterForCarrotCake.setQuantity(butterForCarrotCakeQ);
        ingredients.add(butterForCarrotCake);

        butterForCarrotCakeQ.setCount(0.5);
        butterForCarrotCakeQ.setMeasure("cup");
        butterForCarrotCakeQ.setIngredient(butterForCarrotCake);
        quantities.add(butterForCarrotCakeQ);

        Ingredient creamcheeseForCarrotCake = new Ingredient();
        Quantity creamcheeseForCarrotCakeQ = new Quantity();

        creamcheeseForCarrotCake.setName("cream cheese, softened");
        creamcheeseForCarrotCake.setDescription("cream cheese, softened");
        creamcheeseForCarrotCake.setRecipe(carrotcakeRecipe);
        creamcheeseForCarrotCake.setQuantity(creamcheeseForCarrotCakeQ);
        ingredients.add(creamcheeseForCarrotCake);

        creamcheeseForCarrotCakeQ.setCount(8.0);
        creamcheeseForCarrotCakeQ.setMeasure("oz");
        creamcheeseForCarrotCakeQ.setIngredient(creamcheeseForCarrotCake);
        quantities.add(creamcheeseForCarrotCakeQ);

        Ingredient pecansForCarrotCake = new Ingredient();
        Quantity pecansForCarrotCakeQ = new Quantity();

        pecansForCarrotCake.setName("chopped pecans");
        pecansForCarrotCake.setDescription("chopped pecans");
        pecansForCarrotCake.setRecipe(carrotcakeRecipe);
        pecansForCarrotCake.setQuantity(pecansForCarrotCakeQ);
        ingredients.add(pecansForCarrotCake);

        pecansForCarrotCakeQ.setCount(1.0);
        pecansForCarrotCakeQ.setMeasure("cup");
        pecansForCarrotCakeQ.setIngredient(pecansForCarrotCake);
        quantities.add(pecansForCarrotCakeQ);

        //Cheese balls
        Recipe cheeseballsRecipe = new Recipe();
        cheeseballsRecipe.setName("cheese balls");
        cheeseballsRecipe.setDescription("A crunch in every bite");
        cheeseballsRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYi-5DZyxKsrAJvHO8sMBkhW5IZ2X1FvL4Tg&usqp=CAU");
        cheeseballsRecipe.setTutorialPath("https://www.youtube.com/watch?v=eJZ57qZ4AGQ");
        recipes.add(cheeseballsRecipe);

        Ingredient cheeseForCheeseBalls = new Ingredient();
        Quantity cheeseForCheeseBallsQ = new Quantity();

        cheeseForCheeseBalls.setName("grated cheese");
        cheeseForCheeseBalls.setDescription("grated cheese");
        cheeseForCheeseBalls.setRecipe(cheeseballsRecipe);
        cheeseForCheeseBalls.setQuantity(cheeseForCheeseBallsQ);
        ingredients.add(cheeseForCheeseBalls);

        cheeseForCheeseBallsQ.setCount(1.0);
        cheeseForCheeseBallsQ.setMeasure("cup");
        cheeseForCheeseBallsQ.setIngredient(cheeseForCheeseBalls);
        quantities.add(cheeseForCheeseBallsQ);

        Ingredient eggForCheeseBalls = new Ingredient();
        Quantity eggForCheeseBallsQ = new Quantity();

        eggForCheeseBalls.setName("egg");
        eggForCheeseBalls.setDescription("egg");
        eggForCheeseBalls.setRecipe(cheeseballsRecipe);
        eggForCheeseBalls.setQuantity(eggForCheeseBallsQ);
        ingredients.add(eggForCheeseBalls);

        eggForCheeseBallsQ.setCount(2.0);
        eggForCheeseBallsQ.setMeasure("no");
        eggForCheeseBallsQ.setIngredient(eggForCheeseBalls);
        quantities.add(eggForCheeseBallsQ);

        Ingredient maidaForCheeseBalls = new Ingredient();
        Quantity maidaForCheeseBallsQ = new Quantity();

        maidaForCheeseBalls.setName("maida / all-purpose flour");
        maidaForCheeseBalls.setDescription("maida / all-purpose flour");
        maidaForCheeseBalls.setRecipe(cheeseballsRecipe);
        maidaForCheeseBalls.setQuantity(maidaForCheeseBallsQ);
        ingredients.add(maidaForCheeseBalls);

        maidaForCheeseBallsQ.setCount(0.25);
        maidaForCheeseBallsQ.setMeasure("cup");
        maidaForCheeseBallsQ.setIngredient(maidaForCheeseBalls);
        quantities.add(maidaForCheeseBallsQ);

        Ingredient saltForCheeseBalls = new Ingredient();
        Quantity saltForCheeseBallsQ = new Quantity();

        saltForCheeseBalls.setName("salt");
        saltForCheeseBalls.setDescription("salt");
        saltForCheeseBalls.setRecipe(cheeseballsRecipe);
        saltForCheeseBalls.setQuantity(saltForCheeseBallsQ);
        ingredients.add(saltForCheeseBalls);

        saltForCheeseBallsQ.setCount(1.0);
        saltForCheeseBallsQ.setMeasure("tsp");
        saltForCheeseBallsQ.setIngredient(saltForCheeseBalls);
        quantities.add(saltForCheeseBallsQ);

        Ingredient bakingpowderForCheeseBalls = new Ingredient();
        Quantity bakingpowderForCheeseBallsQ = new Quantity();

        bakingpowderForCheeseBalls.setName("baking powder");
        bakingpowderForCheeseBalls.setDescription("baking powder");
        bakingpowderForCheeseBalls.setRecipe(cheeseballsRecipe);
        bakingpowderForCheeseBalls.setQuantity(bakingpowderForCheeseBallsQ);
        ingredients.add(bakingpowderForCheeseBalls);

        bakingpowderForCheeseBallsQ.setCount(0.5);
        bakingpowderForCheeseBallsQ.setMeasure("tsp");
        bakingpowderForCheeseBallsQ.setIngredient(bakingpowderForCheeseBalls);
        quantities.add(bakingpowderForCheeseBallsQ);

        Ingredient oilForCheeseBalls = new Ingredient();
        Quantity oilForCheeseBallsQ = new Quantity();

        oilForCheeseBalls.setName("oil");
        oilForCheeseBalls.setDescription("oil");
        oilForCheeseBalls.setRecipe(cheeseballsRecipe);
        oilForCheeseBalls.setQuantity(oilForCheeseBallsQ);
        ingredients.add(oilForCheeseBalls);

        oilForCheeseBallsQ.setCount(5.0);
        oilForCheeseBallsQ.setMeasure("tbsp");
        oilForCheeseBallsQ.setIngredient(oilForCheeseBalls);
        quantities.add(oilForCheeseBallsQ);

        //Garlic bread
        Recipe garlicBreadRecipe = new Recipe();
        garlicBreadRecipe.setName("garlic bread");
        garlicBreadRecipe.setDescription("Because your pizza needs a friend");
        garlicBreadRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcQ57LqBqRz6Ck_HSaWJiz4bUPPSnXEI6bNA&usqp=CAU");
        garlicBreadRecipe.setTutorialPath("https://www.youtube.com/watch?v=In6FrKPWedk");
        recipes.add(garlicBreadRecipe);

        Ingredient butterForGarlicBread = new Ingredient();
        Quantity butterForGarlicBreadQ = new Quantity();

        butterForGarlicBread.setName("butter");
        butterForGarlicBread.setDescription("butter");
        butterForGarlicBread.setRecipe(garlicBreadRecipe);
        butterForGarlicBread.setQuantity(butterForGarlicBreadQ);
        ingredients.add(butterForGarlicBread);

        butterForGarlicBreadQ.setCount(0.5);
        butterForGarlicBreadQ.setMeasure("cup");
        butterForGarlicBreadQ.setIngredient(butterForGarlicBread);
        quantities.add(butterForGarlicBreadQ);

        Ingredient garlicpowderForGarlicBread = new Ingredient();
        Quantity garlicpowderForGarlicBreadQ = new Quantity();

        garlicpowderForGarlicBread.setName("garlic powder");
        garlicpowderForGarlicBread.setDescription("garlic powder");
        garlicpowderForGarlicBread.setRecipe(garlicBreadRecipe);
        garlicpowderForGarlicBread.setQuantity(garlicpowderForGarlicBreadQ);
        ingredients.add(garlicpowderForGarlicBread);

        garlicpowderForGarlicBreadQ.setCount(1.5);
        garlicpowderForGarlicBreadQ.setMeasure("tbsp");
        garlicpowderForGarlicBreadQ.setIngredient(garlicpowderForGarlicBread);
        quantities.add(garlicpowderForGarlicBreadQ);

        Ingredient driedparsleyForGarlicBread = new Ingredient();
        Quantity driedparsleyForGarlicBreadQ = new Quantity();

        driedparsleyForGarlicBread.setName("dried parsley");
        driedparsleyForGarlicBread.setDescription("dried parsley");
        driedparsleyForGarlicBread.setRecipe(garlicBreadRecipe);
        driedparsleyForGarlicBread.setQuantity(driedparsleyForGarlicBreadQ);
        ingredients.add(driedparsleyForGarlicBread);

        driedparsleyForGarlicBreadQ.setCount(1.0);
        driedparsleyForGarlicBreadQ.setMeasure("tbsp");
        driedparsleyForGarlicBreadQ.setIngredient(driedparsleyForGarlicBread);
        quantities.add(driedparsleyForGarlicBreadQ);

        Ingredient breadForGarlicBread = new Ingredient();
        Quantity breadForGarlicBreadQ = new Quantity();

        breadForGarlicBread.setName("italian bread loaf - sliced");
        breadForGarlicBread.setDescription("italian bread loaf - sliced");
        breadForGarlicBread.setRecipe(garlicBreadRecipe);
        breadForGarlicBread.setQuantity(breadForGarlicBreadQ);
        ingredients.add(breadForGarlicBread);

        breadForGarlicBreadQ.setCount(1.0);
        breadForGarlicBreadQ.setMeasure("lb");
        breadForGarlicBreadQ.setIngredient(breadForGarlicBread);
        quantities.add(breadForGarlicBreadQ);

        Ingredient mozzarellaForGarlicBread = new Ingredient();
        Quantity mozzarellaForGarlicBreadQ = new Quantity();

        mozzarellaForGarlicBread.setName("shredded mozzarella cheese");
        mozzarellaForGarlicBread.setDescription("shredded mozzarella cheese");
        mozzarellaForGarlicBread.setRecipe(garlicBreadRecipe);
        mozzarellaForGarlicBread.setQuantity(mozzarellaForGarlicBreadQ);
        ingredients.add(mozzarellaForGarlicBread);

        mozzarellaForGarlicBreadQ.setCount(8.0);
        mozzarellaForGarlicBreadQ.setMeasure("oz");
        mozzarellaForGarlicBreadQ.setIngredient(mozzarellaForGarlicBread);
        quantities.add(mozzarellaForGarlicBreadQ);

        //Peach pie
        Recipe peachpieRecipe = new Recipe();
        peachpieRecipe.setName("peach pie");
        peachpieRecipe.setDescription("Dessert? Count me in.");
        peachpieRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSukmPEBXh98bK4Ca5u6J3PpLmEkUyA-akBLg&usqp=CAU");
        peachpieRecipe.setTutorialPath("https://www.youtube.com/watch?v=E5OsLOFncdk");
        recipes.add(peachpieRecipe);

        Ingredient sugarForPeachPie = new Ingredient();
        Quantity sugarForPeachPieQ = new Quantity();

        sugarForPeachPie.setName("sugar");
        sugarForPeachPie.setDescription("sugar");
        sugarForPeachPie.setRecipe(peachpieRecipe);
        sugarForPeachPie.setQuantity(sugarForPeachPieQ);
        ingredients.add(sugarForPeachPie);

        sugarForPeachPieQ.setCount(0.75);
        sugarForPeachPieQ.setMeasure("cup");
        sugarForPeachPieQ.setIngredient(sugarForPeachPie);
        quantities.add(sugarForPeachPieQ);

        Ingredient allpurposeflourForPeachPie = new Ingredient();
        Quantity allpurposeflourForPeachPieQ = new Quantity();

        allpurposeflourForPeachPie.setName("all-purpose flour");
        allpurposeflourForPeachPie.setDescription("all-purpose flour");
        allpurposeflourForPeachPie.setRecipe(peachpieRecipe);
        allpurposeflourForPeachPie.setQuantity(allpurposeflourForPeachPieQ);
        ingredients.add(allpurposeflourForPeachPie);

        allpurposeflourForPeachPieQ.setCount(0.5);
        allpurposeflourForPeachPieQ.setMeasure("cup");
        allpurposeflourForPeachPieQ.setIngredient(allpurposeflourForPeachPie);
        quantities.add(allpurposeflourForPeachPieQ);

        Ingredient cinnamonForPeachPie = new Ingredient();
        Quantity cinnamonForPeachPieQ = new Quantity();

        cinnamonForPeachPie.setName("ground cinnamon");
        cinnamonForPeachPie.setDescription("ground cinnamon");
        cinnamonForPeachPie.setRecipe(peachpieRecipe);
        cinnamonForPeachPie.setQuantity(cinnamonForPeachPieQ);
        ingredients.add(cinnamonForPeachPie);

        cinnamonForPeachPieQ.setCount(0.25);
        cinnamonForPeachPieQ.setMeasure("cup");
        cinnamonForPeachPieQ.setIngredient(cinnamonForPeachPie);
        quantities.add(cinnamonForPeachPieQ);

        Ingredient freshpeachesForPeachPie = new Ingredient();
        Quantity freshpeachesForPeachPieQ = new Quantity();

        freshpeachesForPeachPie.setName("fresh peaches - sliced & peeled");
        freshpeachesForPeachPie.setDescription("fresh peaches - sliced & peeled");
        freshpeachesForPeachPie.setRecipe(peachpieRecipe);
        freshpeachesForPeachPie.setQuantity(freshpeachesForPeachPieQ);
        ingredients.add(freshpeachesForPeachPie);

        freshpeachesForPeachPieQ.setCount(5.0);
        freshpeachesForPeachPieQ.setMeasure("cup");
        freshpeachesForPeachPieQ.setIngredient(freshpeachesForPeachPie);
        quantities.add(freshpeachesForPeachPieQ);

        Ingredient lemonjuiceForPeachPie = new Ingredient();
        Quantity lemonjuiceForPeachPieQ = new Quantity();

        lemonjuiceForPeachPie.setName("lemon juice");
        lemonjuiceForPeachPie.setDescription("lemon juice");
        lemonjuiceForPeachPie.setRecipe(peachpieRecipe);
        lemonjuiceForPeachPie.setQuantity(lemonjuiceForPeachPieQ);
        ingredients.add(lemonjuiceForPeachPie);

        lemonjuiceForPeachPieQ.setCount(1.0);
        lemonjuiceForPeachPieQ.setMeasure("tsp");
        lemonjuiceForPeachPieQ.setIngredient(lemonjuiceForPeachPie);
        quantities.add(lemonjuiceForPeachPieQ);

        Ingredient piecrustsForPeachPie = new Ingredient();
        Quantity piecrustsForPeachPieQ = new Quantity();

        piecrustsForPeachPie.setName("frozen deep dish pie crusts");
        piecrustsForPeachPie.setDescription("frozen deep dish pie crusts");
        piecrustsForPeachPie.setRecipe(peachpieRecipe);
        piecrustsForPeachPie.setQuantity(piecrustsForPeachPieQ);
        ingredients.add(piecrustsForPeachPie);

        piecrustsForPeachPieQ.setCount(12.0);
        piecrustsForPeachPieQ.setMeasure("oz");
        piecrustsForPeachPieQ.setIngredient(piecrustsForPeachPie);
        quantities.add(piecrustsForPeachPieQ);

        //Peach pie
        Recipe lemonpuddingRecipe = new Recipe();
        lemonpuddingRecipe.setName("lemon pudding");
        lemonpuddingRecipe.setDescription("Full on taste!");
        lemonpuddingRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDo_T3uUv8k9OOpyqQ_Li-hGFPdlK9kftgqg&usqp=CAU");
        lemonpuddingRecipe.setTutorialPath("https://www.youtube.com/watch?v=FwksiY5ML1k");
        recipes.add(lemonpuddingRecipe);

        Ingredient milkForLemonPudding = new Ingredient();
        Quantity milkForLemonPuddingQ = new Quantity();

        milkForLemonPudding.setName("sugar");
        milkForLemonPudding.setDescription("sugar");
        milkForLemonPudding.setRecipe(lemonpuddingRecipe);
        milkForLemonPudding.setQuantity(milkForLemonPuddingQ);
        ingredients.add(milkForLemonPudding);

        milkForLemonPuddingQ.setCount(1.0);
        milkForLemonPuddingQ.setMeasure("l");
        milkForLemonPuddingQ.setIngredient(milkForLemonPudding);
        quantities.add(milkForLemonPuddingQ);

        Ingredient cornflourForLemonPudding = new Ingredient();
        Quantity cornflourForLemonPuddingQ = new Quantity();

        cornflourForLemonPudding.setName("corn flour");
        cornflourForLemonPudding.setDescription("corn flour");
        cornflourForLemonPudding.setRecipe(lemonpuddingRecipe);
        cornflourForLemonPudding.setQuantity(cornflourForLemonPuddingQ);
        ingredients.add(cornflourForLemonPudding);

        cornflourForLemonPuddingQ.setCount(4.0);
        cornflourForLemonPuddingQ.setMeasure("tbsp");
        cornflourForLemonPuddingQ.setIngredient(cornflourForLemonPudding);
        quantities.add(cornflourForLemonPuddingQ);

        Ingredient sugarForLemonPudding = new Ingredient();
        Quantity sugarForLemonPuddingQ = new Quantity();

        sugarForLemonPudding.setName("sugar");
        sugarForLemonPudding.setDescription("sugar");
        sugarForLemonPudding.setRecipe(lemonpuddingRecipe);
        sugarForLemonPudding.setQuantity(sugarForLemonPuddingQ);
        ingredients.add(sugarForLemonPudding);

        sugarForLemonPuddingQ.setCount(4.0);
        sugarForLemonPuddingQ.setMeasure("tbsp");
        sugarForLemonPuddingQ.setIngredient(sugarForLemonPudding);
        quantities.add(sugarForLemonPuddingQ);

        Ingredient lemonjuiceForLemonPudding = new Ingredient();
        Quantity lemonjuiceForLemonPuddingQ = new Quantity();

        lemonjuiceForLemonPudding.setName("lemon juice");
        lemonjuiceForLemonPudding.setDescription("lemon juice");
        lemonjuiceForLemonPudding.setRecipe(lemonpuddingRecipe);
        lemonjuiceForLemonPudding.setQuantity(lemonjuiceForLemonPuddingQ);
        ingredients.add(lemonjuiceForLemonPudding);

        lemonjuiceForLemonPuddingQ.setCount(4.0);
        lemonjuiceForLemonPuddingQ.setMeasure("tbsp");
        lemonjuiceForLemonPuddingQ.setIngredient(lemonjuiceForLemonPudding);
        quantities.add(lemonjuiceForLemonPuddingQ);

        Ingredient lemonzestForLemonPudding = new Ingredient();
        Quantity lemonzestForLemonPuddingQ = new Quantity();

        lemonzestForLemonPudding.setName("lemon zest");
        lemonzestForLemonPudding.setDescription("lemon zest");
        lemonzestForLemonPudding.setRecipe(lemonpuddingRecipe);
        lemonzestForLemonPudding.setQuantity(lemonzestForLemonPuddingQ);
        ingredients.add(lemonzestForLemonPudding);

        lemonzestForLemonPuddingQ.setCount(50.0);
        lemonzestForLemonPuddingQ.setMeasure("g");
        lemonzestForLemonPuddingQ.setIngredient(lemonzestForLemonPudding);
        quantities.add(lemonzestForLemonPuddingQ);

        Ingredient yogurtForLemonPudding = new Ingredient();
        Quantity yogurtForLemonPuddingQ = new Quantity();

        yogurtForLemonPudding.setName("yogurt");
        yogurtForLemonPudding.setDescription("yogurt");
        yogurtForLemonPudding.setRecipe(lemonpuddingRecipe);
        yogurtForLemonPudding.setQuantity(yogurtForLemonPuddingQ);
        ingredients.add(yogurtForLemonPudding);

        yogurtForLemonPuddingQ.setCount(1.0);
        yogurtForLemonPuddingQ.setMeasure("cup");
        yogurtForLemonPuddingQ.setIngredient(yogurtForLemonPudding);
        quantities.add(yogurtForLemonPuddingQ);

        //Honey garlic salmon
        Recipe honeygarlicsalmonRecipe = new Recipe();
        honeygarlicsalmonRecipe.setName("honey garlic salmon");
        honeygarlicsalmonRecipe.setDescription("Fish for protein - Fish for progress");
        honeygarlicsalmonRecipe.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBgE8MYsTtYEHljprKxDp_aPSjOaQdFQ5mdA&usqp=CAU");
        honeygarlicsalmonRecipe.setTutorialPath("https://www.youtube.com/watch?v=P4xuyEq37nE");
        recipes.add(honeygarlicsalmonRecipe);

        Ingredient salmonForHoneyGarlicSalmon = new Ingredient();
        Quantity salmonForHoneyGarlicSalmonQ = new Quantity();

        salmonForHoneyGarlicSalmon.setName("salmon");
        salmonForHoneyGarlicSalmon.setDescription("salmon");
        salmonForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        salmonForHoneyGarlicSalmon.setQuantity(salmonForHoneyGarlicSalmonQ);
        ingredients.add(salmonForHoneyGarlicSalmon);

        salmonForHoneyGarlicSalmonQ.setCount(1.0);
        salmonForHoneyGarlicSalmonQ.setMeasure("lb");
        salmonForHoneyGarlicSalmonQ.setIngredient(salmonForHoneyGarlicSalmon);
        quantities.add(salmonForHoneyGarlicSalmonQ);

        Ingredient butterForHoneyGarlicSalmon = new Ingredient();
        Quantity butterForHoneyGarlicSalmonQ = new Quantity();

        butterForHoneyGarlicSalmon.setName("melted butter");
        butterForHoneyGarlicSalmon.setDescription("melted butter");
        butterForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        butterForHoneyGarlicSalmon.setQuantity(butterForHoneyGarlicSalmonQ);
        ingredients.add(butterForHoneyGarlicSalmon);

        butterForHoneyGarlicSalmonQ.setCount(2.0);
        butterForHoneyGarlicSalmonQ.setMeasure("tbsp");
        butterForHoneyGarlicSalmonQ.setIngredient(butterForHoneyGarlicSalmon);
        quantities.add(butterForHoneyGarlicSalmonQ);

        Ingredient oliveoilForHoneyGarlicSalmon = new Ingredient();
        Quantity oliveoilForHoneyGarlicSalmonQ = new Quantity();

        oliveoilForHoneyGarlicSalmon.setName("olive oil");
        oliveoilForHoneyGarlicSalmon.setDescription("olive oil");
        oliveoilForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        oliveoilForHoneyGarlicSalmon.setQuantity(oliveoilForHoneyGarlicSalmonQ);
        ingredients.add(oliveoilForHoneyGarlicSalmon);

        oliveoilForHoneyGarlicSalmonQ.setCount(2.0);
        oliveoilForHoneyGarlicSalmonQ.setMeasure("tbsp");
        oliveoilForHoneyGarlicSalmonQ.setIngredient(oliveoilForHoneyGarlicSalmon);
        quantities.add(oliveoilForHoneyGarlicSalmonQ);

        Ingredient soysauceForHoneyGarlicSalmon = new Ingredient();
        Quantity soysauceForHoneyGarlicSalmonQ = new Quantity();

        soysauceForHoneyGarlicSalmon.setName("soy sauce");
        soysauceForHoneyGarlicSalmon.setDescription("soy sauce");
        soysauceForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        soysauceForHoneyGarlicSalmon.setQuantity(soysauceForHoneyGarlicSalmonQ);
        ingredients.add(soysauceForHoneyGarlicSalmon);

        soysauceForHoneyGarlicSalmonQ.setCount(2.0);
        soysauceForHoneyGarlicSalmonQ.setMeasure("tbsp");
        soysauceForHoneyGarlicSalmonQ.setIngredient(soysauceForHoneyGarlicSalmon);
        quantities.add(soysauceForHoneyGarlicSalmonQ);

        Ingredient honeyForHoneyGarlicSalmon = new Ingredient();
        Quantity honeyForHoneyGarlicSalmonQ = new Quantity();

        honeyForHoneyGarlicSalmon.setName("honey");
        honeyForHoneyGarlicSalmon.setDescription("honey");
        honeyForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        honeyForHoneyGarlicSalmon.setQuantity(honeyForHoneyGarlicSalmonQ);
        ingredients.add(honeyForHoneyGarlicSalmon);

        honeyForHoneyGarlicSalmonQ.setCount(2.0);
        honeyForHoneyGarlicSalmonQ.setMeasure("tbsp");
        honeyForHoneyGarlicSalmonQ.setIngredient(honeyForHoneyGarlicSalmon);
        quantities.add(honeyForHoneyGarlicSalmonQ);

        Ingredient choppedgarlicForHoneyGarlicSalmon = new Ingredient();
        Quantity choppedgarlicForHoneyGarlicSalmonQ = new Quantity();

        choppedgarlicForHoneyGarlicSalmon.setName("chopped garlic");
        choppedgarlicForHoneyGarlicSalmon.setDescription("chopped garlic");
        choppedgarlicForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        choppedgarlicForHoneyGarlicSalmon.setQuantity(choppedgarlicForHoneyGarlicSalmonQ);
        ingredients.add(choppedgarlicForHoneyGarlicSalmon);

        choppedgarlicForHoneyGarlicSalmonQ.setCount(5.0);
        choppedgarlicForHoneyGarlicSalmonQ.setMeasure("tsp");
        choppedgarlicForHoneyGarlicSalmonQ.setIngredient(choppedgarlicForHoneyGarlicSalmon);
        quantities.add(choppedgarlicForHoneyGarlicSalmonQ);

        Ingredient brownsugarForHoneyGarlicSalmon = new Ingredient();
        Quantity brownsugarForHoneyGarlicSalmonQ = new Quantity();

        brownsugarForHoneyGarlicSalmon.setName("brown sugar");
        brownsugarForHoneyGarlicSalmon.setDescription("brown sugar");
        brownsugarForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        brownsugarForHoneyGarlicSalmon.setQuantity(brownsugarForHoneyGarlicSalmonQ);
        ingredients.add(brownsugarForHoneyGarlicSalmon);

        brownsugarForHoneyGarlicSalmonQ.setCount(2.0);
        brownsugarForHoneyGarlicSalmonQ.setMeasure("tbsp");
        brownsugarForHoneyGarlicSalmonQ.setIngredient(brownsugarForHoneyGarlicSalmon);
        quantities.add(brownsugarForHoneyGarlicSalmonQ);

        Ingredient dijonmustardForHoneyGarlicSalmon = new Ingredient();
        Quantity dijonmustardForHoneyGarlicSalmonQ = new Quantity();

        dijonmustardForHoneyGarlicSalmon.setName("dijon mustard");
        dijonmustardForHoneyGarlicSalmon.setDescription("dijon mustard");
        dijonmustardForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        dijonmustardForHoneyGarlicSalmon.setQuantity(dijonmustardForHoneyGarlicSalmonQ);
        ingredients.add(dijonmustardForHoneyGarlicSalmon);

        dijonmustardForHoneyGarlicSalmonQ.setCount(2.0);
        dijonmustardForHoneyGarlicSalmonQ.setMeasure("tbsp");
        dijonmustardForHoneyGarlicSalmonQ.setIngredient(dijonmustardForHoneyGarlicSalmon);
        quantities.add(dijonmustardForHoneyGarlicSalmonQ);

        Ingredient redPepperFlakesForHoneyGarlicSalmon = new Ingredient();
        Quantity redPepperFlakesForHoneyGarlicSalmonQ = new Quantity();

        redPepperFlakesForHoneyGarlicSalmon.setName("red pepper flakes");
        redPepperFlakesForHoneyGarlicSalmon.setDescription("red pepper flakes");
        redPepperFlakesForHoneyGarlicSalmon.setRecipe(honeygarlicsalmonRecipe);
        redPepperFlakesForHoneyGarlicSalmon.setQuantity(redPepperFlakesForHoneyGarlicSalmonQ);
        ingredients.add(redPepperFlakesForHoneyGarlicSalmon);

        redPepperFlakesForHoneyGarlicSalmonQ.setCount(0.25);
        redPepperFlakesForHoneyGarlicSalmonQ.setMeasure("tsp");
        redPepperFlakesForHoneyGarlicSalmonQ.setIngredient(redPepperFlakesForHoneyGarlicSalmon);
        quantities.add(redPepperFlakesForHoneyGarlicSalmonQ);

        quantityRepository.saveAll(quantities);
        ingredientRepository.saveAll(ingredients);
        recipeRepository.saveAll(recipes);
    }
}