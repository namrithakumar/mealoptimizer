package com.practice.mealoptimizer.facade;

import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.OrderIdGenerator;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import com.practice.mealoptimizer.mapper.OrderMapper;
import com.practice.mealoptimizer.mapper.ResultMapper;
import com.practice.mealoptimizer.processor.Optimizer;
import com.practice.mealoptimizer.processor.OptimizerFactory;
import com.practice.mealoptimizer.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class OptimizerFacadeImpl implements  OptimizerFacade {

    @Autowired
    private OptimizerFactory optimizerFactory;

    @Autowired
    private ResultMapper resultMapper;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderIdGenerator orderIdGenerator;

    public OrderResponseDTO optimizeByOptimizationTypes(OrderRequestDTO orderRequest) {
        Long generatedOrderID = orderIdGenerator.generateId();

        List<Order> ordersToSave = new ArrayList<>(2);
        for(OptimizationType optimizationType : orderRequest.getOptimizationTypes()) {
            Order order = orderMapper.orderRequestDTOtoOrder(orderRequest);
            order.setOptimizationType(optimizationType);
            Optimizer optimizer = optimizerFactory.getOptimizerByType(order.getOptimizationType());
            Map<String, Object> result = optimizer.optimizeByOptimizationType(order);
            order = resultMapper.mapResultToOrder(result, order);
            order.setOrderId(generatedOrderID);
            ordersToSave.add(order);
        };
        List<Order> savedOrders = (List<Order>) orderService.saveAll(ordersToSave);
        return resultMapper.mapOrderToOrderResponseDTO(savedOrders);
    }
}