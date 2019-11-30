// DB Stuff
const connection = require('./connection');
const sync = require('./sync');

// Models
const { Creator, Business } = require('./models');

module.exports = {
  connection,
  models: {
    Creator,
    Business
  },
  sync
};
