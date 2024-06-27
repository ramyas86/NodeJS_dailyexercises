CREATE USER 'apiuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'apiuser'@'localhost';

CREATE DATABASE test_db;
USE test_db;
CREATE TABLE users (name VARCHAR(255), address VARCHAR(255));