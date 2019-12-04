const router = require('express').Router();
const { Creator } = require('../../data').models;
const { syncUserInsight } = require('../../utilites/syncInsight');

router.post('/', (req, res, next) => {
  const { token, user } = req.body;
  if (user) {
    Creator.authenticate(user)
      .spread((creator, isNewCreator) => {
        const { instagramId, id } = creator;

        if (isNewCreator) {
          syncUserInsight(instagramId, id, token);
        }
        creator.isNew = isNewCreator;

        res.send(creator);
      })
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
