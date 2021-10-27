DROP DATABASE db_forum;
CREATE DATABSE db_forum;
SET PASSWORD FOR 'root'@localhost = PASSWORD("");

USE db_forum;

CREATE TABLE post (
    Poster varchar(255),
    Post text
);
