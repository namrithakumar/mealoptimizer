package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.dto.request.OrderRequestDTO;
import com.practice.mealoptimizer.dto.response.OrderResponseDTO;
import com.practice.mealoptimizer.facade.OptimizerFacadeImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/mealoptimizer/orders")
public class OrderController {

    private OptimizerFacadeImpl optimizerFacade;

    @Autowired
    public OrderController(OptimizerFacadeImpl optimizerFacade) {
        this.optimizerFacade = optimizerFacade;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", path = "/save")
    public ResponseEntity<OrderResponseDTO> save(@RequestBody @Valid OrderRequestDTO orderRequestDTO) {
        try {
            return new ResponseEntity<OrderResponseDTO>(optimizerFacade.optimizeByOptimizationTypes(orderRequestDTO), HttpStatus.CREATED);
        } catch (RuntimeException re) {
            re.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, re.getMessage());
        }
    }
}