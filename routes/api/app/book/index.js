var express = require('express');
var router = express.Router();
var control = require('./control');


router.post('/menu',control.menu);

module.exports = router;
