const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'apiuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;