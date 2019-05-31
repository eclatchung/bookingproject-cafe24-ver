const models = require('../../../../models');


exports.menu = (req,res) =>{

    let store_id = req.body.store_id;


    models.menu.findAll({
        where : {
            store_id : store_id
        },
        attributes : ["menu_name","price"] 
    }).then((menu)=>res.json(menu)
    ).catch(err=>console.log(err))

}

exports.showtime=(req,res)=>{
    
    let store_id = req.body.store_id;
    let tableNum = req.body.tableNum;




    models.book.findOne({
        where : {
            store_id :store_id,
            tableNum : tableNum
        },
        attributes:["book_id"]
    }).then(book=>{
        models.booktime.findOne({
            where :{
                book_id : book.dataValues.book_id
            }
        }).then(result=>{
            var show=showpretty(result.dataValues)
            res.json(show)})
    })
    function showpretty(booktime){

        var result = [];
        var num = 0;

        if(booktime.AM_00시00분==0) {var ob={}; ob.time = 'AM_00시00분'; result[num]=ob; num++;}
        if(booktime.AM_00시30분==0) {var ob={}; ob.time  = 'AM_00시30분'; result[num]=ob; num++;}
        if(booktime.AM_01시00분==0) {var ob={}; ob.time  = 'AM_01시00분';result[num]=ob; num++;}
        if(booktime.AM_01시30분==0) {var ob={}; ob.time  = 'AM_01시30분';result[num]=ob; num++;}
        if(booktime.AM_02시00분==0) {var ob={}; ob.time  = 'AM_02시00분';result[num]=ob; num++;}
        if(booktime.AM_02시30분==0) {var ob={};ob.time  = 'AM_02시30분';result[num]=ob; num++;}
        if(booktime.AM_03시00분==0) {var ob={};ob.time  = 'AM_03시00분';result[num]=ob; num++;}
        if(booktime.AM_03시30분==0) {var ob={};ob.time  = 'AM_03시30분';result[num]=ob; num++;}
        if(booktime.AM_04시00분==0) {var ob={};ob.time  = 'AM_04시00분';result[num]=ob; num++;}
        if(booktime.AM_04시30분==0) {var ob={};ob.time  = 'AM_04시30분';result[num]=ob; num++;}
        if(booktime.AM_05시00분==0) {var ob={};ob.time  = 'AM_05시00분';result[num]=ob; num++;}
        if(booktime.AM_05시30분==0) {var ob={};ob.time  = 'AM_05시30분';result[num]=ob; num++;}
        if(booktime.AM_06시00분==0) {var ob={};ob.time  = 'AM_06시00분';result[num]=ob; num++;}
        if(booktime.AM_06시30분==0) {var ob={};ob.time  = 'AM_06시30분';result[num]=ob; num++;}
        if(booktime.AM_07시00분==0) {var ob={};ob.time  = 'AM_07시00분'; result[num]=ob; num++;}
        if(booktime.AM_07시30분==0) {var ob={};ob.time  = 'AM_07시30분';result[num]=ob; num++;}
        if(booktime.AM_08시00분==0) {var ob={};ob.time  = "AM_08시00분";result[num]=ob; num++;}
        if(booktime.AM_08시30분==0) {var ob={};ob.time  = 'AM_08시30분';result[num]=ob; num++;}
        if(booktime.AM_09시00분==0) {var ob={};ob.time  = 'AM_09시00분';result[num]=ob; num++;}
        if(booktime.AM_09시30분==0) {var ob={};ob.time = 'AM_09시30분'; result[num]=ob; num++;}
        if(booktime.AM_10시00분==0) {var ob={};ob.time = 'AM_10시00분';result[num]=ob; num++;}
        if(booktime.AM_10시30분==0) {var ob={};ob.time = 'AM_10시30분'; result[num]=ob; num++;}
        if(booktime.AM_11시00분==0) {var ob={};ob.time = 'AM_11시00분'; result[num]=ob; num++;}
        if(booktime.AM_11시30분==0) {var ob={};ob.time = 'AM_11시30분'; result[num]=ob; num++;}
        if(booktime.PM_12시00분==0) {var ob={};ob.time = 'PM_12시00분'; result[num]=ob; num++;}
        if(booktime.PM_12시30분==0) {var ob={};ob.time = 'PM_12시30분'; result[num]=ob; num++;}
        if(booktime.PM_01시00분==0) {var ob={};ob.time = 'PM_01시00분'; result[num]=ob; num++;}
        if(booktime.PM_01시30분==0) {var ob={};ob.time = 'PM_01시30분'; result[num]=ob; num++;}
        if(booktime.PM_02시00분==0) {var ob={};ob.time = 'PM_02시00분'; result[num]=ob; num++;}
        if(booktime.PM_02시30분==0) {var ob={};ob.time = 'PM_02시30분'; result[num]=ob; num++;}
        if(booktime.PM_03시00분==0) {var ob={};ob.time = 'PM_03시00분'; result[num]=ob; num++;}
        if(booktime.PM_03시30분==0) {var ob={};ob.time = 'PM_03시30분'; result[num]=ob; num++;}
        if(booktime.PM_04시00분==0) {var ob={};ob.time = 'PM_04시00분'; result[num]=ob; num++;}
        if(booktime.PM_04시30분==0) {var ob={};ob.time = 'PM_04시30분'; result[num]=ob; num++;}
        if(booktime.PM_05시00분==0) {var ob={};ob.time = 'PM_05시00분'; result[num]=ob; num++;}
        if(booktime.PM_05시30분==0) {var ob={};ob.time = 'PM_05시30분'; result[num]=ob; num++;}
        if(booktime.PM_06시00분==0) {var ob={};ob.time = 'PM_06시00분'; result[num]=ob; num++;}
        if(booktime.PM_06시30분==0) {var ob={};ob.time = 'PM_06시30분'; result[num]=ob; num++;}
        if(booktime.PM_07시00분==0) {var ob={};ob.time = 'PM_07시00분'; result[num]=ob; num++;}
        if(booktime.PM_07시30분==0) {var ob={};ob.time = 'PM_07시30분'; result[num]=ob; num++;}
        if(booktime.PM_08시00분==0) {var ob={};ob.time = 'PM_08시00분'; result[num]=ob; num++;}
        if(booktime.PM_08시30분==0) {var ob={};ob.time = 'PM_08시30분'; result[num]=ob; num++;}
        if(booktime.PM_09시00분==0) {var ob={};ob.time = 'PM_09시00분'; result[num]=ob; num++;}
        if(booktime.PM_09시30분==0) {var ob={};ob.time = 'PM_09시30분'; result[num]=ob; num++;}
        if(booktime.PM_10시00분==0) {var ob={};ob.time = 'PM_10시00분'; result[num]=ob; num++;}
        if(booktime.PM_10시30분==0) {var ob={};ob.time = 'PM_10시30분'; result[num]=ob; num++;}
        if(booktime.PM_11시00분==0) {var ob={};ob.time = 'PM_11시00분'; result[num]=ob; num++;}
        if(booktime.PM_11시30분==0) {var ob={};ob.time = 'PM_11시30분'; result[num]=ob; num++;}

        return result;

    }


}
