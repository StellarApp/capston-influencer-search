const express = require('express');
const router = express.Router();
const { Collection } = require('../data').models;

router.use(express.json());

router.get('/:businessId/collections', (req, res, next) => {
    const {businessId} = req.params;
    Collection.findByBusinessId(businessId)
    .then(collections => {
      res.send(collections );
    })
    .catch(next);
});

// delete a collection item
router.delete('/:businessId/collections/:creatorId', (req, res, next) => {
  const { businessId, creatorId } = req.params;
  Collection.findByCreatorId(businessId, creatorId)
    .then(collectionItem => collectionItem.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
