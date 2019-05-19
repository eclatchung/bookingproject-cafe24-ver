const models = require('../../../../models');

exports.restart = (req,res) =>{
    let store_id = req.body.restart;
    const restart = 1 ;
    console.log(store_id+'start')
    models.store.update({res_status : restart},
        {where : {store_id : store_id}, returning: true}
        ).then((result)=>{
            res.redirect('/api/web/reserve/mypage/'+store_id)
        }).catch(err => console.log(err))
}

exports.stop = (req,res) =>{
    let store_id = req.body.stop;
    const stop = 0;
    console.log(store_id+ 'stop')
    models.store.update({res_status : stop},
        {where : {store_id :store_id},returning : true}
        ).then((result)=>{
            res.redirect('/api/web/reserve/mypage/'+store_id)
        }).catch(err=>{console.log(err)})

}