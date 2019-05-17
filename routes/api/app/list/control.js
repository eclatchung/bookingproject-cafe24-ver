const models = require('../../../../models');


exports.sort = (req,res)=>{

    let addr1 = req.body.addr1;
    let sort = req.body.sort;

    models.store.findAll({
        where : {
            addr1 : addr1,
            sort : sort
    },
    attributes : ['store_id', 'store_name' , 'addr2']
}).then((store)=>{
        res.json(store);
    }).catch(err=>{console.log(err);})
}