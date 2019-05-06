
var express = require('express');
var router = express.Router();
var web = require("./web");
var app = require('./app');

router.use('/web',web);
router.use('/app',app);

module.exports = router;
