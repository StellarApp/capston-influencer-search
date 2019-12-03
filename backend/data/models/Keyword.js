const connection = require('../connection');
const { Sequelize } = connection;
const { STRING } = Sequelize;

const Keyword = connection.define('keyword', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Keyword;
