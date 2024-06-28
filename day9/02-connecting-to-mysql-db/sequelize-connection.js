const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test_db', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000
  }
})

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testConnection()