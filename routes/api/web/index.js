var express = require('express');
var router = express.Router();
var auth = require("./auth");


router.use('/auth',auth);
router.get('/mypage',(req,res,err)=>{
    res.render('mypage.hbs');
})

module.exports = router;
