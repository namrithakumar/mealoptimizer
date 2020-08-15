package com.practice.mealoptimizer.test.data;

import com.practice.mealoptimizer.test.domain.Item;
import org.springframework.data.repository.CrudRepository;

/*
 * Note: This repo will only be used when we create an admin screen for user to enter Item info.
 * Since data is loaded only from item-data.sql file, this repo will not be used for now.
 * To add a new Item, directly modify item-data.sql.
 */

public interface ItemRepository extends CrudRepository<Item, Long> {
}
