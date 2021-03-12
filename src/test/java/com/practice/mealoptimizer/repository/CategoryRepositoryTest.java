package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.config.MealOptimizerTestConfig;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.projection.ItemView;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@TestPropertySource(locations="classpath:application-junit.properties")
@Import(MealOptimizerTestConfig.class)
public class CategoryRepositoryTest {

    private String categoryName = "FATFREE";

    private Map<String,ItemView> itemsExpected = null;

    private Map<String, CategoryView> categoriesExpected = null;

    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(categoryRepository).isNotNull();
    }

    @BeforeEach
    public void setup() {

        //Setup for findAllProjectedByTest
        categoriesExpected = new HashMap<>();
        CategoryView GENERAL = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "GENERAL";
            }

            @Override
            public String getDisplayValue() {
                return "ALL";
            }
        };
        CategoryView FAT_FREE = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "FATFREE";
            }

            @Override
            public String getDisplayValue() {
                return "FAT FREE";
            }
        };
        CategoryView VEGETARIAN = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "VEGETARIAN";
            }

            @Override
            public String getDisplayValue() {
                return "VEGETARIAN";
            }
        };
        CategoryView DAIRY_FREE = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "DAIRYFREE";
            }

            @Override
            public String getDisplayValue() {
                return "DAIRY FREE";
            }
        };
        CategoryView GLUTEN_FREE = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "GLUTENFREE";
            }

            @Override
            public String getDisplayValue() {
                return "GLUTEN FREE";
            }
        };
        CategoryView VEGAN = new CategoryView() {
            @Override
            public String getCategoryName() {
                return "VEGAN";
            }

            @Override
            public String getDisplayValue() {
                return "VEGAN";
            }
        };
        categoriesExpected.put(GENERAL.getCategoryName(), GENERAL);
        categoriesExpected.put(FAT_FREE.getCategoryName(), FAT_FREE);
        categoriesExpected.put(VEGETARIAN.getCategoryName(), VEGETARIAN);
        categoriesExpected.put(DAIRY_FREE.getCategoryName(), DAIRY_FREE);
        categoriesExpected.put(GLUTEN_FREE.getCategoryName(), GLUTEN_FREE);
        categoriesExpected.put(VEGAN.getCategoryName(), VEGAN);

        //Setup for findItemNamesByCategoryTestFATFREE
        itemsExpected = new HashMap<>();
        Item greenSalad = new Item();
        greenSalad.setItemName("Green Salad");
        ItemView greenSaladView = new ItemView() {
            @Override
            public Item getItem() {
                return greenSalad;
            }
        };

        Item riceCake = new Item();
        riceCake.setItemName("Rice cake");
        ItemView riceCakeView = new ItemView() {
            @Override
            public Item getItem() {
                return riceCake;
            }
        };
        Item quinoaBar = new Item();
        quinoaBar.setItemName("Quinoa bar");
        ItemView quinoaBarView = new ItemView() {
            @Override
            public Item getItem() {
                return quinoaBar;
            }
        };
        itemsExpected.put(greenSaladView.getItem().getItemName(), greenSaladView);
        itemsExpected.put(riceCakeView.getItem().getItemName(), riceCakeView);
        itemsExpected.put(quinoaBarView.getItem().getItemName(), quinoaBarView);
    }

    //categoryName = FATFREE
    @Test
    void findItemByCategoryNameTest() {
        List<ItemView> itemListFatFree = categoryRepository.findItemByCategoryName(categoryName);
        assertEquals(itemListFatFree.size(), itemsExpected.size());
        itemListFatFree.forEach((itemView) -> {
            assertEquals(itemView.getItem().getItemName(), itemsExpected.get(itemView.getItem().getItemName()).getItem().getItemName());
        });
    }

    @Test
    void findAllProjectedByTest() {
        List<CategoryView> categoriesActual = categoryRepository.findAllProjectedBy();
        assertEquals(categoriesActual.size(), categoriesExpected.size());
        categoriesActual.forEach((category) -> {
            assertEquals(category.getCategoryName(), categoriesExpected.get(category.getCategoryName()).getCategoryName());
            assertEquals(category.getDisplayValue(), categoriesExpected.get(category.getCategoryName()).getDisplayValue());
        });
    }
}