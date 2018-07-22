DROP DATABASE IF EXISTS storyboardDb;
CREATE DATABASE storyboardDB;


SET SESSION innodb_strict_mode = ON;
SET GLOBAL innodb_file_format = "Barracuda";
SET GLOBAL innodb_file_per_table=1;
USE storyboardDB;

CREATE TABLE user (
	id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(30) NULL,
    lastname VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)

    )ENGINE=InnoDB;

    
USE storyboardDB;

CREATE TABLE story (
	characterlist VARCHAR(30) NULL,
    imageurl VARCHAR(30) NULL,
    story VARCHAR(300) NULL,

    date TIMESTAMP) ENGINE=InnoDB;

    


ALTER TABLE story ROW_FORMAT=COMPRESSED, KEY_BLOCK_SIZE=8;
ALTER TABLE user ROW_FORMAT=COMPRESSED, KEY_BLOCK_SIZE=8;
    


SELECT * FROM user;
SELECT * FROM story;
    
