const connection = require('../connection');
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
    fullName: {
      type: VIRTUAL,
      get() {
        const fullName = `${this.get('firstName')} ${this.get('lastName')}`;
        return fullName;
      },
    },
    facebookId: {
      type: STRING
    },
    instagramId: {
      type: STRING,
      allowNull: true,
    },
    imageUrl: {
      type: STRING
    },
    description: {
      type: STRING,
      allowNull: true,
    },
    gender: {
      type: STRING,
      allowNull: true,
    },
    location: {
      type: STRING,
      allowNull: true,
    },
  }
);

Creator.authenticate = function (user) {
  return Creator.findOrCreate({
    where: { facebookId: user.facebookId },
    defaults: user
  });
};

module.exports = Creator;
