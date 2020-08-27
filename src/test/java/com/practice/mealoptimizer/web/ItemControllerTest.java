package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
import com.practice.mealoptimizer.service.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class ItemControllerTest {

    @Mock
    private ItemService itemService;

    @InjectMocks
    private ItemController itemController;

    private List<Item> itemsWithCategoryAll;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {

        itemsWithCategoryAll = new ArrayList<>(19);
        for(int i=0;i<19;i++) {
            itemsWithCategoryAll.add(new Item());
        }

        mockMvc = MockMvcBuilders.standaloneSetup(itemController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();
    }

    @Test
    void findItemsByCategoryALLTest() throws Exception {
        when(itemService.findByItemCategoriesContains(Category.ALL)).thenReturn(itemsWithCategoryAll);

        mockMvc.perform(get("/mealoptimizer/items/find?category=ALL"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        verify(itemService, times(1)).findByItemCategoriesContains(Category.ALL);
    }

    @Test
    void findItemsByCategoryVeganTest() throws Exception {
        when(itemService.findByItemCategoriesContains(Category.VEGAN)).thenReturn(new ArrayList<Item>());

        mockMvc.perform(get("/mealoptimizer/items/find?category=VEGAN"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json("[]"));

        verify(itemService, times(1)).findByItemCategoriesContains(Category.VEGAN);
    }

    @Test
    void findItemsByCategoryNoCategoryPassedInURL() throws Exception {
        mockMvc.perform(get("/mealoptimizer/items/find"))
                .andExpect(status().isBadRequest())
                .andExpect(header().string(HttpHeaders.CONTENT_TYPE, APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("Required parameter category is missing in the URL")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(itemService);
    }
}