const Sequelize = require('sequelize');
const models = require('../../../../models');
const Op = Sequelize.Op;

exports.sort = (req,res)=>{

    let addr1 = req.body.addr1;
    let sort = req.body.sort;

    models.store.findAll({
        where : {
            addr1 : addr1,
            sort : sort
    },
    attributes : ['store_id', 'store_name']
}).then((store)=>{
        res.json(store);
    }).catch(err=>{console.log(err);})
}

exports.search = (req,res)=>{
    let searchstore = req.body.searchstore;
    let addr1 = req.body.addr1;

    models.store.findAll({
        where :{
            store_name : {
                [Op.like] : '%' + searchstore + '%'
            },
            addr1 : addr1
        },attributes : ['store_id', 'store_name']
    }).then((store=>{
        res.json(store);
    })).catch(err=>{console.log(err)})
}

exports.home = (req,res)=>{
    let store_id = req.body.store_id;
    

    models.store.findOne({
        where:{
            store_id : store_id
        },attributes : ['store_name','addr2','sort','res_time']
    }).then((store)=>{
        res.json(store);
    }).catch(err => console.log(err))

}

