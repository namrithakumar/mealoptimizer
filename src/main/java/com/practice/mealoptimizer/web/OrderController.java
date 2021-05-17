package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import com.practice.mealoptimizer.facade.OptimizerFacadeImpl;
import com.practice.mealoptimizer.util.BeanFactoryDynamicAutowireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/mealoptimizer/orders")
public class OrderController {

    private OptimizerFacadeImpl optimizerFacade;

    private BeanFactoryDynamicAutowireService beanFactoryDynamicAutowireService;

    @Autowired
    public OrderController(OptimizerFacadeImpl optimizerFacade, BeanFactoryDynamicAutowireService beanFactoryDynamicAutowireService) {
        this.optimizerFacade = optimizerFacade;
        this.beanFactoryDynamicAutowireService = beanFactoryDynamicAutowireService;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", path = "/user/save")
    public ResponseEntity<OrderResponseDTO> save(@RequestBody @Valid OrderRequestDTO orderRequestDTO) {
        try {
            optimizerFacade.setResultHandler(this.beanFactoryDynamicAutowireService.getResultHandler("authorizedUserResultHandler"));
            return new ResponseEntity<OrderResponseDTO>(optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO), HttpStatus.CREATED);
        } catch (RuntimeException re) {
            re.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, re.getMessage());
        }
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", path = "/guest/compute")
    public ResponseEntity<OrderResponseDTO> compute(@RequestBody @Valid OrderRequestDTO orderRequestDTO) {
        try {
            optimizerFacade.setResultHandler(this.beanFactoryDynamicAutowireService.getResultHandler("guestResultHandler"));
            return new ResponseEntity<OrderResponseDTO>(optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO), HttpStatus.CREATED);
        } catch (RuntimeException re) {
            re.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, re.getMessage());
        }
    }
}