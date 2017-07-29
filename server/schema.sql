DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  text text,
  username text,
  roomname text,
  createdAt timestamp
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username text
);

-- CREATE TABLE rooms (
--   id int PRIMARY KEY AUTO_INCREMENT,
--   name text
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

