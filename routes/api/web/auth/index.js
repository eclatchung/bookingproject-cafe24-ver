
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
    passport.authenticate('local',(err,auth,info)=>{
        if(err) console.log(err); 
        if(store) console.log(store+"\n passport autherticate");
        if(!store) console.log("no match");
    }),
    console.log("POST LOGIN>>>")
});

module.exports = router;
