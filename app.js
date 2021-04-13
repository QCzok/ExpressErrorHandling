var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fibonacciRouter = require('./routes/fibonacci');
var fibsyn = require('./routes/fibsyn');
var fibasyn = require('./routes/fibasyn');
var fibPromise = require('./routes/fibPromise');
var promiseCatchErrors = require('./routes/promiseCatchErrors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/fibonacci', fibonacciRouter);
app.use('/fibsyn', fibsyn);
app.use('/fibasyn', fibasyn);
app.use('/fibPromise', fibPromise);
app.use('/promiseCatchErrors', promiseCatchErrors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  if (err.status === undefined || err.status === 500) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
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
