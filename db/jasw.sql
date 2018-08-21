USE n3iwa6zbqinfyg27;



CREATE TABLE   burgers (
id INTEGER(100) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100)NOT NULL,
devoured BOOLEAN DEFAULT false,
date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);



INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Bacon Double Cheesburger", true, now());

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Jalepeno Burger", false, now());

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Kitchen Sink Burger", true, now()); 

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("Bluecheese Burger", true, now()); 
