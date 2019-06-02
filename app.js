var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport'),
  WebPassport = new passport.Passport(),
  appPassport = new passport.Passport();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var WebConfig = require('./config/passport/webpassport');
//var AppConfig = require('./config/passport/apppassport');
//var config = require(__dirname + './config/config.json')[env];
var app = express();
var exphbs = require('express-handlebars');
var env = require('dotenv').config();

app.io = require('socket.io')();
app.set('socketio',app.io);

//app.set('views', express-handlebars);
//app.set('view engine', 'pug');
//view path
//app.set('views',__dirname+'/views');
//html file render && view engine setup
//app.set('view engine','ejs');
//app.engine('html',require('ejs').renderFile);
app.set('views',__dirname+'/views');
app.engine('hbs',exphbs({
  extname: '.hbs'
}));
app.set('view engine','.hbs');




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));
app.use(cookieParser());
app.use(session({secret:'keyboard booking', resave : true, saveUninitialized :true,
cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(WebPassport.initialize({ userProperty : 'user' }));
app.use(WebPassport.session());
//app.use(appPassport.initialize({ userProperty : 'member' }))
//app.use(appPassport.session());

WebConfig(passport);
//AppConfig(appPassport);

//sequelize
let models =require("./models/index.js");
models.sequelize.sync().then(()=>{
  console.log("DB에 연결 성공")
}).catch(err=>{
  console.log("disconnected")
  console.log(err)
})

var indexRouter = require('./routes/index');

// app.io.on('connection',function(socket){
//   console.log('socketio user connected......')
// })



app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error.hbs');
});

module.exports = app;
