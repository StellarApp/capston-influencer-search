const router = require("express").Router();
const { Creator } = require("../../data/models");
const { syncUserInsight } = require("../../utilites/syncInsight");

router.post("/", (req, res, next) => {
  const { token, user } = req.body;
  if (user) {
    Creator.authenticate(user)
      .then(creator => {
        // get instagram insight
        const { instagramId } = creator[0];
        syncUserInsight(instagramId, token);
        res.send(creator);
      })
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
