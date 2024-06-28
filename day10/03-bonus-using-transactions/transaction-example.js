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

User.hasMany(Post)
Post.belongsTo(User)

async function createUserAndPosts() {
  const transaction = await sequelize.transaction()

  try {
    const user = await User.create({ name: 'John Doe', email: 'john.doe@example.com' }, { transaction })
    await Post.create({ title: 'First Post', content: 'This is my first post!', UserId: user.id }, { transaction })

    await transaction.commit()
    console.log('Transaction committed successfully.')
  } catch (error) {
    await transaction.rollback()
    console.error('Transaction rolled back due to an error:', error)
  } finally {
    await sequelize.close()
  }
}

createUserAndPosts()