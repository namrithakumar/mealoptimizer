package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.config.MealOptimizerTestConfig;
import com.practice.mealoptimizer.domain.nutrient.NutrientMaxLimit;
import com.practice.mealoptimizer.domain.nutrient.NutrientMinLimit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@TestPropertySource(locations="classpath:application-junit.properties")
@Import(MealOptimizerTestConfig.class)
public class NutrientsRepositoryTest {

    @Autowired
    private NutrientsRepository nutrientsRepository;

    @Test
    void injectedComponentsAreNotNull(){
        assertThat(nutrientsRepository).isNotNull();
    }

    private List<NutrientMinLimit> expectedNutrientMinLimits = new ArrayList<>();
    private List<NutrientMaxLimit> expectedNutrientMaxLimits = new ArrayList<NutrientMaxLimit>();

    @BeforeEach
    void setUp() {

        expectedNutrientMinLimits.add(new NutrientMinLimit("calories", 2000));
        expectedNutrientMinLimits.add(new NutrientMinLimit("fat", 5));
        expectedNutrientMinLimits.add(new NutrientMinLimit("sodium", 30));
        expectedNutrientMinLimits.add(new NutrientMinLimit("carbs", 105));
        expectedNutrientMinLimits.add(new NutrientMinLimit("protein", 20));
        expectedNutrientMinLimits.add(new NutrientMinLimit("calcium", 100));

        expectedNutrientMaxLimits.add(new NutrientMaxLimit("calories", 2400));
        expectedNutrientMaxLimits.add(new NutrientMaxLimit("fat", 80));
        expectedNutrientMaxLimits.add(new NutrientMaxLimit("sodium", 5000));
        expectedNutrientMaxLimits.add(new NutrientMaxLimit("carbs", 500));
        expectedNutrientMaxLimits.add(new NutrientMaxLimit("protein", 200));
        expectedNutrientMaxLimits.add(new NutrientMaxLimit("calcium", 5000));
    }

    @Test
    void testGetNutrientMinLimits() {
        List<NutrientMinLimit> actualNutrientMinLimits = nutrientsRepository.getNutrientMinLimits();
        assertThat(actualNutrientMinLimits).hasSize(expectedNutrientMinLimits.size());
    }

    @Test
    void testGetNutrientMaxLimits() {
        List<NutrientMaxLimit> actualNutrientMaxLimits = nutrientsRepository.getNutrientMaxLimits();
        assertThat(actualNutrientMaxLimits).hasSize(expectedNutrientMaxLimits.size());
    }
}