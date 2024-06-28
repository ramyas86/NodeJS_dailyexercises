const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('test_db1', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('User', {
  // Model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
      }
  }
})

// Sync the model with the database
async function syncModel() {
  await User.sync()
  console.log('User model was synchronized successfully.')
}

syncModel()

module.exports = User;