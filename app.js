
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Database
var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var config = require('./app/config');
var db = require('./app/db');
var dburl = "mongodb://" + config.host + ":" + config.db.port + "/" + config.db.mongo;

var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', './app/views');
app.set('view engine', 'pug');

//app.listen(3000);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', index);
//app.use('/admin/add', index);
//app.use('/cards', cards);


module.exports = app;