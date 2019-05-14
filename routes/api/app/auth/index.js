
var express = require('express');
var router = express.Router();
var passport = require('passport');
var control = require('./control');



router.post('/login',passport.authenticate('app-login',{
    session : false
}),function(req,res){
    res.json({ status : true,
        success : true })
})

router.post('/register',control.register);

module.exports = router;
