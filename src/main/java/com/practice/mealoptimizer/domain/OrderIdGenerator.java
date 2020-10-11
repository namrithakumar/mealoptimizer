package com.practice.mealoptimizer.domain;

import com.practice.mealoptimizer.service.OrderService;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderIdGenerator {

    @Autowired
    private OrderService orderService;

    public Long generateId() {
        return orderService.getCountOfOrders() + 1L;
    }
}
