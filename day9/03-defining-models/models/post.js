const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('test_db1', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

// Define associations
const User = require('./user')
User.hasMany(Post)
Post.belongsTo(User)

// Sync the models with the database
async function syncModels() {
  await sequelize.sync()
  console.log('Models were synchronized successfully.')
}

syncModels();

module.exports = Post;