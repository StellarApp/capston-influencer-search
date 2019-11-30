const router = require("express").Router();
const { Creator } = require("../../data/models");

router.post("/", (req, res, next) => {
  const user = req.body;
  if (user) {
    Creator.authenticate(user)
      .then(creator => {
        res.send(creator);
      })
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
