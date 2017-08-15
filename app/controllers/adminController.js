var db = require('../db');
var Card = require('../models/card');

// var validationSchema = {
// 	'name': { 
// 		notEmpty: true,
// 		isLength: {
// 	    	options: [{ min: 2, max: 20 }],
// 	    	errorMessage: 'Must be between 2 and 20 chars long'  
// 	    },
// 	    errorMessage: 'Invalid Card Name'
// 	},
// 	'desc': { 
// 		isLength: {
// 	    	options: [{ max: 200 }],
// 	    	errorMessage: 'Must be less then 200 chars long'  
// 	    },
// 	    errorMessage: 'Invalid Card Description'
// 	},
// 	'health': { 
// 		notEmpty: true,
// 		isInt: {
// 	    	options: [{ min: 1, max: 50 }],
// 	    	errorMessage: 'Must be between 1 and 50'  
// 	    },
// 	    errorMessage: 'Invalid Health Value'
// 	},
// 	'power': { 
// 		notEmpty: true,
// 		isInt: {
// 	    	options: [{ min: 1, max: 50 }],
// 	    	errorMessage: 'Must be between 1 and 50'  
// 	    },
// 	    errorMessage: 'Invalid Power Value'
// 	},
// //other properties aren't available to change by user
// };


function getCardParams() {
	//getting card properties from front-end
}

exports.getAllCards = function (cb) {
    Card.getAll(function (err, docs) {
	    cb(err, docs);
    });
}

exports.getCard = function (cb) {
    //var card = this.getCardParams();
    		 	//var card = {
    			//	"name": "strong"
  				//};
  				var card = "59929fb7564b5419e0cdedb4";
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
    				name: "NEW_ddddddddddddddddddd25",
					desc: "NEW card",
					health: 100,
					power: 10,
					price: 10,
					currHealth: 10,
					currcell: "none",
					currStatus: "dead"
  				};

    // req.checkBody(this.validationSchema, function(err, res){
    // 	if(err){
    // 		console.log("Validation failed!");
    // 	}
    // 	else{
    // 		console.log("Validation succsess!");
    // 	}
    // });

  	Card.create(card, function (err, docs) {
	    cb(err, docs);
    });
}

exports.updateCard = function (cb) {
    //var card = this.getCardParams();
    			var cardOld = "59929fb7564b5419e0cdedb4";
  				var cardNew = {
    				name: "NEW_new_NEW",
    				desc: "NEW card",
					health: 100,
					power: 100,
					price: 100,
					currHealth: 10,
					currcell: "none",
					currStatus: "dead"
  				};
  	Card.update(cardOld, cardNew, function (err, docs) {
	    cb(err, docs);
    });
}