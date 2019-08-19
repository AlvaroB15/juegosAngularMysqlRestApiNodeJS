CREATE DATABASE juego;

USE juego;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (200),
    descripcion VARCHAR(256),
    imagen VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

RENAME TABLE game to games;

DESCRIBE games;