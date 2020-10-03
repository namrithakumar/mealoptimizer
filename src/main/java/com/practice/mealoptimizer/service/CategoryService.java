package com.practice.mealoptimizer.service;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.projection.ItemView;
import com.practice.mealoptimizer.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryView> getAllCategories() {
        return this.categoryRepository.findAllProjectedBy();
    }

    public List<String> findItemNamesByCategory(String categoryName) {
        List<String> itemNames = new ArrayList<>();
        this.categoryRepository.findItemByCategoryName(categoryName).forEach(
                (ItemView itemView) -> {
                    itemNames.add(itemView.getItem().getItemName());
                }
        );
        return itemNames;
    }
}