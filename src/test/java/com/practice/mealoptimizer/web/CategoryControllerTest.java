package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.config.MealOptimizerTestConfig;
import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.service.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@TestPropertySource(locations="classpath:application-junit.properties")
@Import(MealOptimizerTestConfig.class)
public class CategoryControllerTest {

    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private CategoryController categoryController;

    private List<CategoryView> allCategoriesExpected;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {

        allCategoriesExpected = new ArrayList<>();
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
        allCategoriesExpected.add(GENERAL);
        allCategoriesExpected.add(FAT_FREE);
        allCategoriesExpected.add(VEGETARIAN);
        allCategoriesExpected.add(DAIRY_FREE);
        allCategoriesExpected.add(GLUTEN_FREE);
        allCategoriesExpected.add(VEGAN);

        mockMvc = MockMvcBuilders.standaloneSetup(categoryController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();
    }

    @Test
    void fetchAllCategoriesTest() {
        when(categoryService.getAllCategories()).thenReturn(allCategoriesExpected);
        try {
            mockMvc.perform(get("/mealoptimizer/categories/fetchAll"))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        }
        catch(Exception e) {
            fail(this.getClass().getName() + " failed with message: " + e.getMessage());
        }
    }
}
