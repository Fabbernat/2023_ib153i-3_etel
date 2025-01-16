CREATE TABLE address (
    id serial PRIMARY KEY,
    city varchar(50) NOT NULL,
    zip int NOT NULL,
    add1 varchar(200) NOT NULL,
    add2 varchar(200)
);

CREATE TABLE users (
    username varchar(20) PRIMARY KEY,
    email varchar(200) UNIQUE NOT NULL,
    passHash varchar(100) NOT NULL,
    forename varchar(20) NOT NULL,
    surname varchar(20) NOT NULL,
    role varchar(20) NOT NULL
);

CREATE TABLE restaurant (
    id serial PRIMARY KEY,
    name varchar(200) NOT NULL,
    addressid int NOT NULL,
    monday varchar(50) NOT NULL DEFAULT 'Zárva',
    tuesday varchar(50) NOT NULL DEFAULT 'Zárva',
    wednesday varchar(50) NOT NULL DEFAULT 'Zárva',
    thursday varchar(50) NOT NULL DEFAULT 'Zárva',
    friday varchar(50) NOT NULL DEFAULT 'Zárva',
    saturday varchar(50) NOT NULL DEFAULT 'Zárva',
    sunday varchar(50) NOT NULL DEFAULT 'Zárva',
    FOREIGN KEY (addressid) REFERENCES address (id)
);

CREATE TABLE owner (
    username varchar(20) NOT NULL,
    restaurantid int NOT NULL,
    PRIMARY KEY (username, restaurantid),
    FOREIGN KEY (username) REFERENCES users (username),
    FOREIGN KEY (restaurantid) REFERENCES restaurant (id)
);

CREATE TABLE food (
    id serial PRIMARY KEY,
    restaurantid int NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(200),
    price int NOT NULL,
    tag varchar(200) NOT NULL, 
    FOREIGN KEY (restaurantid) REFERENCES restaurant (id)
);

CREATE TABLE userAddress (
    username varchar(20) NOT NULL,
    addressid int NOT NULL,
    PRIMARY KEY (username, addressid),
    FOREIGN KEY (username) REFERENCES users (username),
    FOREIGN KEY (addressid) REFERENCES address (id)
);

CREATE TABLE likedRestaurant (
    username varchar(20) NOT NULL,
    restaurantid int NOT NULL,
    PRIMARY KEY (username, restaurantid),
    FOREIGN KEY (username) REFERENCES users (username),
    FOREIGN KEY (restaurantid) REFERENCES restaurant (id)
);

CREATE TABLE cart (
    id serial PRIMARY KEY,
    username varchar(20) NOT NULL,
    type varchar(10) NOT NULL,
    FOREIGN KEY (username) REFERENCES users (username)
);

CREATE TABLE cartFood (
    cartid int NOT NULL,
    foodid int NOT NULL,
    amount int NOT NULL,
    PRIMARY KEY (cartid, foodid),
    FOREIGN KEY (cartid) REFERENCES cart (id),
    FOREIGN KEY (foodid) REFERENCES food (id)
);

CREATE TABLE orders (
    id serial PRIMARY KEY,
    cartid int NOT NULL,
    restaurantid int NOT NULL,
    addressid int NOT NULL,
    courierusername varchar(20),
    customerusername varchar(20) NOT NULL,
    status varchar(20) NOT NULL,
    FOREIGN KEY (cartid) REFERENCES cart (id),
    FOREIGN KEY (restaurantid) REFERENCES restaurant (id),
    FOREIGN KEY (addressid) REFERENCES address (id),
    FOREIGN KEY (customerusername) REFERENCES users (username)
);