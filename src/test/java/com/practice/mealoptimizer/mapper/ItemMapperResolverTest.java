package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.config.MealOptimizerTestConfig;
import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.nutrient.NutrientMaxLimit;
import com.practice.mealoptimizer.domain.nutrient.NutrientMinLimit;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.repository.ItemRepository;
import com.practice.mealoptimizer.repository.NutrientsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@TestPropertySource(locations="classpath:application-junit.properties")
@Import(MealOptimizerTestConfig.class)
class ItemMapperResolverTest {

    @Mock
    private ItemRepository itemRepository;

    @Mock
    private NutrientsRepository nutrientsRepository;

    @InjectMocks
    private ItemMapperResolver itemMapperResolver;

    private OrderRequestDTO orderRequestDTO;

    private Order resolvedOrder;

    private List<NutrientMinLimit> nutrientMinLimits = new ArrayList<NutrientMinLimit>();
    private List<NutrientMaxLimit> nutrientMaxLimits  = new ArrayList<NutrientMaxLimit>();

    @BeforeEach
    void setUp() {
        orderRequestDTO = new OrderRequestDTO();
        orderRequestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
        orderRequestDTO.setUsername("existentuser");

        nutrientMinLimits.add(new NutrientMinLimit("calories", 2000));
        nutrientMinLimits.add(new NutrientMinLimit("fat", 5));
        nutrientMinLimits.add(new NutrientMinLimit("sodium", 30));
        nutrientMinLimits.add(new NutrientMinLimit("carbs", 105));
        nutrientMinLimits.add(new NutrientMinLimit("protein", 20));
        nutrientMinLimits.add(new NutrientMinLimit("calcium", 100));

        nutrientMaxLimits.add(new NutrientMaxLimit("calories", 2400));
        nutrientMaxLimits.add(new NutrientMaxLimit("fat", 80));
        nutrientMaxLimits.add(new NutrientMaxLimit("sodium", 5000));
        nutrientMaxLimits.add(new NutrientMaxLimit("carbs", 500));
        nutrientMaxLimits.add(new NutrientMaxLimit("protein", 200));
        nutrientMaxLimits.add(new NutrientMaxLimit("calcium", 5000));
    }

    @Test
    void resolveTest() {
        when(itemRepository.findByItemName(anyString())).thenReturn(new Item());
        when(nutrientsRepository.getNutrientMaxLimits()).thenReturn(nutrientMaxLimits);
        when(nutrientsRepository.getNutrientMinLimits()).thenReturn(nutrientMinLimits);
        resolvedOrder = itemMapperResolver.resolve(orderRequestDTO, Order.class);
        assertEquals(4, resolvedOrder.getMealList().size());
        resolvedOrder.getMealList().forEach(meal -> assertNotNull(meal.getItem()));

        verify(itemRepository, times(4)).findByItemName(anyString());
        verify(nutrientsRepository, times(1)).getNutrientMaxLimits();
        verify(nutrientsRepository, times(1)).getNutrientMinLimits();
    }
}