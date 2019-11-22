const router = require('express').Router();

/* linkedin authorization */
router.use('/linkedin', require('./linkedin'));

/* facebook authorization */
router.use('/facebook', require('./facebook'));

module.exports = router;
