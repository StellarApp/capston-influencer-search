const connection = require('../connection');
const { Sequelize } = connection;
const { UUID, UUIDV4, STRING, VIRTUAL } = Sequelize;

const Business = connection.define('business', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  fullName: {
    type: VIRTUAL,
    get() {
      const fullName = `${this.get('firstName')} ${this.get('lastName')}`;
      return fullName;
    }
  },
  linkedInId: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: STRING
  }
});

Business.authenticate = function(user) {
  return Business.findOrCreate({
    where: { linkedInId: user.linkedInId },
    defaults: user
  });
};

module.exports = Business;
