package com.practice.mealoptimizer.service.user;

import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }
}