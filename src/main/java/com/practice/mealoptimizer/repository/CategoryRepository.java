package com.practice.mealoptimizer.repository;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.projection.CategoryView;
import com.practice.mealoptimizer.projection.ItemView;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {

    public List<ItemView> findItemByCategoryName(String categoryName);

    public List<CategoryView> findAllProjectedBy();
}