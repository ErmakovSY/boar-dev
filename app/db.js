var config = require('./config');
var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var dburl = "mongodb://" + config.host + ":" + config.db.port + "/" + config.db.mongo;

var db = mongoose.createConnection(dburl, function(err, db){ 

    if(err){
        return console.log(err);
    }
    console.log("Successfully connected to " + config.db.mongo + " by url: " + dburl + " by mongoose ver." + mongoose.version);
    return db;

});


module.exports = db;