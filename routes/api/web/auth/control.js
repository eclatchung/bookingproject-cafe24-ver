var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var models = require('../../../../models');

//local strategy

passport.use('web-login',new LocalStrategy({
    usernameField : 'store_id',
    passwordField : 'store_psw',
    passReqToCallback : true
},
function(req,store_id,store_psw,done){
    console.log('strategy call')
    models.store.findAll({
        where : {
            store_id : store_id,
            store_psw : store_psw   
            }}).then((store)=>{
                if(err) return done(null,false,{message:"ERROR"})
                if(!store) return done(nul,false,{message : "no User"})
                else return done(null,store,{message : correct})
            });
}));

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

