CREATE TABLE cats (
    id serial PRIMARY KEY,
    name varchar(300) NOT NULL CHECK (name != ''),
    breed varchar(300),
    color varchar (300),
    age int NOT NULL CHECK (age > 0),
    weight numeric(3,1) CHECK (weight > 0),
    favorite text
);

INSERT INTO cats (name, breed, color, age, weight, favorite)
VALUES (
    'Murzik',
    'british',
    'grey',
    3,
    7,
    'Tuna'
  );