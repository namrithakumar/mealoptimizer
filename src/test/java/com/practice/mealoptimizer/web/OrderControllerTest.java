package com.practice.mealoptimizer.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.practice.mealoptimizer.domain.OptimizationType;
import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import com.practice.mealoptimizer.exception.MealOptimizerExceptionHandler;
import com.practice.mealoptimizer.facade.OptimizerFacadeImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@ExtendWith(MockitoExtension.class)
class OrderControllerTest {

    @Mock
    private OptimizerFacadeImpl optimizerFacade;

    @InjectMocks
    private OrderController orderController;

    private ObjectMapper objectMapper;

    private MockMvc mockMvc;

    private Order order;

    private OrderResponseDTO responseDTO;

    private OrderRequestDTO requestDTO;

    private Map<String, Object> result;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(orderController).setControllerAdvice(new MealOptimizerExceptionHandler()).build();

        requestDTO = new OrderRequestDTO();
        requestDTO.setDateOfDelivery(LocalDate.now().plusDays(7));
        requestDTO.setItemNames(Arrays.asList(new String[] {"Egg Roll","Strawberry Milkshake","Green Salad","Chicken Sandwich"}));
        requestDTO.setOptimizationTypes(Arrays.asList(new OptimizationType[] { OptimizationType.COST, OptimizationType.REWARD}));
        requestDTO.setUsername("existentuser");

        order = new Order();
        order.setOrderId(1L);

        responseDTO = new OrderResponseDTO();
        responseDTO.setOrderId(1L);

        result = new HashMap<>(4);

        objectMapper = new ObjectMapper();
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_DEFAULT);
        objectMapper.registerModule(new JavaTimeModule().addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern("MM/dd/yyyy"))));
    }

    @Test
    void saveTestHeaderContentTypeSetAsJson() {
        try {
            when(optimizerFacade.optimizeByOptimizationTypes(
                    org.mockito.ArgumentMatchers.any(OrderRequestDTO.class)))
                    .thenReturn(responseDTO);
            mockMvc.perform(post("/mealoptimizer/orders/save")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(requestDTO)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        }
        catch(Exception e) {
            fail(this.getClass().getName() + " failed with message: " + e.getMessage());
        }
    }

    @Test
    void saveTestHeaderNotSet()  throws Exception {
            mockMvc.perform(post("/mealoptimizer/orders/save")
                    .content(objectMapper.writeValueAsString(requestDTO)))
                    .andExpect(status().isUnsupportedMediaType());

            verifyNoInteractions(optimizerFacade);
        }

    @Test
    void saveTestHttpMessageNotReadableException() throws Exception {

        String request = "{\n" + "\"mealSelected\": 1,\n" + "\"deliveryDate\":\"08/25/2020\"\n" + "}";

        mockMvc.perform(post("/mealoptimizer/orders/save").contentType(MediaType.APPLICATION_JSON)
                .content(request))
                //.andDo(MockMvcResultHandlers.print())
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("Malformed JSON request. Check data type of input fields")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(optimizerFacade);
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

        verifyNoInteractions(optimizerFacade);
    }

    @Test
    void saveTestHttpMediaTypeNotSupported() throws Exception {

        mockMvc.perform(post("/mealoptimizer/orders/save")
                .contentType(MediaType.APPLICATION_XML)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isUnsupportedMediaType())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", containsString("media type is not supported. Supported media types are")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(optimizerFacade);
    }

    @Test
    void saveTestRequestValidationFails() throws Exception {
        requestDTO.setDateOfDelivery(LocalDate.now().minusMonths(1));

        mockMvc.perform(post("/mealoptimizer/orders/save")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(requestDTO)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors", hasSize(1)))
                .andExpect(jsonPath("$.errors[0]", is("dateOfDelivery: must be a future date")))
                .andExpect(jsonPath("$.errorType", is("TECHNICAL")));

        verifyNoInteractions(optimizerFacade);
    }
}