const router = require('express').Router();

/* linkedin authorization */
router.use('/linkedin', require('./linkedin'));

/* facebook authorization */
router.use('/facebook', require('./facebook'));

/* instagram authorization */
router.use('/instagram', require('./instagram'));

module.exports = router;
