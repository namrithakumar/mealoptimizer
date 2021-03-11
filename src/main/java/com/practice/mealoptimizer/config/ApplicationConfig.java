package com.practice.mealoptimizer.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.mealoptimizer.handler.GuestResultHandler;
import com.practice.mealoptimizer.handler.ResultHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

    @Bean
    public ObjectMapper mapper() {
        return new ObjectMapper();
    }

    @Bean
    public ResultHandler resultHandler() {
        return new GuestResultHandler();
    }
}