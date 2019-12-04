const connection = require("../connection");
const { Sequelize } = connection;
const { UUID, UUIDV4 } = Sequelize;

const Collection = connection.define("collection", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  }
});

module.exports = Collection;
