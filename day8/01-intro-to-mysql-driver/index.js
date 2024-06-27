/* CREATE USER 'apiuser'@'localhost' IDENTIFIED BY 'password';
 GRANT ALL PRIVILEGES ON *.* TO 'apiuser'@'localhost';
 CREATE DATABASE test_db;
USE test_db;
CREATE TABLE users (name VARCHAR(255), address VARCHAR(255)) */

const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'apiuser',
  password: 'password',
  database: 'test_db'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack)
    return
  }
  console.log('Connected to the database')
})

