const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('test_db1', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

async function readUsers() {
  await sequelize.sync()

  const users = await User.findAll()
  console.log('All users:', JSON.stringify(users, null, 2))

  await sequelize.close()
}

readUsers()