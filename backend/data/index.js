// DB Stuff
const connection = require("./connection");
const syncAndSeed = require("./syncAndSeed");

// Models
const { User, Business } = require('./models');

module.exports = {
  connection,
  models: {
    User,
    Business
  },
  syncAndSeed
};
