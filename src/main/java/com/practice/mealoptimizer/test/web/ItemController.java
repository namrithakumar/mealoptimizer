package com.practice.mealoptimizer.test.web;

import com.practice.mealoptimizer.test.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/item")
public class ItemController {
    private final ItemRepository itemRepository;

    @Autowired
    private ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping
    public String getItem() {
        return "Inside class ItemController";
    }
}
