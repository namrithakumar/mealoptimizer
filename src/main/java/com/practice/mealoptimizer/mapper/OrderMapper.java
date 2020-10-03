package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Meal;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.MealDTO;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring", uses = { ItemMapperResolver.class })
public interface OrderMapper {
    public Order orderDTOtoOrder(OrderRequestDTO orderRequestDTO);

    //Methods to map Entity (Order/Meal) to corresponding DTO objects(OrderDTO/MealDTO)
    @Named("MealtoMealDTO")
    @Mappings({
            @Mapping(target="itemName", source="meal.item.itemName")
    })
    public MealDTO mapMealToMealDTO(Meal meal);

    @IterableMapping(qualifiedByName = "MealtoMealDTO")
    @Named("toMealDTO")
    public List<MealDTO> mapMealListToMealDTOList(List<Meal> mealList);

    @Mappings({
            @Mapping(source="mealList", target="meals", qualifiedByName = "toMealDTO")
    })
    public OrderResponseDTO ordertoOrderDTO(Order order);
}