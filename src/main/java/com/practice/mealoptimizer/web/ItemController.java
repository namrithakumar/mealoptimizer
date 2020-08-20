package com.practice.mealoptimizer.web;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/mealoptimizer/items")
public class ItemController {

    private ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/find")
    public ResponseEntity<List<String>> findItemsByCategory(@RequestParam("category") Category category) {
        List<String> itemNames = new ArrayList<>();
        itemService.findByItemCategoriesContains(category).forEach(item ->  itemNames.add(item.getItemName()));
        return new ResponseEntity<List<String>>(itemNames, HttpStatus.OK);
    }
}
