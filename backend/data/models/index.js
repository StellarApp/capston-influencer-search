const Creator = require("./Creator");
const Business = require("./Business");
const CreatorInsight = require("./CreatorInsight");
Creator.hasMany(CreatorInsight);
CreatorInsight.belongsTo(Creator);

module.exports = {
  Creator,
  Business,
  CreatorInsight
};
