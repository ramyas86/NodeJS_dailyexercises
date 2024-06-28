const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (post, options) => {
        console.log('Before creating a post:', post)
      },
      afterCreate: (post, options) => {
        console.log('After creating a post:', post)
      }
    }
  })
  
  module.exports = Post