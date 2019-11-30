const router = require("express").Router();
const { User } = require("../../data/models");

/* creator list */

// get all the creators
router.get("/", (req, res, next) => {
  const user = req.body;
  if (user) {
    User.findAll()
      .then(users => {
        res.send(users);
      })
      .catch(next);
  }
});

module.exports = router;
