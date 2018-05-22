//Base Server Requests
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require('./routes/router');
var requests = require('./routes/request');

//Page Requests


var app = express();

//view engine setup
