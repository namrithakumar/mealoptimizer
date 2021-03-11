package com.practice.mealoptimizer.util;

import com.practice.mealoptimizer.handler.ResultHandler;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BeanFactoryDynamicAutowireService {

    //BeanFactory gives us access to the beans in the container - we can access any bean we want by passing the name + type
    private final BeanFactory beanFactory;

    @Autowired
    public BeanFactoryDynamicAutowireService(BeanFactory beanFactory) {
        this.beanFactory = beanFactory;
    }

    public ResultHandler getResultHandler(String resultHandler) {
        return beanFactory.getBean(resultHandler,
                ResultHandler.class);
    }
}