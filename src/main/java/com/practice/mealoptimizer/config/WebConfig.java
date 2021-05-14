package com.practice.mealoptimizer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);

                if(requestedResource.exists() && requestedResource.isReadable()) {
                    System.out.println("Resource exists : " + requestedResource.getURL());
                    return requestedResource;
                }
                else {
                    System.out.println("Resource does not exist : " + requestedResource.getURL());
                    return new ClassPathResource("/static/index.html");
                }}
                });
    }

    //Leaving as comment for future ref
    /*@Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //registry.addRedirectViewController("/", "index.html");
        //"forward:/index.html"
        //Not working - static/index.html
        registry.addViewController("/").setViewName("index");
    }*/
}