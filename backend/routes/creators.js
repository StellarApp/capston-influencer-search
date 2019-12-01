const express = require('express');
const jwt = require('jwt-simple');

const{Creator}=require('../data/models');
const router = express.Router();
router.use(express.json());

router.get('/:id', (req, res, next)=>{
    Creator.findOne({where: {id: req.params.id} })
    .then((creator) => res.send(creator))
    .catch(next);
});

router.delete('/:id', (req, res, next)=>{
    const { id } = req.params;
    console.log({ deleting: id })
    Creator.findByPk(id)
        .then((creator) => creator.destroy())
        .then(() => res.sendStatus(204))
        .catch(next);
});

router.post('/', (req, res, next) => {
    const {creator} = req.body;
    Creator.create(creator)
        .then((newCreator) => res.status(201).send(newCreator))
        .catch(next);
});

module.exports = router;