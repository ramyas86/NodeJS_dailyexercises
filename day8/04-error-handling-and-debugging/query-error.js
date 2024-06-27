const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'apiuser',
  password: 'password',
  database: 'test_db'
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.message)
      return
    }
    console.log('Connected to the database')
  
    const sql = 'SELECT * FROM non_existing_table'
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing query:', err.message)
        // Additional error handling logic
        return
      }
      console.log('Query results:', results)
    })
  
    connection.end()
  })