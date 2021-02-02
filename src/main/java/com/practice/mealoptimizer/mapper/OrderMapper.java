package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.response.MealDTO;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OptimizedMealPlanDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.mapstruct.*;
import org.springframework.data.jpa.repository.EntityGraph;

import java.util.Optional;

@Mapper(componentModel = "spring", uses = { ItemMapperResolver.class })
public interface OrderMapper {

    @EntityGraph(value = "Order.mealList")
    public Order orderRequestDTOtoOrder(OrderRequestDTO orderRequest);

    @Named("MapMealToMealDTO")
    @Mappings(
            @Mapping(target="itemName", source="meal.item.itemName")
    )
    public MealDTO MealToMealDTO(Meal meal);

    @Named("MapOrderstoOptimizedMealPlan")
    @Mappings({
            @Mapping(target = "meals", source = "mealList", qualifiedByName = "MapMealToMealDTO"),
            @Mapping(target = "mealPlanCost", expression = "java(order.getOrderCost())")
    })
    @EntityGraph(value = "Order.mealList")
    public OptimizedMealPlanDTO orderToOptimizedMealPlan(Order order);

    //MealPlan is not mapped here, it is mapped separately in ResultMapper. Only ID and DateOfDelivery are mapped here.
    @EntityGraph(value = "Order.mealList")
    public OrderResponseDTO orderToOrderResponseDTO(Order order);

    @Named("unwrap")
    default <T> T unwrap(Optional<T> optional) { return optional.orElse(null); }
}