const models = require('../../../../models');
//let exports = module.exports = {};

exports.register = function(req,res,next){

    let body = req.body;
    
    models.member.create({
        name : body.name,
        mem_id : body.mem_id,
        mem_psw : body.mem_psw,
        mem_phone : body.mem_phone
    }).then((member)=>{
        console.log("데이터 추가 완료!");
        console.log(member);
        res.json({ status : true,
           success : true })
    }).catch((err,res)=>{
        console.log(err);
    })
    
}
