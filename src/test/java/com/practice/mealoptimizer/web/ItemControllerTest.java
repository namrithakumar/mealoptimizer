package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.service.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class ItemControllerTest {

    @Mock
    private ItemService itemService;

    @InjectMocks
    private ItemController itemController;

    List<Item> itemsWithCategoryAll;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {

        itemsWithCategoryAll = new ArrayList<>(19);
        for(int i=0;i<19;i++) {
            itemsWithCategoryAll.add(new Item());
        }

        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
    }

    @Test
    void findItemsByCategoryTest() throws Exception {
        when(itemService.findByItemCategoriesContains(Category.ALL)).thenReturn(itemsWithCategoryAll);
        mockMvc.perform(get("/mealoptimizer/items/find?category=ALL"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        verify(itemService, times(1)).findByItemCategoriesContains(Category.ALL);
    }
}