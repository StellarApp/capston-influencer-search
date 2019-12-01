const connection = require("../connection");
const { Sequelize } = connection;
const { STRING, UUID, UUIDV4, INTEGER } = Sequelize;

const CreatorInsight = connection.define("creatorInsight", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  igName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  biography: {
    type: STRING,
    allowNull: true
  },
  profilePictureUrl: {
    type: STRING
  },
  followersCount: {
    type: INTEGER,
    allowNull: false
  },
  followsCount: {
    type: INTEGER,
    allowNull: false
  },
  mediaCount: {
    type: INTEGER,
    allowNull: false
  }
});
module.exports = CreatorInsight;
