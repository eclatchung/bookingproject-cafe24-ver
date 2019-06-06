const KakaoCall = require('../../../../config/api/kakao');

exports.kakaoready = (req,res)=>{
    let info = {};
    info.store_id = req.body.store_id;
    info.mem_id = req.body.mem_id;
    info.item_name = req.body.menu;//menu
    info.quantity = 1;//1
    info.total_amount = req.body.total_amount;
    info.tax_free_amount = 0;//0
    info.approval_url='http://booking.cafe24app.com/api/app/kakaopay/approval';
    info.cancel_url = 'http://booking.cafe24app.com/api/app/kakaopay/cancel';
    info.fail_url = 'http://booking.cafe24app.com/api/app/kakaopay/fail';

    KakaoCall('ready').kpready(info,function(err,result){
        if(!err){
            console.log(result);
            var send ={};
            send.tid = result.tid;
            send.next_redirect_app_url = result.next_redirect_app_url;
            send.android_app_scheme = result.android_app_scheme;
            send.created_at = result.created_at;
            res.json(send);
        }else{
            console.log(err);
        }
    })

}

exports.approval=(req,res)=>{
    console.log("/api/app/kakaopay/approval : ready성공!")
    
    res.redirect('http://booking.cafe24app.com/api/app/book/save')
   

}
exports.cancel=(req,res)=>{
    console.log("/api/app/kakaopay/approval : ready성공!")
 
    res.json({msg : "결제 취소"})

}

exports.fail=(req,res)=>{
    console.log("/api/app/kakaopay/approval : ready성공!")
    
    res.json({msg : "결제 실패"})

}
