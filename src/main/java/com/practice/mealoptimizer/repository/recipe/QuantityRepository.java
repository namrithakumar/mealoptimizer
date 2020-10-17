package com.practice.mealoptimizer.repository.recipe;

import com.practice.mealoptimizer.domain.recipe.Quantity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuantityRepository extends CrudRepository<Quantity, Integer> {
}