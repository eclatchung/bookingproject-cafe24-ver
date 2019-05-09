var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var Store = require('../../../../models');

//local strategy
passport.use('web-login',new LocalStrategy({
    usernameField : 'store_id',
    passwordField : 'store_psw',
    passReqToCallback : true
},
function(req,store_id,store_psw,done){
    Store.findOne({where:{store_id:store_id,store_psw:store_psw}}).then((store)=>{
        if(store == null || store == undefined){
            console.log("로그인 자료가 없습니다.")
        }
        else if(!store){
            return done(null,false,{message : 'No Exist'});
        }
        return done(null,{'store_id':store_id});

    }).catch((err)=>{
        console.log(err)
        res.render('login.html')
    })
   // .then((req,res)=>{
        //res.render('mainpage'+store_id+'.html'),
  //      console.log("move to mainpage"+store_id),
    //    done(null,store)
   // }).catch((err)=>{
    //    console.log(err)
   //     res.render('login.html')
   // })
}
))

//serializeUser
passport.serializeUser((store,done)=>{
    console.log('serializeUser--->>>>');
    return done(null,store);
})
passport.deserializeUser((store,done)=>{
    console.log('desrializeUser --->>');
    console.log(store);
    return done(null,store);
})

module.exports = {passport};