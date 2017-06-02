var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose= require('mongoose');
var url = "mongodb://localhost:27017/sql2md";
mongoose.connect(url);


var db= mongoose.connection;

db.on ('error', console.error.bind(
    console, 'connection error'));

db.once('open', function() {
    console.log("Connected successfully to the server")
});


var index = require('./routes/index');
var users = require('./routes/users');
var citationRouter = require('./routes/citation');
var titleRouter= require('./routes/titles')
var authorRouter1= require('./routes/author1')

var authorRouter2= require('./routes/author2')
var authorRouter3=require('./routes/author3')
var app = express();

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
app.use('/citation', citationRouter);
app.use('/title', titleRouter);
app.use('/author1',authorRouter1);
app.use('/author2',authorRouter2);
app.use('/author3',authorRouter3);
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
