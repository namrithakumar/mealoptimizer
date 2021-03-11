package com.practice.mealoptimizer.domain.nutrient;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="nutrients")
public class Nutrient {

    @Id
    private Long nutrientId;

    @NotBlank
    private String nutrientName;

    @Min(value=1, message="Reward must be atleast 1")
    @Max(value=10000, message="Reward must not exceed 10000")
    private Integer nutrientMinLimit;

    @Min(value=1, message="Reward must be atleast 1")
    @Max(value=10000, message="Reward must not exceed 10000")
    private Integer nutrientMaxLimit;

    public Nutrient(Long nutrientId, @NotBlank String nutrientName, @Min(value = 1, message = "Reward must be atleast 1") @Max(value = 10000, message = "Reward must not exceed 10000") Integer nutrientMinLimit, @Min(value = 1, message = "Reward must be atleast 1") @Max(value = 10000, message = "Reward must not exceed 10000") Integer nutrientMaxLimit) {
        this.nutrientId = nutrientId;
        this.nutrientName = nutrientName;
        this.nutrientMinLimit = nutrientMinLimit;
        this.nutrientMaxLimit = nutrientMaxLimit;
    }


    public Long getNutrientId() {
        return nutrientId;
    }

    public void setNutrientId(Long nutrientId) {
        this.nutrientId = nutrientId;
    }

    public String getNutrientName() {
        return nutrientName;
    }

    public void setNutrientName(String nutrientName) {
        this.nutrientName = nutrientName;
    }

    public Integer getNutrientMinLimit() {
        return nutrientMinLimit;
    }

    public void setNutrientMinLimit(Integer nutrientMinLimit) {
        this.nutrientMinLimit = nutrientMinLimit;
    }

    public Integer getNutrientMaxLimit() {
        return nutrientMaxLimit;
    }

    public void setNutrientMaxLimit(Integer nutrientMaxLimit) {
        this.nutrientMaxLimit = nutrientMaxLimit;
    }
}