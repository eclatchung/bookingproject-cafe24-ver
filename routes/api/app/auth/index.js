
var express = require('express');
var router = express.Router();
var passport = require('passport');
var control = require('./control');



router.post('/login',passport.authenticate('app-login',{
    session : false
}))

router.post('/register',control.register);

module.exports = router;
