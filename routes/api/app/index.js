var express = require('express');
var router = express.Router();
var auth = require("./auth");
var list = require('./list');


router.use('/auth',auth);
router.use('/list',list);


module.exports = router;
