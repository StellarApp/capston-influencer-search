const Creator = require('./Creator');
const Business = require('./Business');
const CreatorInsight = require('./CreatorInsight');
const Keyword = require('./Keyword');
const Collection = require('./Collection');

// Relationships
Creator.hasMany(CreatorInsight);
CreatorInsight.belongsTo(Creator);

Business.hasMany(Collection);
Collection.belongsTo(Business);

Creator.hasMany(Collection);
Collection.belongsTo(Creator);

module.exports = {
  Business,
  Collection,
  Creator,
  CreatorInsight,
  Keyword
};
