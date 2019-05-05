
var models = require('../../models');
const Member = models.Member;

exports.findOne = (req,res)=>{
    //for passport
    Member.findOne({
        where : {
            $and :
             [{mem_id : req.body.mem_id},
             {mem_psw : req.body.mem_psw}]}})
    .then((member)=>{
        console.log("Sucess_ FINDONE at Member CRUD",
        res.json(member)
        )})
    .catch((err)=>{
        console.log("ERROR _ FINDONE at MEMBER CRUD",
        res.json(err)
        )});
}