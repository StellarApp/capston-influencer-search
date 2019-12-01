const connection = require('../connection');
const dotenv = require('dotenv').config();
const axios = require('axios');
const { Sequelize } = connection;
const { STRING, UUID, UUIDV4, VIRTUAL } = Sequelize;

const Creator = connection.define(
  'creator',
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    firstName: {
      type: STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    lastName: {
      type: STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255],
        isEmail: true,
      },
    },
    igUserName:{
      type: STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    fullName: {
      type: VIRTUAL,
      get() {
        const fullName = `${this.get('firstName')} ${this.get('lastName')}`;
        return fullName;
      },
    },
    facebookId: {
      type: STRING,
      allowNull: true,
    },
    instagramId: {
      type: STRING,
      allowNull: true,
    },
    imageUrl: {
      type: STRING
    }
  }
);

Creator.authenticate = function (user) {
  return Creator.findOrCreate({
    where: { facebookId: user.facebookId },
    defaults: user
  });
};

module.exports = Creator;
