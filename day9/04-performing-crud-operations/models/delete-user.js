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

async function deleteUser() {
  await sequelize.sync()

  const user = await User.findOne({ where: { email: 'jane.doe@example.com' } })
  if (user) {
    await user.destroy()
    console.log('User deleted')
  }

  await sequelize.close()
}

deleteUser()