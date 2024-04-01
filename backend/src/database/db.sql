CREATE DATABASE tasksdb;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(250)  UNIQUE,
    description VARCHAR(250)
);
