package com.practice.mealoptimizer.facade;

import com.practice.mealoptimizer.domain.Meal;
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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.ojalgo.optimisation.Optimisation;

import java.time.LocalDate;
import java.util.*;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class OptimizerFacadeTest {

    @Mock
    private OrderMapper orderMapper;

    @Mock
    private OptimizerFactory optimizerFactory;

    @Mock
    private ResultMapper resultMapper;

    @Mock
    private OrderIdGenerator orderIdGenerator;

    @Mock
    private Optimizer optimizer;

    @Mock
    private ResultHandler resultHandler;;

    @InjectMocks
    private OptimizerFacadeImpl optimizerFacade;

    private OrderRequestDTO orderRequestDTO;

    private Order order;

    private Map<String, Object> result;

    private List<Order> savedOrders;

    private OrderResponseDTO orderResponseDTO;

    @BeforeEach
    void setUp() {
        orderRequestDTO = new OrderRequestDTO();
        orderRequestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
        orderRequestDTO.setDateOfDelivery(LocalDate.now().plusDays(7)); //.format(DateTimeFormatter.ofPattern("MM/dd/yyyy")
        orderRequestDTO.setOptimizationTypes(Arrays.asList(OptimizationType.values()));
        order = new Order();
        order.setMealList(new ArrayList<Meal>(4));
        order.setDateOfDelivery(orderRequestDTO.getDateOfDelivery());
        result = new HashMap<String, Object>();
        savedOrders = new ArrayList<>(2);
        orderResponseDTO = new OrderResponseDTO();
    }

    @Test
    void testOptimizeByOptimizationTypesOptimizationStateOPTIMALForCreate() {
        try {
            when(orderIdGenerator.generateId()).thenReturn(1L);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            result.put("STATE", Optimisation.State.OPTIMAL);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(resultHandler.handleResult(anyString(), anyList())).thenReturn(new ArrayList());
            when(resultMapper.mapOrderAndStateToOrderResponseDTO(savedOrders, ((Optimisation.State) result.get("STATE")).name())).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }

    @Test
    void testOptimizeByOptimizationTypesOptimizationStateFEASIBLE() {
        try {
            when(orderIdGenerator.generateId()).thenReturn(1L);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            result.put("STATE", Optimisation.State.FEASIBLE);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(resultHandler.handleResult(anyString(), anyList())).thenReturn(new ArrayList());
            when(resultMapper.mapOrderAndStateToOrderResponseDTO(savedOrders, ((Optimisation.State) result.get("STATE")).name())).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }

    @Test
    void testOptimizeByOptimizationTypesOptimizationStateINFEASIBLE() {
        try {
            when(orderIdGenerator.generateId()).thenReturn(1L);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            result.put("STATE", Optimisation.State.INFEASIBLE);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(resultHandler.handleResult(anyString(), anyList())).thenReturn(new ArrayList());
            when(resultMapper.mapOrderAndStateToOrderResponseDTO(anyList(), anyString())).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }

    @Test
    void testOptimizeByOptimizationTypesOptimizationStateFAILED() {
        try {
            when(orderIdGenerator.generateId()).thenReturn(1L);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            result.put("STATE", Optimisation.State.FAILED);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(resultHandler.handleResult(anyString(), anyList())).thenReturn(new ArrayList());
            when(resultMapper.mapOrderAndStateToOrderResponseDTO(anyList(), anyString())).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }
    @Test
    void testOptimizeByOptimizationTypesOptimizationStateOPTIMALForUpdate() {
        try {
            Long savedOrderId = 5L;
            orderRequestDTO.setOrderId(savedOrderId);
            orderResponseDTO.setOrderId(savedOrderId);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            result.put("STATE", Optimisation.State.OPTIMAL);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(resultHandler.handleResult(anyString(), anyList())).thenReturn(new ArrayList());
            when(resultMapper.mapOrderAndStateToOrderResponseDTO(savedOrders, ((Optimisation.State) result.get("STATE")).name())).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
            assertEquals(orderResponse.getOrderId(), savedOrderId);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }
    //saveTestResponseStatusException - when(resultMapper.mapResultToOrder(result, order)).thenThrow(new RuntimeException("Error in mapping results"));
}