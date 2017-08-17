var db = require('../db');
var validator = require('node-validator');
var Card = require('../models/card');

exports.validateInput = function(card, cb) {
	
	var check = validator.isObject()
		.withRequired('name', validator.isString({min: 1, max: 50}))
		.withOptional('desc', validator.isString({min: 0, max: 200}))
		.withOptional('health', validator.isInteger({min: 1, max: 20}))
		.withOptional('power', validator.isInteger({min: 1, max: 20}))
		.withOptional('price', validator.isInteger({min: 1, max: 100}))
		.withRequired('currHealth', validator.isInteger({min: 1, max: 20}))
		.withRequired('currCell', validator.isString({min: 0, max: 20}))
		.withRequired('currStatus', validator.isString({min: 0, max: 20}));


	validator.run(check, card, function(errorCount, errors) {
		console.log("controller@validator errors - " + errorCount);
		console.log("vcontroller@validator errors list - " + errors);
		cb(errorCount, errors);
	});
}

function getCardParams() {
	//getting card properties from front-end
}

exports.getAllCards = function (cb) {
    Card.getAll(function (err, docs) {
	    cb(err, docs);
    });
}

exports.getCard = function (req, cb) {
  		//var card = "59929fb7564b5419e0cdedb4";
  	var card = req;
  	Card.getOne(card, function (err, docs) {
	    cb(err, docs);
    });
}

exports.deleteCard = function (req, cb) {
    //var card = "59929fb7564b5419e0cdedb4";
    var card = req;
  	Card.delete(card, function (err, docs) {
  		console.log("controller: deleted");
	    cb(err, docs);
    });
}
exports.deleteAll = function (cb) {
  	Card.deleteAll(function (err, docs) {
	    cb(err, docs);
    });
}

exports.createCard = function (req, cb) {
    			//var card = {
    				//name: "NEW",
					// desc: "NEW card",
					// health: 10,
					// power: 10,
					// price: 10,
					// currHealth: 10,
					// currCell: "none",
					// currStatus: "dead"
  				//};
  	var card = {
		name: req.name,
    	desc: req.desc,
		health: parseInt(req.health),
		power: parseInt(req.power),
		price: parseInt(req.price),
		currHealth: parseInt(req.health),
		currCell: "none",
		currStatus: "dead"
	};
	console.log("controller@create: required "+req.name+" ("+typeof(req.name)+"), "+req.desc+" ("+typeof(req.desc)+"), "+
		req.health+" ("+typeof(parseInt(req.health))+"), "+req.power+" ("+typeof(parseInt(req.power))+"), "+req.price+" ("+
		typeof(parseInt(req.price))+")");

  	this.validateInput(card, function(err, res){
  		
	    if(!err > 0) {
		    Card.create(card, function (err, docs) {
			    console.log("controller@create: err - " + err);
			    cb(err, docs);
		    });
		}
		else{
			cb(err, res);
		}
	});
}

exports.updateCard = function (req, cb) {
	    		//var cardOld = "5992d61459314b1109ca220d";
	  			//var cardNew = {
			    	//name: "NEW_new_NEW",
			    	//desc: "NEW card",
					// health: 5,
					// power: 5,
					// price: 5,
					// currHealth: 5,
					// currCell: "none",
					// currStatus: "dead"
  				//};
  	var cardOld = req.id;
  	var cardNew = {
		name: req.name,
    	desc: req.desc,
		health: parseInt(req.health),
		power: parseInt(req.power),
		price: parseInt(req.price),
		currHealth: parseInt(req.health),
		currCell: "none",
		currStatus: "dead"
	};

	console.log("controller@create: required "+req.name+" ("+typeof(req.name)+"), "+req.desc+" ("+typeof(req.desc)+"), "+
		req.health+" ("+typeof(parseInt(req.health))+"), "+req.power+" ("+typeof(parseInt(req.power))+"), "+req.price+" ("+
		typeof(parseInt(req.price))+")");
  	
  	this.validateInput(cardNew, function(err, res){
  		
	    if(!err > 0) {
		    Card.update(cardOld, cardNew, function (err, docs) {
		    	console.log("controller@update: err - " + err);
			    cb(err, docs);
		    });
		}
		else{
			cb(err, res);
		}
	});
}