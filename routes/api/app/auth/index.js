
var express = require('express');
var router = express.Router();
var control = require("./control");
const {passport} = require('./control');
var model = require('../../../../models')
const Member = model.Member

router.get('/login',(req,res)=>{
    console.log('/api/app/auth/login')
})

router.post('/login',(req,res)=>{
    passport.authenticate('local',(err,auth,info)=>{
        if(err) console.log(err); 
        if(member) console.log(member+"\n passport autherticate in APP");
        if(!member) console.log("no match in APP");
    })
});

module.exports = router;
