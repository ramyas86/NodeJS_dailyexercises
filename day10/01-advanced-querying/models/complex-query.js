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

async function complexQuery() {
  await sequelize.sync()

  const posts = await Post.findAll({
    where: {
      title: {
        [Sequelize.Op.like]: '%Post%'
      }
    },
    order: [
      ['title', 'ASC']
    ],
    limit: 2,
    offset: 1
  })
  console.log('Complex query result:', JSON.stringify(posts, null, 2))

  await sequelize.close()
}

complexQuery()