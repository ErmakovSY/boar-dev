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

exports.deleteCard = function (cb) {
    //var card = this.getCardParams();
    			var card = "59929fb7564b5419e0cdedb4";
  	Card.delete(card, function (err, docs) {
	    cb(err, docs);
    });
}
exports.deleteAll = function (cb) {
  	Card.deleteAll(function (err, docs) {
	    cb(err, docs);
    });
}

exports.createCard = function (req, cb) {
    //var card = this.getCardParams();
    			var card = {
    				name: "NEW",
					desc: "NEW card",
					health: 10,
					power: 10,
					price: 10,
					currHealth: 10,
					currCell: "none",
					currStatus: "dead"
  				};

  	this.validateInput(card, function(err, res){
  		
	    if(!err > 0) {
		    Card.create(card, function (err, docs) {
			    cb(err, docs);
		    });
		}
		else{
			cb(err, res);
		}
	});
}

exports.updateCard = function (cb) {
    //var card = this.getCardParams();
    			var cardOld = "5992d61459314b1109ca220d";
  				var cardNew = {
    				name: "NEW_new_NEW",
    				desc: "NEW card",
					health: 5,
					power: 5,
					price: 5,
					currHealth: 5,
					currCell: "none",
					currStatus: "dead"
  				};

  	this.validateInput(cardNew, function(err, res){
  		
	    if(!err > 0) {
		    Card.update(cardOld, cardNew, function (err, docs) {
			    cb(err, docs);
		    });
		}
		else{
			cb(err, res);
		}
	});
}