INSERT INTO "PUBLIC"."ROLE" VALUES
(1, 'ROLE_USER');         
INSERT INTO "PUBLIC"."USER" VALUES
(2, 'harry.potter@gmail.com', '$2a$10$uyrPNYEZ2x7lsWSkzFtmRugA3ylG8c8oONz/N70FhffVBAd72.qj6', 'VEGAN', 'hp');
INSERT INTO "PUBLIC"."USER_NUTRIENT_MAX_LIMITS" VALUES
(2, 5000, 'sodium'),
(2, 5000, 'calcium'),
(2, 500, 'carbs'),
(2, 200, 'protein'),
(2, 80, 'fat'),
(2, 2400, 'calories');        
INSERT INTO "PUBLIC"."USER_NUTRIENT_MIN_LIMITS" VALUES
(2, 30, 'sodium'),
(2, 100, 'calcium'),
(2, 105, 'carbs'),
(2, 20, 'protein'),
(2, 5, 'fat'),
(2, 2000, 'calories');             
INSERT INTO "PUBLIC"."USER_ROLES" VALUES
(2, 1);