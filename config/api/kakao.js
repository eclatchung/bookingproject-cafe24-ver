const request = require('request');
const querystring = require('querystring');

module.exports = function (status) {

    function kakaoPayCall(status){
        var host = "https://kapi.kakao.com"

        var API_OPT = {
           headers :  {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        'Authorization':'KakaoAK{f8fbfefe0d136f2927e27cc2029a6427}'},
            url : null,
            followRedirect:true,
            form :null
        }

        var PATH = null;
        (function(){
            switch(status) {
            case 'ready': 
               PATH = '/v1/payment/ready'
              break;
            case 'approve':
                PATH = '/v1/payment/approve'
                break;
            default :
             PATH = '/v1/payment/approve'
        }})(status)
        return {
            kpready : function(info,callback){
                API_OPT.url = host+PATH
                // API_OPT. = JSON.stringify({
                //     "CID" : 'TC0ONETIME',
                //     "partner_order_id" : info.store_id,
                //     "partner_user_id" : info.mem_id,
                //     "item_name" : info.item_name,
                //     "quantity":info.quantity,
                //     "total_amount" :info.total_amount,
                //     "tax_free_amount":info.tax_free_amount,
                //     "approval_url":info.approval_url,
                //     "cancel_url":info.cancel_url,
                //     "fail_url":info.fail_url
                // });
                API_OPT.form= querystring.stringify({
                    "CID" : 'TC0ONETIME',
                   "partner_order_id" : info.store_id,
                    "partner_user_id" : info.mem_id,
                    "item_name" : info.item_name,
                    "quantity":info.quantity,
                    "total_amount" :info.total_amount,
                    "tax_free_amount":info.tax_free_amount,
                    "approval_url":info.approval_url,
                    "cancel_url":info.cancel_url,
                    "fail_url":info.fail_url
                })
                request.post(API_OPT,function(err,res,result){
                    let statusCode = res.statusCode;
                    statusCodeErrorHandler(statusCode,callback,result)
                });

            }
        };

    }
    function statusCodeErrorHandler(statusCode,callback,data){
        switch(statusCode){
            case 200:
                callback(null,JSON.parse(data));
                break;
            case 400 : 
                callback(null,JSON.parse(data))
                console.log(statusCode);
                break;
            case 401 : 
                callback(null,JSON.parse(data))
                console.log(statusCode);
                break;
            case 401 :
                callback(null,JSON.parse(data))
                console.log(statusCode);
                break;
            case 404:
                callback(null,JSON.parse(data))
                console.log(statusCode);
                break;
            default:
                callback(null,JSON.parse(data))
                console.log(statusCode);
                break;
            
        }
    }
    var INSTANCE;
    if(INSTANCE == undefined){
        INSTANCE = new kakaoPayCall(status);
    }
    return INSTANCE;
}