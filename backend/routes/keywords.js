const router = require('express').Router();
const { Keyword } = require('../data').models;

router.get('/', (req, res, next) => {
  Keyword.findAll()
    .then(keywords => res.send(keywords))
    .catch(next);
});

module.exports = router;
