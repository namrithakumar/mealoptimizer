package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
import com.practice.mealoptimizer.service.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.*;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class ItemControllerTest {

    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private ItemController itemController;

    private List<String> itemNamesWithCategoryFATFREE;

    private MockMvc mockMvc;

    String categoryName = "FATFREE";

    @BeforeEach
    void setUp() {

        itemNamesWithCategoryFATFREE = new ArrayList<>();
        itemNamesWithCategoryFATFREE.add("Green Salad");
        itemNamesWithCategoryFATFREE.add("Rice cake");
        itemNamesWithCategoryFATFREE.add("Quinoa bar");

        mockMvc = MockMvcBuilders.standaloneSetup(itemController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();
    }

    @Test
    void findItemsByCategoryTest() {
        when(categoryService.findItemNamesByCategory(categoryName)).thenReturn(itemNamesWithCategoryFATFREE);
        try {
            mockMvc.perform(get("/mealoptimizer/items/find").queryParam("category", categoryName))
                   .andExpect(status().isOk())
                   .andExpect(content().contentType(MediaType.APPLICATION_JSON));
            }
        catch(Exception e) {
            fail(this.getClass().getName() + " failed with message: " + e.getMessage());
        }
    }
}