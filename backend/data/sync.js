const connection = require('./connection');
const sync = async (force = false) => {
  await connection.sync({ force });
};

module.exports = sync;
