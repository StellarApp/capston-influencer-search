const router = require("express").Router();
const { Creator } = require("../../data/models");

/* facebook authorization */

// save facebook user info to database
router.post("/add", (req, res, next) => {
  const user = req.body;
  if (user) {
    Creator.findOrCreate({ where: { email: user.email }, defaults: user })
      .then(newUser => {
        res.send(newUser.data);
      })
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
