var express = require('express');
var router = express.Router();
var auth = require("./auth");
var list = require('./list');
var book = require('./book');
var kakaopay = require('./kakaopay');

router.use('/auth',auth);
router.use('/list',list);
router.use('/book',book);
router.use('/kakaopay',kakaopay);

module.exports = router;
