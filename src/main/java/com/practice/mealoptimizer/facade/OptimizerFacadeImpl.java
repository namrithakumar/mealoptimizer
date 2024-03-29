package com.practice.mealoptimizer.facade;

import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.domain.OrderIdGenerator;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import com.practice.mealoptimizer.handler.ResultHandler;
import com.practice.mealoptimizer.mapper.OrderMapper;
import com.practice.mealoptimizer.mapper.ResultMapper;
import com.practice.mealoptimizer.processor.Optimizer;
import com.practice.mealoptimizer.processor.OptimizerFactory;
import com.practice.mealoptimizer.service.OrderService;
import org.ojalgo.optimisation.Optimisation;
import org.springframework.beans.factory.ObjectProvider;
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
    private OrderIdGenerator orderIdGenerator;

    private ResultHandler resultHandler;

    //TODO : Investigate constructor injection
    @Autowired
    public void setResultHandler(ResultHandler resultHandler) {
        this.resultHandler = resultHandler;
    }

    public OrderResponseDTO optimizeByOptimizationTypes(OrderRequestDTO orderRequest) {

        Long orderID = (orderRequest.getOrderId() != null)?orderRequest.getOrderId():orderIdGenerator.generateId();
        Map<String, Object> result = null;
        List<Order> ordersToSave = new ArrayList<>(2);

        for(OptimizationType optimizationType : orderRequest.getOptimizationTypes()) {
            Order order = orderMapper.orderRequestDTOtoOrder(orderRequest);
            order.setOptimizationType(optimizationType);
            Optimizer optimizer = optimizerFactory.getOptimizerByType(order.getOptimizationType());
            result = optimizer.optimizeByOptimizationType(order);
            order = resultMapper.mapResultToOrder(result, order);
            order.setOrderId(orderID);
            ordersToSave.add(order);
        };

        //Handle Result - save to DB for authorized user, do not save for guest users.
        List<Order> savedOrders = resultHandler.handleResult(((Optimisation.State) (result.get("STATE"))).name(), ordersToSave);
        return resultMapper.mapOrderAndStateToOrderResponseDTO(savedOrders, ((Optimisation.State) (result.get("STATE"))).name());
    }
}