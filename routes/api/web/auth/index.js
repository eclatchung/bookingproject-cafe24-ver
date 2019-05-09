
var express = require('express');
var router = express.Router();
var control = require("./control");
const {passport} = require('./control');
var model = require('../../../../models')
const Store = model.Store

router.get('/login',(req,res)=>{
    res.render('login.html');
    console.log('/api/web/auth/login')
})

router.post('/login',(req,res)=>{
    passport.authenticate('web-login',(req,res,err)=>{
        console.log('passport authenticate call')
        if(err) res.json(err);
        else{
            res.json({success:'true'})
            console.log("passport success")
            res.render('mypage.html')
        }
    }),
    console.log("POST LOGIN>>>")
});

module.exports = router;
