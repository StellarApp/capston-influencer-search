const router = require('express').Router();
const { Creator, CreatorInsight } = require('../../data').models;
const { syncUserInsight } = require('../../utilites/syncInsight');

router.post('/', async (req, res, next) => {
  const { token, user } = req.body;
  if (user) {
    try {
      const [creator, isNewCreator] = await Creator.authenticate(user);
      const { instagramId, id } = creator;

      if (isNewCreator) {
        await syncUserInsight(instagramId, id, token);
      }

      const creatorWithInsights = await Creator.findOne({
        include: [{ model: CreatorInsight }],
        where: { id }
      });

      res.send({
        ...creatorWithInsights.dataValues,
        isNew: isNewCreator
      });
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
