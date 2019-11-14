// DB Stuff
const connection = require("./connection");
const syncAndSeed = require("./syncAndSeed");

// Models
const { User } = require("./models");

module.exports = {
  connection,
  models: {
    User
  },
  syncAndSeed
};
