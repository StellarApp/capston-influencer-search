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

// find all the collection under a business user
Collection.findByBusinessId = function(businessId) {
  return this.findAll({
    where: {
      businessId
    }
  });
};

module.exports = Collection;
