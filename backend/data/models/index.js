const Creator = require('./Creator');
const Business = require('./Business');
const CreatorInsight = require('./CreatorInsight');
const Keyword = require('./Keyword');

Creator.hasMany(CreatorInsight);
CreatorInsight.belongsTo(Creator);

module.exports = {
  Creator,
  Business,
  CreatorInsight,
  Keyword
};
