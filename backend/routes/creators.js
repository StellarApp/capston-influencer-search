const express = require('express');
const router = express.Router();
const { Creator, CreatorInsight, Interest } = require('../data').models;

router.get('/', (req, res, next) => {
  Creator.findAll({ include: [{ model: CreatorInsight }] })
    .then(creators => {
      res.send(creators);
    })
    .catch(next);
});

router.post('/:id/interests', (req, res, next) => {
  const creatorId = req.params.id;
  const { interests } = req.body;

  Interest.bulkCreate(
    interests.map(interest => ({
      creatorId,
      keywordId: interest
    })),
    { returning: true }
  )
    .then(interests => {
      res.send(interests);
    })
    .catch(next);
});

module.exports = router;
