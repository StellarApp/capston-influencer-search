const router = require("express").Router();
const { User } = require("../../data/models");

/* facebook authorization */
router.get("/add", (req, res, next) => {
  console.log(req.body);

  const { user } = req.body;

  if (user) {
    User.Create(user)
      .then(newUser => res.send(newUser.data))
      .catch(ex => console.log(ex));
  }
});

module.exports = router;
