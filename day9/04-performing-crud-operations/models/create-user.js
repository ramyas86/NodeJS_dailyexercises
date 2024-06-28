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

async function createUser() {
  await sequelize.sync()

  const user = await User.create({ name: 'Jane Doe', email: 'jane.doe@example.com' })
  console.log('User created:', user.toJSON())

  await sequelize.close()
}

createUser()