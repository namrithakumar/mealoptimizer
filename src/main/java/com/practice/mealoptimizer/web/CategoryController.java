package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(path = "/mealoptimizer/categories")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/fetchAll")
    public ResponseEntity<List<CategoryView>> fetchAllCategories() {
        try {
            return new ResponseEntity<List<CategoryView>>(categoryService.getAllCategories(), HttpStatus.OK);
        } catch (RuntimeException re) {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, re.getMessage());
        }
    }
}
