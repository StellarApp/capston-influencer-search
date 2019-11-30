const router = require("express").Router();
const { Creator } = require("../../data/models");

router.post("/", (req, res, next) => {
  const user = req.body;
  if (user) {
    Creator.findOrCreate({ where: { facebookId: user.facebookId }, defaults: user })
      .then(newUser => {
        res.send(newUser.data);
      })
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
