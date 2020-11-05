package com.practice.mealoptimizer.service.user;

import com.practice.mealoptimizer.domain.user.Role;
import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.exception.UserException;
import com.practice.mealoptimizer.repository.user.UserRepository;
import com.practice.mealoptimizer.util.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private UserRepository userRepo;

    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = passwordEncoder;
    }

    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public User saveUser(User user) throws Exception {
        if(userRepo.findByUsername(user.getUsername()) !=null) {
            throw new UserException("Username already exists");
        }
        if(userRepo.findByEmail(user.getEmail()) !=null)
            throw new UserException("Email already exists");

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        Set<Role> defaultRoles = new HashSet<Role>();
        defaultRoles.add(new Role(RoleType.ROLE_USER));
        user.setRoles(defaultRoles);
        return userRepo.save(user);
    }

    public Set<String> fetchAllUsernames() {
        return userRepo.fetchAllUsernames();
    }
}