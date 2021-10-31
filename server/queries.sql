-- create database
CREATE DATABASE devarticles;

-- create tables
-- users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    firstname TEXT NOT NULL,
    secondname TEXT NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    regisrationdate DATE NOT NULL,
    password VARCHAR(20) NOT NULL
);

