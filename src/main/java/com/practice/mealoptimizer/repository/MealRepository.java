package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.Meal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends CrudRepository<Meal, Long>  {
}
