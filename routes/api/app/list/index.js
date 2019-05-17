
var express = require('express');
var router = express.Router();
var control = require('./control');

router.post('/sort',control.sort);




module.exports = router;