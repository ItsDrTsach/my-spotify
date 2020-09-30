const router = require('express').Router();

//expose v1
router.use('/v1', require('./v1'));

module.exports = router;
