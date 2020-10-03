package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Item;
import static org.mockito.Mockito.when;

import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.projection.ItemView;
import com.practice.mealoptimizer.repository.CategoryRepository;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;

import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryService categoryService;

    private List<ItemView> items;

    private List<CategoryView> categoryList = new ArrayList<>();

    String categoryName = "FATFREE";

    @BeforeEach
    void setUp() {
        //Setup for findAllProjectedByTest
        categoryList = new ArrayList<>();
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
        categoryList.add(GENERAL);
        categoryList.add(FAT_FREE);
        categoryList.add(VEGETARIAN);
        categoryList.add(DAIRY_FREE);
        categoryList.add(GLUTEN_FREE);
        categoryList.add(VEGAN);

        //Setup for findItemNamesByCategoryTestFATFREE
        items = new ArrayList<>();
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
        items.add(greenSaladView);
        items.add(riceCakeView);
        items.add(quinoaBarView);
    }

    @Test
    void getAllCategoriesTest() {
        when(categoryRepository.findAllProjectedBy()).thenReturn(categoryList);
        assertIterableEquals(categoryService.getAllCategories(), categoryList);
    }

    @Test
    void findItemNamesByCategoryTestFATFREE() {
        //Setup mock
        when(categoryRepository.findItemByCategoryName(categoryName)).thenReturn(items);

        //Setup result
        List<String> expectedItemNames = new ArrayList<>();
        expectedItemNames.add("Green Salad");
        expectedItemNames.add("Rice cake");
        expectedItemNames.add("Quinoa bar");

        assertIterableEquals(categoryService.findItemNamesByCategory(categoryName), expectedItemNames);
    }
}
