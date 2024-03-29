package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.Order;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    @EntityGraph(value = "Order.mealList")
    public List<Order> findAllByOrderByPlacedAtAsc();
}