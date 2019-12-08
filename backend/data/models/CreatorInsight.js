const connection = require('../connection');
const { Sequelize } = connection;
const { STRING, UUID, UUIDV4, INTEGER, DECIMAL } = Sequelize;

const CreatorInsight = connection.define('creatorInsight', {
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
  },
  totalLikes: {
    type: INTEGER
  },
  totalComments: {
    type: INTEGER
  },
  mostLikedPost: {
    type: Sequelize.JSON,
    get: function() {
      return JSON.parse(this.getDataValue('mostLikedPost'));
    },
    set: function(value) {
      this.setDataValue('mostLikedPost', JSON.stringify(value));
    }
  },
  mostCommentedPost: {
    type: Sequelize.JSON,
    get: function() {
      return JSON.parse(this.getDataValue('mostCommentedPost'));
    },
    set: function(value) {
      this.setDataValue('mostCommentedPost', JSON.stringify(value));
    }
  },
  mostEngagedPost: {
    type: Sequelize.JSON,
    get: function() {
      return JSON.parse(this.getDataValue('mostEngagedPost'));
    },
    set: function(value) {
      this.setDataValue('mostEngagedPost', JSON.stringify(value));
    }
  },
  engagementRate: { type: DECIMAL },
  audienceCity: {
    type: Sequelize.JSON,
    get: function() {
      return JSON.parse(this.getDataValue('audienceCity'));
    },
    set: function(value) {
      this.setDataValue('audienceCity', JSON.stringify(value));
    }
  },
  audienceGenderAge: {
    type: Sequelize.JSON,
    get: function() {
      return JSON.parse(this.getDataValue('audienceGenderAge'));
    },
    set: function(value) {
      this.setDataValue('audienceGenderAge', JSON.stringify(value));
    }
  }
});
module.exports = CreatorInsight;
