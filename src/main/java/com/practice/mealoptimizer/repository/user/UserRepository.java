package com.practice.mealoptimizer.repository.user;

import com.practice.mealoptimizer.domain.user.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    @EntityGraph(value = "User.roles")
    public User findByUsername(String username);

    //We need not eagerly fetch user roles here - so not using EntityGraph
    public User findByEmail(String email);

    @Query(value = "SELECT username FROM users", nativeQuery = true)
    public Set<String> fetchAllUsernames();
}