package com.practice.mealoptimizer.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import com.practice.mealoptimizer.mapper.OrderMapper;
import com.practice.mealoptimizer.mapper.ResultMapper;
import com.practice.mealoptimizer.processor.OptimizationType;
import com.practice.mealoptimizer.processor.Optimizer;
import com.practice.mealoptimizer.processor.OptimizerFactory;
import com.practice.mealoptimizer.service.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class OrderControllerTest {

    @Mock
    private OrderMapper orderMapper;

    @Mock
    private ResultMapper resultMapper;

    @Mock
    private OptimizerFactory optimizerFactory;

    @Mock
    private OrderService orderService;

    @Mock
    private Optimizer optimizer;

    @InjectMocks
    private OrderController orderController;

    private MockMvc mockMvc;

    private Order order;

    private OrderDTO responseDTO;

    private OrderDTO requestDTO;

    private Map<String, Object> result;

    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {

        mockMvc = MockMvcBuilders.standaloneSetup(orderController).build();
        requestDTO = new OrderDTO();
        requestDTO.setDateOfDelivery(LocalDate.now().plusDays(7));
        requestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
        order = new Order();
        order.setOrderId(1L);
        responseDTO = new OrderDTO();
        responseDTO.setOrderId(1L);
        result = new HashMap<>(4);
        objectMapper = new ObjectMapper();
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_DEFAULT);
        objectMapper.registerModule(new JavaTimeModule().addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern("MM/dd/yyyy"))));
    }

    @Test
    void saveTestHeaderContentTypeSetAsJson() throws Exception {
        when(orderMapper.orderDTOtoOrder(any(OrderDTO.class))).thenReturn(order);
        when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
        when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
        when(resultMapper.mapResultToOrder(result, order)).thenReturn(order);
        when(orderService.saveOrder(order)).thenReturn(order);
        when(orderMapper.ordertoOrderDTO(order)).thenReturn(responseDTO);

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        verify(orderMapper, times(1)).orderDTOtoOrder(any(OrderDTO.class));
        verify(optimizerFactory, times(1)).getOptimizerByType(any(OptimizationType.class));
        verify(optimizer, times(1)).optimizeByOptimizationType(order);
        verify(resultMapper, times(1)).mapResultToOrder(result, order);
        verify(orderService, times(1)).saveOrder(order);
        verify(orderMapper, times(1)).ordertoOrderDTO(order);
    }

    @Test
    void saveTestHeaderNotSet() throws Exception {
         mockMvc.perform(post("/mealoptimizer/orders/save")
                    .content(objectMapper.writeValueAsString(requestDTO)))
                    .andExpect(status().isUnsupportedMediaType());
//                    .andExpect(result -> assertTrue(result instanceof java.lang.AssertionError));
        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
        verifyNoInteractions(orderMapper);
    }
}