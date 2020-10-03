package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


/*
 * Note: save(), findAll() methods in this repo will only be used when we create an admin screen for user to enter Item info.
 * Since data is loaded only from item-data.sql file, save(), findAll() will not be used for now.
 * To add a new Item, directly modify item-data.sql.
 * Update junit test data as well by modifying item-test-data.sql.
 */

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {

    public Item findByItemName(String itemName);

}
