//Base Server Requests
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');

var router = require('./routes/router');
var requests = require('./routes/request');

//Page Requests



var app = express();

//view engine setup


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Fiuqbq8b'));//Change this to something longer
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router);
app.use('/r/', requests);
//requests here


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('error');
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.send(err.message);
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;