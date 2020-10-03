package com.practice.mealoptimizer.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@TestPropertySource(locations="classpath:test.properties")
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
        assertEquals(expectedItemCost, itemRepository.findByItemName("Strawberry Milkshake").getItemCost());
    }
}