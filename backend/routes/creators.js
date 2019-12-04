const express = require('express');
const router = express.Router();
const { Creator, CreatorInsight } = require('../data').models;

router.use(express.json());

router.get('/', (req, res, next) => {
  Creator.findAll({ include: [{ model: CreatorInsight }] })
    .then(creators => {
      res.send(creators);
    })
    .catch(next);
});

// delete from business user's collection
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Creator.findByPk(id)
    .then(creator => creator.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
