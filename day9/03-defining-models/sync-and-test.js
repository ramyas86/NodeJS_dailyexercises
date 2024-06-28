const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('test_db1', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = require('./models/user')
const Post = require('./models/post')

async function syncAndTest() {
  try {
    await sequelize.sync({ force: true }) // This will drop and recreate the tables
    console.log('Models synchronized successfully.')

    const user = await User.create({ name: 'John Doe', email: 'john.doe@example.com' })
    console.log('User created:', user.toJSON())

    const post1 = await Post.create({ title: 'First Post', content: 'This is my first post!', UserId: user.id })
    console.log('Post created:', post1.toJSON())

    const post2 = await Post.create({ title: 'Second Post', content: 'This is my second post!', UserId: user.id })
    console.log('Post created:', post2.toJSON())

    const post3 = await Post.create({ title: 'Third Post', content: 'This is my third post!', UserId: user.id })
    console.log('Post created:', post3.toJSON())

    const posts = await User.findOne({ where: { id: user.id }, include: Post })
    console.log('User with posts:', JSON.stringify(posts, null, 2))
  } catch (error) {
    console.error('Error syncing or testing models:', error)
  } finally {
    await sequelize.close()
  }
}

syncAndTest()