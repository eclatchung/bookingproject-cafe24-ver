var express = require('express');
var router = express.Router();
var control = require('./control');


router.post('/menu',control.menu);
router.post('/showtime',control.showtime);

module.exports = router;
