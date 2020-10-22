package com.practice.mealoptimizer.domain.user;

import com.practice.mealoptimizer.domain.Category;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    private String password;
    private String email;
    private String preferredDietType;
    @NotNull
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="user_nutrient_min_limits",
            joinColumns = { @JoinColumn(name="user_id", referencedColumnName = "id")})
    @MapKeyJoinColumn(name="nutrient_name")
    @Column(name="nutrient_min_limit")
    private Map<String, Integer> nutrientMinLimits;
    @NotNull
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="user_nutrient_max_limits",
            joinColumns = { @JoinColumn(name="user_id", referencedColumnName = "id")})
    @MapKeyJoinColumn(name="nutrient_name")
    @Column(name="nutrient_max_limit")
    private Map<String, Integer> nutrientMaxLimits;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String username, String password, String email, String preferredDietType, Map<String, Integer> nutrientMinLimits, Map<String, Integer> nutrientMaxLimits, Set<Role> roles) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.preferredDietType = preferredDietType;
        this.nutrientMinLimits = nutrientMinLimits;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.roles = roles;
    }

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPreferredDietType() {
        return preferredDietType;
    }

    public void setPreferredDietType(String preferredDietType) {
        this.preferredDietType = preferredDietType;
    }

    public Map<String, Integer> getNutrientMinLimits() {
        return nutrientMinLimits;
    }

    public void setNutrientMinLimits(Map<String, Integer> nutrientMinLimits) {
        this.nutrientMinLimits = nutrientMinLimits;
    }

    public Map<String, Integer> getNutrientMaxLimits() {
        return nutrientMaxLimits;
    }

    public void setNutrientMaxLimits(Map<String, Integer> nutrientMaxLimits) {
        this.nutrientMaxLimits = nutrientMaxLimits;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
