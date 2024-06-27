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
  
    const sql = 'UPDATE users SET email = ? WHERE name = ?'
    const values = ['john.new@example.com', 'John Doe']
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error executing query:', err.stack)
        return
      }
      console.log('Update results:', results)
    })
  
    connection.end()
  })