package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;

/*
 * Note: This repo will only be used when we create an admin screen for user to enter Item info.
 * Since data is loaded only from item-data.sql file, this repo will not be used for now.
 * To add a new Item, directly modify item-data.sql.
 */

public interface ItemRepository extends CrudRepository<Item, Long> {
    public Item findByItemName(String itemName);
    public List<Item> findByItemCategoriesContains(Category category);
}
