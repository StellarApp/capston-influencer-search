const express = require('express');
const router = express.Router();
const { Collection } = require('../data').models;

router.use(express.json());

router.get('/:businessId/', (req, res, next) => {
    const {businessId} = req.params;
    Collection.findByBusinessId(businessId)
    .then(collections => {
      res.send(collections );
    })
    .catch(next);
});

// delete a collection item
router.delete('/:collectionId', (req, res, next) => {
  const { collectionId } = req.params;
  Collection.findByPK(collectionId)
    .then(collectionItem => collectionItem.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
