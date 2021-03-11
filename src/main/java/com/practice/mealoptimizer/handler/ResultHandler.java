package com.practice.mealoptimizer.handler;

import com.practice.mealoptimizer.domain.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ResultHandler {

    default List<Order> handleResult(String optimisationState, List<Order> ordersToSave) {
        return ordersToSave;
    }
}