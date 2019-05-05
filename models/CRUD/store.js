
var models = require('../../models');
const Store = models.Store;

exports.findOne = (req,res)=>{
    //for passport
    Store.findOne({
        where : {
            $and :
             [{store_id : req.body.store_id},
             {store_psw : req.body.store_psw}]}})
    .then((store)=>{
        console.log("Sucess_ FINDONE at Store CRUD",
        res.json(store)
        )})
    .catch((err)=>{
        console.log("ERROR _ FINDONE at Store CRUD",
        res.json(err)
        )});
}