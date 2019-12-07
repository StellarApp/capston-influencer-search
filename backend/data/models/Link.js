const connection = require('../connection');
const { Sequelize } = connection;
const { STRING } = Sequelize;

const Link = connection.define('creatorLink', {
  youtube: {
    type: STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  twitter: {
    type: STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  website: {
    type: STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Link;
