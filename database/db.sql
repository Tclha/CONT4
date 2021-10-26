drop database db_forum;
create database db_forum;
alter user 'root'@'localhost' identified with mysql_native_password by '';

use db_forum;

create table post (
    Poster varchar(255),
    Post text
);

insert into post
values ('Test User', 'Test post');