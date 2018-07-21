DROP DATABASE IF EXISTS storyboardDb;
CREATE DATABASE storyboardDB;

USE storyboardDB;

CREATE TABLE user (
	id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(30) NULL,
    lastname VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
    );
    
USE storyboardDB;

CREATE TABLE story (
	characterlist VARCHAR(30) NULL,
    imageurl VARCHAR(30) NULL,
    story VARCHAR(300) NULL,
    date TIMESTAMP);
    
    
SELECT * FROM user;
SELECT * FROM story;
    
