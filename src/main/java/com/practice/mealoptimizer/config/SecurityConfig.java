package com.practice.mealoptimizer.config;

import com.practice.mealoptimizer.util.RoleConverter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

@Configuration
@EnableWebSecurity
@Profile("!junit")// Turn off security for JUnit for now (Will be replaced with WireMock later)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new RoleConverter());

        http.cors().and().csrf().disable().authorizeRequests(authz ->
                authz.antMatchers(HttpMethod.POST, "/mealoptimizer/orders/user/save")
                .hasRole("user")
                .antMatchers("/mealoptimizer/categories/fetchAll").permitAll()
                .antMatchers("/mealoptimizer/orders/guest/compute").permitAll()
                .antMatchers("/mealoptimizer/menu/find").permitAll()
                .antMatchers("/mealoptimizer/recipe/find").permitAll()
                .anyRequest().authenticated())
                .oauth2ResourceServer()
                .jwt()
                .jwtAuthenticationConverter(jwtAuthenticationConverter);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                .antMatchers("/h2-console/**");
    }
}