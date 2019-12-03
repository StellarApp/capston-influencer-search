const connection = require('./connection');
const seed = require('./seed');

const sync = async (force = false) => {
  await connection.sync({ force });

  if (force) {
    await seed();
  }
};

module.exports = sync;
