package com.practice.mealoptimizer.repository.user;

import com.practice.mealoptimizer.domain.user.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
}