const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'apiuser',
  password: 'password1',
  database: 'test_db'
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:');
    //   console.error('Error connecting to the database:', err.message)
    
      // Additional error handling logic
      return
    }
    console.log('Connected to the database')
  })