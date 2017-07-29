DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  message text,
  user_id int REFERENCES users(id),
  room_id int REFERENCES rooms(id),
  createdAt timestamp
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name text
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  name text
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

