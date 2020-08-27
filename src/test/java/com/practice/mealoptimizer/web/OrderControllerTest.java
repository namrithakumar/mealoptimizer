package com.practice.mealoptimizer.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.OrderDTO;
import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
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

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

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

    @Mock
    private ObjectMapper objectMapper;

    @InjectMocks
    private OrderController orderController;

    private MockMvc mockMvc;

    private Order order;

    private OrderDTO responseDTO;

    private OrderDTO requestDTO;

    private Map<String, Object> result;

    @BeforeEach
    void setUp() {

        mockMvc = MockMvcBuilders.standaloneSetup(orderController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();
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

        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
    }

    @Test
    void saveTestRequestValidationFails() throws Exception {
        requestDTO.setDateOfDelivery(LocalDate.now().minusMonths(1));

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("dateOfDelivery: must be a future date")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
    }

    @Test
    void saveTestHttpMessageNotReadableException() throws Exception {

        String request = "{\n" + "\"itemNames\": 1,\n" + "\"dateOfDelivery\":\"08/25/2020\"\n" + "}";

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(request))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("Malformed JSON request. Check data type of input fields")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
    }

    @Test
    void saveTestHttpRequestMethodNotSupportedException() throws Exception {

        mockMvc.perform(delete("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isMethodNotAllowed())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", containsString("method is not supported for this request. Supported methods are")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
    }

    @Test
    void saveTestHttpMediaTypeNotSupported() throws Exception {

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_XML)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isUnsupportedMediaType())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", containsString("media type is not supported. Supported media types are")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(orderMapper);
        verifyNoInteractions(optimizerFactory);
        verifyNoInteractions(optimizer);
        verifyNoInteractions(resultMapper);
        verifyNoInteractions(orderService);
    }

    @Test
    void saveTestResponseStatusException() throws Exception {
        when(orderMapper.orderDTOtoOrder(any(OrderDTO.class))).thenReturn(order);
        when(optimizerFactory.getOptimizerByType(any(OptimizationType.class))).thenReturn(optimizer);
        when(optimizer.optimizeByOptimizationType(order)).thenReturn(result);
        when(resultMapper.mapResultToOrder(result, order)).thenThrow(new RuntimeException("Error in mapping results"));

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isInternalServerError())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("Error in mapping results")))
                .andExpect(jsonPath("$.errorType", is("FUNCTIONAL")));

        verify(orderMapper, times(1)).orderDTOtoOrder(any(OrderDTO.class));
        verify(optimizerFactory, times(1)).getOptimizerByType(any(OptimizationType.class));
        verify(optimizer, times(1)).optimizeByOptimizationType(order);
        verify(resultMapper, times(1)).mapResultToOrder(result, order);
        verifyNoInteractions(orderService);
        verifyNoMoreInteractions(orderMapper);
    }
}