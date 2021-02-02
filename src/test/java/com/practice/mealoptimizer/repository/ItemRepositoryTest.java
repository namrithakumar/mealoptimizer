package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.config.MealOptimizerTestConfig;
import com.practice.mealoptimizer.domain.Item;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@TestPropertySource(locations="classpath:test.properties")
@Import(MealOptimizerTestConfig.class)
public class ItemRepositoryTest {

    @Autowired
    private ItemRepository itemRepository;

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(itemRepository).isNotNull();
    }

    @Test
    void testFindByItemName() {
        double expectedItemCost = Double.valueOf(4.19);
        Item item = itemRepository.findByItemName("Strawberry Milkshake");
        assertEquals(expectedItemCost, item.getItemCost());
        assertEquals(2, item.getItemCategories().size());
    }
}