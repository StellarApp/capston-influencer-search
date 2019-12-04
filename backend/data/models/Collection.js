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
Collection.findByBusinessId = function(businessId){
  return this.findAll({
    where: {
      businessId
    }
  })
}

// find a collection (creator) under a business user
Collection.findByCreatorId = function(businessId, creatorId){
  return this.findOne({
    where: {
      businessId,
      creatorId
    }
  })
}


module.exports = Collection;
