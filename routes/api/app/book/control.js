const models = require('../../../../models');;


exports.menu = (req,res) =>{

    let store_id = req.body.store_id;


    models.menu.findAll({
        where : {
            store_id : store_id
        },
        attributes : ["menu_name","prince"] //가격을 prince로 해놔서 이거 나중에 수정 가능 시 수정합시다!!
    }).then((menu)=>res.json(menu)
    ).catch(err=>console.log(err))
}

// exports.showtime=(req,res)=>{
    
//     let store_id = req.body.store_id;
//     let table_num
// }
