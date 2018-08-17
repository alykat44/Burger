

CREATE TABLE burgers (
id INTEGER(15) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100)NOT NULL,
devoured TINYINT(1) NOT NULL DEFAULT 0,
date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Bacon Double Cheesburger", true, now());

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Jalepeno Burger", false, now());

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Kitchen Sink Burger", true, now()); 

SELECT * FROM burgers;
