package com.practice.mealoptimizer.facade;

import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import org.springframework.stereotype.Component;

@Component
public interface OptimizerFacade {
    public OrderResponseDTO optimizeByOptimizationTypes(OrderRequestDTO orderRequest);

}