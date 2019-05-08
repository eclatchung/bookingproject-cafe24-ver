var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var Store = require('../../../../models/CRUD/store');

//local strategy
passport.use(new LocalStrategy({
    usernameField : 'store_id',
    passwordField : 'store_psw',
    passReqToCallback : true
},
function(req,store_id,store_psw,done){
    Store.findOne(store_id,store_psw)
    .then((req,res)=>{
        //res.render('mainpage'+store_id+'.html'),
        console.log("move to mainpage"+store_id),
        done(null,store)
    }).catch((err)=>{
        console.log(err)
        res.render('login.html')
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

module.exports = {passport};