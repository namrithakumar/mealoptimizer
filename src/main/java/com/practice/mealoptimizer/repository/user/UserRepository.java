package com.practice.mealoptimizer.repository.user;

import com.practice.mealoptimizer.domain.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    public User findByUsername(String username);
}