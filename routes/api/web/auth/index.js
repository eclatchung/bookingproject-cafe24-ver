
var express = require('express');
var router = express.Router();
var control = require("./control");
const {passport} = require('./control');
var model = require('../../../../models')
const Store = model.Store

router.get('/login',(res)=>{
    res.render("login.html");
})

router.post('/login',(req,res)=>{
    passport.authenticate('local',(err,auth,info)=>{
        if(err) console.log(err); 
        if(store) console.log(store+"\n passport autherticate");
        if(!store) console.log("no match");
    })
});

module.exports = router;
