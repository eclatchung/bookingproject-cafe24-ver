var createError = require('http-errors');
var express = require('express');
var path = require('path');
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
//var config = require(__dirname + './config/config.json')[env];
var app = express();



//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
//view path
app.set('views',__dirname+'/views');
//html file render && view engine setup
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//sequelize

let models =require("./models/index.js");
models.sequelize.sync().then(()=>{
  console.log("DB에 연결 성공")
}).catch(err=>{
  console.log("disconnected")
  console.log(err)
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

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
  res.render('error.html');
});

module.exports = app;
