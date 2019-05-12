var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var Member = require('../../../../models/CRUD/member');

//local strategy
passport.use(new LocalStrategy({
    usernameField : 'mem_id',
    passwordField : 'mem_psw',
    passReqToCallback : true
},
function(mem_id,mem_psw,done){
    Member.findOne(mem_id,mem_psw)
    .then((req,res)=>{
        console.log("Passport at app"+ mem_id),
        done(null,member)
    }).catch((err)=>{
        console.log(err)
    })
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

exports.signup=(req,res)=>{
    res.render('signup')
}

module.exports = {passport};