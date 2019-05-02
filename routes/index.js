var express = require('express');
var router = express.Router();
//var api = require("./api");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
//router.use('/api',api);

module.exports = router;
