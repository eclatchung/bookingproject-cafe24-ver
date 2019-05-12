
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login',(req,res)=>{
    res.render('login.hbs');
    console.log('/api/web/auth/login');
    
  
})

router.post('/login',passport.authenticate('web-login',{
    session : false,
    successRedirect : '/api/web/mypage',
    failureRedirect: '/api/web/auth/login'
    }));

module.exports = router;
