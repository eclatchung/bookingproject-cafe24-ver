var LocalStrategy = require('passport-local').Strategy;

var models = require('../../models');

var AppConfig = (passport) =>{
    //passport session setup
    console.log("AppConfig Passport is working");
    passport.serializeUser(function(member,done){
        console.log("Serialize");
        done (null,member);
    });

    passport.deserializeUser(function(member,done){
        console.log("deserialize")
        models.member.findOne({where : {
            mem_id : member.mem_id
        }}).then(function(member){
            done(null,member);
        })
        .catch(function(err,member){
            done(err,member);
        });
    });

    passport.use('app-login',new LocalStrategy({
        usernameField : 'mem_id',
        passwordField : 'mem_psw',
        passReqToCallback : true
        },function(req,mem_id,mem_psw,done){
            models.member.findOne({where : {mem_id : mem_id}}).then(function(member){
                if(!member) return done(null,false,{message : 'Incorrect ID'});
                if(!member.mem_psw === mem_psw) return done(null,false,{message : 'incorrect psw'});
                return done(null,member); 
            }).catch(err => done(err));
        }
    ));




};

module.exports = AppConfig;