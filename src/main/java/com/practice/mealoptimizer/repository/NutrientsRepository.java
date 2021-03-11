package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.nutrient.Nutrient;
import com.practice.mealoptimizer.domain.nutrient.NutrientMaxLimit;
import com.practice.mealoptimizer.domain.nutrient.NutrientMinLimit;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NutrientsRepository extends CrudRepository<Nutrient, Long> {

    //Query setup as per https://github.com/spring-projects/spring-data-jpa/issues/1349
    @Query("SELECT new com.practice.mealoptimizer.domain.nutrient.NutrientMinLimit(n.nutrientName, n.nutrientMinLimit) FROM Nutrient AS n")
    public List<NutrientMinLimit> getNutrientMinLimits();

    @Query("SELECT new com.practice.mealoptimizer.domain.nutrient.NutrientMaxLimit(n.nutrientName, n.nutrientMaxLimit) FROM Nutrient AS n")
    public List<NutrientMaxLimit> getNutrientMaxLimits();

}