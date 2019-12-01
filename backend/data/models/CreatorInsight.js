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
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  instagramId: {
    type: STRING,
    allowNull: false
  },
  biography: {
    type: STRING,
    allowNull: true
  },
  profilePictureUrl: {
    type: STRING
  },
  followersCount: {
    type: Number,
    allowNull: false
  },
  followsCount: {
    type: Number,
    allowNull: false
  },
  mediaCount: {
    type: Number,
    allowNull: false
  }
});
module.exports = CreatorInsight;
