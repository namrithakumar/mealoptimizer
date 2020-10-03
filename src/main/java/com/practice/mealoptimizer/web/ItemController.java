package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(path = "/mealoptimizer/items")
public class ItemController {

    private CategoryService categoryService;

    @Autowired
    public ItemController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/find")
    public ResponseEntity<List<String>> findItemsByCategory(@RequestParam("category") String categoryName) {
        try {
            return new ResponseEntity<List<String>>(categoryService.findItemNamesByCategory(categoryName), HttpStatus.OK);
        } catch (RuntimeException re) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, re.getMessage());
        }
    }
}