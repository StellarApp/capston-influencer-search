const router = require("express").Router();
const { Creator } = require('../data').models;
/* creator list */

// get all the creators
router.get("/", (req, res, next) => {
  // request basic user information from creator's data table
  // api request need to be created for the ig insight 
  // const {location, gender} = req.body
  Creator.findAll()
  .then(creators => {
      res.send(creators);
    })
    .catch(next);
});

module.exports = router;
