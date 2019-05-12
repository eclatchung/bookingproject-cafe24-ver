var LocalStrategy = require('passport-local').Strategy;

var models = require('../../models');

var WebConfig = (passport) =>{
    //passport session setup
    console.log("webConfig Passport is working");
    passport.serializeUser(function(user,done){
        console.log("Serialize");
        done (null,user);
    });

    passport.deserializeUser(function(user,done){
        console.log("deserialize");
        done(null, user);
       
    });

    passport.use('web-login',new LocalStrategy({
        usernameField : 'store_id',
        passwordField : 'store_psw',
        passReqToCallback : true
        },function(req,store_id,store_psw,done){
            models.store.findOne({where : {store_id : store_id}}).then(function(user){
                if(!user) return done(null,false,{message : 'Incorrect ID'});
                if(!user.store_psw === store_psw) return done(null,false,{message : 'incorrect psw'});
                return done(null,user); 
            }).catch(err => done(err));
        }
    ));

    passport.use('app-login',new LocalStrategy({
        usernameField : 'mem_id',
        passwordField : 'mem_psw',
        passReqToCallback : true
        },function(req,mem_id,mem_psw,done){
            models.member.findOne({where : {mem_id : mem_id}}).then(function(user){
                if(!user) return done(null,false,{message : 'Incorrect ID'});
                if(!user.mem_psw === mem_psw) return done(null,false,{message : 'incorrect psw'});
                return done(null,user); 
            }).catch(err => done(err));
        }
    ));






};

module.exports = WebConfig;