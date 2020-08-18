package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { ItemMapperResolver.class })
public interface OrderMapper {
    public Order orderDTOtoOrder(OrderDTO orderDTO);
}