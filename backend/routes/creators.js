const router = require("express").Router();
const { Creator } = require('../data').models;

router.use(express.json());

/* creator list */

// get request for all creator list
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

//get request for business user's collection
router.get('/:id', (req, res, next)=>{
    Creator.findOne({where: {id: req.params.id} })
    .then((creator) => res.send(creator))
    .catch(next);
});

// delete from business user's collection
router.delete('/:id', (req, res, next)=>{
    const { id } = req.params;
    Creator.findByPk(id)
        .then((creator) => creator.destroy())
        .then(() => res.sendStatus(204))
        .catch(next);
});

// need put function

module.exports = router;
