var express = require('express');
var router = express.Router();
var control = require('./control')

router.get('/mypage/:store_id',(req,res)=>{
    let store_id = req.params.store_id;

    res.render('mypage'+store_id +'.hbs',{store_id : store_id})
})

router.post('/restart',control.restart)
router.post('/stop',control.stop)

module.exports = router;
