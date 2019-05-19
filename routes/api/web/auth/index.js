
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login',(req,res)=>{
    res.render('login.hbs');
    console.log('/api/web/auth/login');
    
  
})

router.post('/login',function(req,res,next){passport.authenticate('web-login',{
    session : false,
    successRedirect : '/api/web/reserve/mypage/'+ req.body.store_id,
    failureRedirect: '/api/web/auth/login'
    })(req,res,next)});

module.exports = router;
