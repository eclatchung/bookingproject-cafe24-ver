
var express = require('express');
var router = express.Router();
var control = require('./control');

router.post('/sort',control.sort);
router.post('/search',control.search);
router.post('/home',control.home);




module.exports = router;