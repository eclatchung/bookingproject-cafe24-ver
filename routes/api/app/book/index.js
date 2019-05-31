var express = require('express');
var router = express.Router();
var control = require('./control');


router.post('/menu',control.menu);
router.post('/showtime',control.showtime);
//router.post('/save',control.save);

module.exports = router;
