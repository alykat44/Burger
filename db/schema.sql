CREATE DATABASE burgers2_db;
USE burgers2_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100)NOT NULL,
devoured BOOLEAN DEFAULT TRUE,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);