package com.practice.mealoptimizer.test.data;

import com.practice.mealoptimizer.test.domain.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {
}
