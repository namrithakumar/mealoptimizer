package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.repository.ItemRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class ItemServiceTest {

    @Mock
    private ItemRepository itemRepository;

    @InjectMocks
    private ItemService itemService;

    List<Item> itemsWithCategoryAll;

    @BeforeEach
    void setUp() {

        itemsWithCategoryAll = new ArrayList<>(19);
        for(int i=0;i<19;i++) {
            itemsWithCategoryAll.add(new Item());
        }
    }

    @Test
    void findByItemCategoriesContainsTest() {
        when(itemRepository.findByItemCategoriesContains(any(Category.class))).thenReturn(itemsWithCategoryAll);
        assertEquals(19, itemService.findByItemCategoriesContains(Category.ALL).size());
        verify(itemRepository,times(1)).findByItemCategoriesContains(any(Category.class));
    }
}