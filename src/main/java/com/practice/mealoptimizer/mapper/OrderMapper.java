package com.practice.mealoptimizer.mapper;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring", uses = { ItemMapperResolver.class })
public interface OrderMapper {
@Mappings(
        @Mapping(target="dateOfDelivery", source="orderDTO.dateOfDelivery")
)
    public Order orderDTOtoOrder(OrderDTO orderDTO);
}