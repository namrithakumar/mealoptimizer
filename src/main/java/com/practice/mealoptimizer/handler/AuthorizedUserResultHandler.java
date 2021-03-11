package com.practice.mealoptimizer.handler;

import com.practice.mealoptimizer.domain.Order;
import com.practice.mealoptimizer.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("authorizedUserResultHandler")
public class AuthorizedUserResultHandler implements ResultHandler {

    @Autowired
    private OrderService orderService;

    //If the Optimization State is either FEASIBLE or OPTIMAL, save to DB. Otherwise do not save to the DB.
    @Override
    public List<Order> handleResult(String optimisationState, List<Order> ordersToSave) {
        System.out.println("Inside AuthorizedUserResultHandler.handleResult()");
        if(optimisationState.equalsIgnoreCase("OPTIMAL") || optimisationState.equalsIgnoreCase("FEASIBLE")) {
            return (List<Order>) orderService.saveAll(ordersToSave);
        }
        else {
            return ordersToSave;
        }
    }
}