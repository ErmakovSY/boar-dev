
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

var app = express();
var validator = require('express-validator');

// view engine setup
app.set('views', './app/views');
app.set('view engine', 'pug');

//app.listen(3000);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// middleware
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', index);
app.get('/admin/', index);
app.get('/admin/show-card', index);
app.delete('/admin/delete-card', index);
app.delete('/admin/delete-all', index);
//app.post('/admin/create-card', index);
app.put('/admin/update-card', index);

app.post('/admin/create-card', function(req,res,next){
    next(index);
});

module.exports = app;