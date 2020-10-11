package com.practice.mealoptimizer.domain;

import java.io.Serializable;

public class OrderId implements Serializable {

    private long orderId;

    private OptimizationType optimizationType;

    public OrderId(long orderId, OptimizationType optimizationType) {
        this.orderId = orderId;
        this.optimizationType = optimizationType;
    }

    public OrderId() {
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public OptimizationType getOptimizationType() {
        return optimizationType;
    }

    public void setOptimizationType(OptimizationType optimizationType) {
        this.optimizationType = optimizationType;
    }
}