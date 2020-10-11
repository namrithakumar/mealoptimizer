package com.practice.mealoptimizer.facade;

import com.practice.mealoptimizer.domain.Meal;
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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

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
    private OrderService orderService;

    @Mock
    private Optimizer optimizer;

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
    void testOptimizeByOptimizationTypes() {
        try {
            when(orderIdGenerator.generateId()).thenReturn(1L);
            when(orderMapper.orderRequestDTOtoOrder(orderRequestDTO)).thenReturn(order);
            when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
            when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
            when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
            when(orderService.saveAll(anyList())).thenReturn(savedOrders);
            when(resultMapper.mapOrderToOrderResponseDTO(savedOrders)).thenReturn(orderResponseDTO);

            OrderResponseDTO orderResponse = optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO);
        } catch(Exception e) {
            fail("OptimizerFacadeImpl.optimizeByOptimizationTypes() failed with an unexpected exception");
            e.printStackTrace();
        }
    }
    //saveTestResponseStatusException - when(resultMapper.mapResultToOrder(result, order)).thenThrow(new RuntimeException("Error in mapping results"));
}