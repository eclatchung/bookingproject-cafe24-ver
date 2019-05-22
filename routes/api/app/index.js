var express = require('express');
var router = express.Router();
var auth = require("./auth");
var list = require('./list');
var book = require('./book');


router.use('/auth',auth);
router.use('/list',list);
router.use('/book',book);

module.exports = router;
