package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import com.practice.mealoptimizer.mapper.OrderMapper;
import com.practice.mealoptimizer.mapper.ResultMapper;
import com.practice.mealoptimizer.processor.OptimizationType;
import com.practice.mealoptimizer.processor.Optimizer;
import com.practice.mealoptimizer.processor.OptimizerFactory;
import com.practice.mealoptimizer.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping(path = "/mealdelivery")
public class OrderController {

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private ResultMapper resultMapper;

    @Autowired
    private OptimizerFactory optimizerFactory;

    @Autowired
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", value = "/handleOrder")
    public ResponseEntity<Order> handleOrder(@RequestBody @Valid OrderDTO orderDTO) {
        Order order = orderMapper.orderDTOtoOrder(orderDTO);
        Optimizer optimizer = optimizerFactory.getOptimizerByType(OptimizationType.COST);
        Map<String, Object>  result = optimizer.optimizeByOptimizationType(order);
        order = resultMapper.mapResultToOrder(result, order);
        return new ResponseEntity<Order>(orderService.saveOrder(order), HttpStatus.OK);
    }
}