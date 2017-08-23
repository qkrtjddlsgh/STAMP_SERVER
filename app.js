var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var check_member_id = require('./routes/check_user_id/check_member_id');
var check_merchant_id = require('./routes/check_user_id/check_merchant_id');
var reg_member_data = require('./routes/reg_user_data/reg_member_data');
var reg_merchant_data = require('./routes/reg_user_data/reg_merchant_data');
var check_member_login = require('./routes/check_user_id/check_member_login');
var check_merchant_login = require('./routes/check_user_id/check_merchant_login');

// 추가 모듈 - 작성 : 박령민
var req_csv_file = require('./routes/req_data_file/req_csv_file');

var app = express();

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/stamp_db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/check_member_id', check_member_id);
app.use('/check_merchant_id', check_merchant_id);
app.use('/reg_member_data', reg_member_data);
app.use('/reg_merchant_data', reg_merchant_data);
app.use('/check_member_login', check_member_login);
app.use('/check_merchant_login', check_merchant_login);

// 추가 모듈 - 작성 : 박령민
app.use('/req_csv_file', req_csv_file);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
