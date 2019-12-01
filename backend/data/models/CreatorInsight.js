const connection = require("../connection");
const { Sequelize } = connection;
const { STRING, UUID, UUIDV4, VIRTUAL } = Sequelize;

const CreatorInsight = connection.define("creatorInsight", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  igUserName: {
    type: STRING,
    allowNull: true,
    validate: {
      len: [1, 255]
    }
  },
  instagramId: {
    type: STRING,
    allowNull: true
  },
  biography: {
    type: STRING,
    allowNull: true
  },
  profilePictureUrl: {
    type: STRING
  },
  followersCount: {
    type: Number
  },
  followsCount: {
    type: Number
  },
  mediaCount: {
    type: Number
  }
});
module.exports = CreatorInsight;
