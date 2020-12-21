package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Item;
import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.MealDTO;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ResultMapperImplTest {

    @Mock
    private OrderMapper orderMapper;

    @InjectMocks
    private ResultMapperImpl resultMapper;

    private Map<String, Object> result;

    private Order order;

    private List<Meal> mealList;

    private String[] itemNames;

    @BeforeEach
    void setUp() {
        itemNames = new String[4];
        itemNames[0] = "Green Salad";
        itemNames[1] = "Icecream";
        itemNames[2] = "Strawberry Milkshake";
        itemNames[3] = "Garlic bread";

        result = new HashMap<>();
        result.put("STATE", "OPTIMAL");
        result.put("VALUE", 26.33);
        result.put(itemNames[0], 1.0);
        result.put(itemNames[1], 1.0);
        result.put(itemNames[2], 2.0);
        result.put(itemNames[3], 1.0);

        //resultMapper = new ResultMapperImpl();

        order = new Order();

        mealList = new ArrayList<>();

        for(int i=0;i<4;i++) {
            Meal meal = new Meal();
            Item item = new Item();
            item.setItemName(itemNames[i]);
            meal.setItem(item);
            mealList.add(meal);
        }
        order.setMealList(mealList);
    }

    @Test
    void testMapResultToOrder() {
        order = resultMapper.mapResultToOrder(result, order);
        order.getMealList().forEach(meal -> {
            assertEquals(result.get(meal.getItem().getItemName()), meal.getPortion());
        });
    }

    @Test
    void testMapOrderAndStateToOrderResponseDTO() {
        OrderResponseDTO response = new OrderResponseDTO();
        response.setOrderId(1L);
        response.setDateOfDelivery(LocalDate.now().plusDays(7));

        OptimizedMealPlanDTO optimizedMealPlan = new OptimizedMealPlanDTO();

        when(orderMapper.orderToOrderResponseDTO(order)).thenReturn(response);
        when(orderMapper.orderToOptimizedMealPlan(order)).thenReturn(optimizedMealPlan);

        assertEquals(2, resultMapper.mapOrderAndStateToOrderResponseDTO(Arrays.asList(order, order), "FEASIBLE").getMealPlan().size());
    }

    @Test
    void testMapOrderAndStateToOrderResponseDTOStateFeasible() {
        String expectedState = "FEASIBLE";

        this.testMapOrderAndStateToOrderResponseDTO();
        assertTrue(expectedState.equalsIgnoreCase(resultMapper.mapOrderAndStateToOrderResponseDTO(Arrays.asList(order, order), "FEASIBLE").getOptimizationState()));
    }

    @Test
    void testMapOrderAndStateToOrderResponseDTOStateOptimal() {
        String expectedState = "OPTIMAL";

        this.testMapOrderAndStateToOrderResponseDTO();
        assertTrue(expectedState.equalsIgnoreCase(resultMapper.mapOrderAndStateToOrderResponseDTO(Arrays.asList(order, order), "OPTIMAL").getOptimizationState()));
    }

    @Test
    void testMapOrderAndStateToOrderResponseDTOStateInvalid() {
        String expectedState = "INVALID";

        this.testMapOrderAndStateToOrderResponseDTO();
        assertTrue(expectedState.equalsIgnoreCase(resultMapper.mapOrderAndStateToOrderResponseDTO(Arrays.asList(order, order), "INVALID").getOptimizationState()));
    }

    @Test
    void testMapOrderAndStateToOrderResponseDTOStateError() {
        String expectedState = "FAILED";

        this.testMapOrderAndStateToOrderResponseDTO();
        assertTrue(expectedState.equalsIgnoreCase(resultMapper.mapOrderAndStateToOrderResponseDTO(Arrays.asList(order, order), null).getOptimizationState()));
    }
}