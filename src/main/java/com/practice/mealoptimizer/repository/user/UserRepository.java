package com.practice.mealoptimizer.repository.user;

import com.practice.mealoptimizer.domain.user.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    public User findByUsername(String username);

    public User findByEmail(String email);

    @Query(value = "SELECT username FROM user", nativeQuery = true)
    public Set<String> fetchAllUsernames();
}