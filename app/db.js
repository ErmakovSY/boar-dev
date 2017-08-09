var config = require('./config');
var mongoClient = require("mongodb").MongoClient;
var mongoose = require('mongoose');
var url = "mongodb://" + config.host + ":" + config.db.port + "/" + config.db.mongo;

var db = mongoose.createConnection(url, function(err, db){ 

    if(err){
        return console.log(err);
    }
    console.log("Successfully connected to " + config.db.mongo + " by url: " + url + " by mongoose ver." + mongoose.version);
    return db;

});


module.exports = db;