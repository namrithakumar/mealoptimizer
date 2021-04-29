DROP SCHEMA IF EXISTS mealoptimizer;

CREATE SCHEMA IF NOT EXISTS mealoptimizer DEFAULT CHARACTER SET utf8;

-- GRANT ALL PRIVILEGES ON mealoptimizer.* TO 'sa'@'localhost';

-- FLUSH PRIVILEGES;

use mealoptimizer;

-- Table structure for table `category`


DROP TABLE IF EXISTS category;
CREATE TABLE category (
  category_name varchar(255) NOT NULL,
  display_value varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_name`)
);


-- Table structure for table `ingredient`


DROP TABLE IF EXISTS ingredient;
CREATE TABLE ingredient (
  id int(11) NOT NULL,
  description varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  recipe_name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKi4th6chbxb8pya8rn8ejyivvf (recipe_name)
);

-- Table structure for table `item`

DROP TABLE IF EXISTS item;
CREATE TABLE item (
  item_id bigint(20) NOT NULL,
  item_cost double NOT NULL,
  item_name varchar(255) DEFAULT NULL,
  max_safe_consumption int(11) NOT NULL,
  reward int(11) NOT NULL,
  PRIMARY KEY (item_id)
);

-- Table structure for table `item_category`

DROP TABLE IF EXISTS item_category;
CREATE TABLE item_category (
  item_id bigint(20) NOT NULL,
  category_name varchar(255) NOT NULL,
  PRIMARY KEY (item_id,category_name),
  KEY FKbu2i0vkvo3vjkpqc6iy0jo1gn (category_name)
);

-- Table structure for table `item_nutrition_profile`
DROP TABLE IF EXISTS item_nutrition_profile;
CREATE TABLE item_nutrition_profile (
  item_id bigint(20) NOT NULL,
  nutrient_content double DEFAULT NULL,
  nutrition_profile_key varchar(255) NOT NULL,
  PRIMARY KEY (item_id,nutrition_profile_key)
);

-- Table structure for table `meal`

DROP TABLE IF EXISTS meal;
CREATE TABLE meal (
  meal_id bigint(20) NOT NULL,
  portion double NOT NULL,
  item_id bigint(20) DEFAULT NULL,
  optimization_type varchar(255) DEFAULT NULL,
  order_id bigint(20) DEFAULT NULL,
  PRIMARY KEY (meal_id),
  KEY FK7tx1q4t100e3c50slc25wu5sq (item_id),
  KEY FKciw30rd581axna9hu852yw3uc (optimization_type,order_id)
);

-- Table structure for table `orders`

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  optimization_type varchar(255) NOT NULL,
  order_id bigint(20) NOT NULL,
  date_of_delivery date DEFAULT NULL,
  placed_at date DEFAULT NULL,
  username VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (optimization_type,order_id),
  KEY FKel9kyl84ego2otj2accfd8mr7 (username)
);

-- Table structure for table `quantity`

DROP TABLE IF EXISTS quantity;
CREATE TABLE quantity (
  id int(11) NOT NULL,
  amount double DEFAULT NULL,
  measure varchar(255) DEFAULT NULL,
  ingredient_id int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKld5x15p316ca8hb42amyn85ma (ingredient_id)
);

-- Table structure for table `recipe`

DROP TABLE IF EXISTS recipe;
CREATE TABLE recipe (
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  tutorial_path varchar(255) NOT NULL,
  PRIMARY KEY (name)
);

-- Table structure for table `nutrients`

DROP TABLE IF EXISTS nutrients;
CREATE TABLE nutrients(
    nutrient_id BIGINT NOT NULL,
    nutrient_max_limit INTEGER CHECK ((nutrient_max_limit >= 1)
    AND (nutrient_max_limit <= 10000)),
    nutrient_min_limit INTEGER CHECK ((nutrient_min_limit >= 1)
    AND (nutrient_min_limit <= 10000)),
    nutrient_name VARCHAR(255)
);