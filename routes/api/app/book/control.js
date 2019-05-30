const models = require('../../../../models');


exports.menu = (req,res) =>{

    let store_id = req.body.store_id;


    models.menu.findAll({
        where : {
            store_id : store_id
        },
        attributes : ["menu_name","price"] //가격을 prince로 해놔서 이거 나중에 수정 가능 시 수정합시다!!
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

        var result = {}

        if(booktime.AM_00시00분==0) result.AM_00시00분 = 'AM_00시00분';
        if(booktime.AM_00시30분==0) result.AM_00시30분 = 'AM_00시30분';
        if(booktime.AM_01시00분==0) result.AM_01시00분 = 'AM_01시00분';
        if(booktime.AM_01시30분==0) result.AM_01시30분 = 'AM_01시30분';
        if(booktime.AM_02시00분==0) result.AM_02시00분 = 'AM_02시00분';
        if(booktime.AM_02시30분==0) result.AM_02시30분 = 'AM_02시30분';
        if(booktime.AM_03시00분==0) result.AM_03시00분 = 'AM_03시00분';
        if(booktime.AM_03시30분==0) result.AM_03시30분 = 'AM_03시30분';
        if(booktime.AM_04시00분==0) result.AM_04시00분 = 'AM_04시00분';
        if(booktime.AM_04시30분==0) result.AM_04시30분 = 'AM_04시30분';
        if(booktime.AM_05시00분==0) result.AM_05시00분 = 'AM_05시00분';
        if(booktime.AM_05시30분==0) result.AM_05시30분 = 'AM_05시30분';
        if(booktime.AM_06시00분==0) result.AM_06시00분 = 'AM_06시00분';
        if(booktime.AM_06시30분==0) result.AM_06시30분 = 'AM_06시30분';
        if(booktime.AM_07시00분==0) result.AM_07시00분 = 'AM_07시00분';
        if(booktime.AM_07시30분==0) result.AM_07시30분 = 'AM_07시30분';
        if(booktime.AM_08시00분==0) result.AM_08시00분 = "AM_08시00분";
        if(booktime.AM_08시30분==0) result.AM_08시30분 = 'AM_08시30분';
        if(booktime.AM_09시00분==0) result.AM_09시00분 = 'AM_09시00분';
        if(booktime.AM_09시30분==0) result.AM_09시30분 = 'AM_09시30분';
        if(booktime.AM_10시00분==0) result.AM_10시00분 = 'AM_10시00분';
        if(booktime.AM_10시30분==0) result.AM_10시30분 = 'AM_10시30분';
        if(booktime.AM_11시00분==0) result.AM_11시00분 = 'AM_11시00분';
        if(booktime.AM_11시30분==0) result.AM_11시30분 = 'AM_11시30분';
        if(booktime.PM_12시00분==0) result.PM_12시00분 = 'PM_12시00분';
        if(booktime.PM_12시30분==0) result.PM_12시30분 = 'PM_12시30분';
        if(booktime.PM_01시00분==0) result.PM_01시00분 = 'PM_01시00분';
        if(booktime.PM_01시30분==0) result.PM_01시30분 = 'PM_01시30분';
        if(booktime.PM_02시00분==0) result.PM_02시00분 = 'PM_02시00분';
        if(booktime.PM_02시30분==0) result.PM_02시30분 = 'PM_02시30분';
        if(booktime.PM_03시00분==0) result.PM_03시00분 = 'PM_03시00분';
        if(booktime.PM_03시30분==0) result.PM_03시30분 = 'PM_03시30분';
        if(booktime.PM_04시00분==0) result.PM_04시00분 = 'PM_04시00분';
        if(booktime.PM_04시30분==0) result.PM_04시30분 = 'PM_04시30분';
        if(booktime.PM_05시00분==0) result.PM_05시00분 = 'PM_05시00분';
        if(booktime.PM_05시30분==0) result.PM_05시30분 = 'PM_05시30분';
        if(booktime.PM_06시00분==0) result.PM_06시00분 = 'PM_06시00분';
        if(booktime.PM_06시30분==0) result.PM_06시30분 = 'PM_06시30분';
        if(booktime.PM_07시00분==0) result.PM_07시00분 = 'PM_07시00분';
        if(booktime.PM_07시30분==0) result.PM_07시30분 = 'PM_07시30분';
        if(booktime.PM_08시00분==0) result.PM_08시00분 = 'PM_08시00분';
        if(booktime.PM_08시30분==0) result.PM_08시30분 = 'PM_08시30분';
        if(booktime.PM_09시00분==0) result.PM_09시00분 = 'PM_09시00분';
        if(booktime.PM_09시30분==0) result.PM_09시30분 = 'PM_09시30분';
        if(booktime.PM_10시00분==0) result.PM_10시00분 = 'PM_10시00분';
        if(booktime.PM_10시30분==0) result.PM_10시30분 = 'PM_10시30분';
        if(booktime.PM_11시00분==0) result.PM_11시00분 = 'PM_11시00분';
        if(booktime.PM_11시30분==0) result.PM_11시30분 = 'PM_11시30분';

        return result;

    }


}
