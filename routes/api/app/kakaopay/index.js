var express = require('express');
var router = express.Router();
var control = require('./control');

router.post('/kakaoready',control.kakaoready);
router.post('/approval',control.approval);
router.post('/cancel',control.cancel);
router.post('/fail',control.fail);

module.exports = router;