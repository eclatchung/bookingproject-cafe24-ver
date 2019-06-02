var express = require('express');
var router = express.Router();
var control = require('./control');
var controlSave = require('./save')

router.post('/menu',control.menu);
router.post('/showtime',control.showtime);
router.post('/save',controlSave.save,control.socket);

module.exports = router;
