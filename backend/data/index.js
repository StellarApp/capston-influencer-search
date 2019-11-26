// DB Stuff
const connection = require('./connection');
const sync = require('./sync');

// Models
const { User, Business } = require('./models');

module.exports = {
  connection,
  models: {
    User,
    Business
  },
  sync
};
