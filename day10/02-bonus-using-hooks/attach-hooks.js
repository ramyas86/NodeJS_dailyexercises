const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Post = require('./models/post')

Post.addHook('beforeUpdate', (post, options) => {
  console.log('Before updating a post:', post)
})

async function createAndUpdatePost() {
  await sequelize.sync()

  const post = await Post.create({ title: 'First Post', content: 'This is my first post!' })
  console.log('Post created:', post.toJSON())

  post.title = 'Updated Post Title'
  await post.save()
  console.log('Post updated:', post.toJSON())

  await sequelize.close()
}

createAndUpdatePost();