var express = require('express');
var router = express.Router();
var auth = require("./auth");
var reserve = require('./reserve');

router.use('/auth',auth);
router.use('/reserve',reserve)

module.exports = router;
