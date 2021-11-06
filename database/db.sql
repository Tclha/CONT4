DROP DATABASE db_forum;
CREATE DATABASE db_forum;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'cont4';

USE db_forum;

CREATE TABLE post (
    Poster varchar(255),
    FavFood varchar(255),
    Post text
);
