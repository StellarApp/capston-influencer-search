const express = require('express');
const router = express.Router();
const { Creator, CreatorInsight, Interest, Link } = require('../data').models;

router.get('/', (req, res, next) => {
  Creator.findAll({
    include: [{ model: CreatorInsight }, { model: Interest }, { model: Link }]
  })
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

router.post('/:id/links', (req, res, next) => {
  const creatorId = req.params.id;
  const { links } = req.body;

  Link.create({ ...links, creatorId })
    .then(creatorLinks => {
      res.send(creatorLinks);
    })
    .catch(next);
});

module.exports = router;
