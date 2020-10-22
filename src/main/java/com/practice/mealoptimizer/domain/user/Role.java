package com.practice.mealoptimizer.domain.user;

import com.practice.mealoptimizer.util.RoleType;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Role {

    @Id
    @GeneratedValue
    private Integer id;

    @Enumerated(EnumType.STRING)
    private RoleType type;

    public Role(RoleType type) {
        this.type = type;
    }

    public Role() {
    }

    public RoleType getType() {
        return type;
    }

    public void setType(RoleType type) {
        this.type = type;
    }
}