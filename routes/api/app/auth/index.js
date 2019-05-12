
var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/login',(req,res)=>{
    console.log('/api/app/auth/login')
})

router.post('/login',passport.authenticate('app-login',{
    session : false
}),function(req,res){
    res.json({ success : true})
})

module.exports = router;
