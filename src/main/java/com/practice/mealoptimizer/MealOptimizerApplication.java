package com.practice.mealoptimizer;

import com.practice.mealoptimizer.domain.Category;
import com.practice.mealoptimizer.domain.user.Role;
import com.practice.mealoptimizer.domain.user.User;
import com.practice.mealoptimizer.repository.user.RoleRepository;
import com.practice.mealoptimizer.repository.user.UserRepository;
import com.practice.mealoptimizer.util.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@SpringBootApplication
public class MealOptimizerApplication {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	@Qualifier("bCryptPasswordEncoder")
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostConstruct
	public void storeUserDetails() {
		Map<String, Integer> nutrientMinLimits = new HashMap<String, Integer>();
		Map<String, Integer> nutrientMaxLimits = new HashMap<String, Integer>();

		nutrientMinLimits.put("calories", 2000);
		nutrientMinLimits.put("fat", 5);
		nutrientMinLimits.put("sodium", 30);
		nutrientMinLimits.put("carbs", 105);
		nutrientMinLimits.put("protein", 20);
		nutrientMinLimits.put("calcium", 100);

		nutrientMaxLimits.put("calories", 2400);
		nutrientMaxLimits.put("fat", 80);
		nutrientMaxLimits.put("sodium", 5000);
		nutrientMaxLimits.put("carbs", 500);
		nutrientMaxLimits.put("protein", 200);
		nutrientMaxLimits.put("calcium", 5000);

		Role role = new Role(RoleType.ROLE_USER);
		Set<Role> roles = new HashSet<Role>();
		roles.add(role);
		roleRepo.saveAll(roles);
		User user = new User("hp", bCryptPasswordEncoder.encode("password"), "harry.potter@gmail.com", "VEGAN", nutrientMinLimits, nutrientMaxLimits, roles);
		userRepo.save(user);
	}
	public static void main(String[] args) { SpringApplication.run(MealOptimizerApplication.class, args); }
}