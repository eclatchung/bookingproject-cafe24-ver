var express = require('express');
var router = express.Router();


router.get('/mypage/:store_id',(req,res)=>{
    let store_id = req.params.store_id;

    res.render('mypage'+store_id +'.hbs')
})


module.exports = router;
