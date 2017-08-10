var db = require('../db');
var Card = require('../models/card');

// exports.selectAllCards = function (cb) {
//     db.collection('cards').find().toArray(function (err, docs) {
// 	    if (err) {
// 	        console.log(err);
// 	        return res.sendStatus(500);
// 	    }
// 	    cb(err, docs);
//     });
// }

function getCardParams() {
	//getting card properties from front-end
}

exports.getAllCards = function (cb) {
    Card.getAll(function (err, docs) {
	    if (err) {
	      console.log(err);
	      return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}

exports.getCard = function (cb) {
    //var card = this.getCardParams();
    		 	var card = {
    				"name": "strong"
  				};
  				// var card = {
    		// 		_id: "598aff5158e0bc259c97315a"
  				// };
	  	Card.getOne(card, function (err, docs) {
	    if (err) {
	        console.log(err);
	        return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}

exports.createCard = function (cb) {
    //var card = this.getCardParams();
    			var card = {
    				name: "NEW",
					desc: "NEW card",
					health: 10,
					power: 10,
					price: 10,
					currHealth: 10,
					currcell: "none",
					currStatus: "dead"
  				};
  	Card.create(card, function (err, docs) {
	    if (err) {
	        console.log(err);
	        return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}

exports.deleteCard = function (cb) {
    //var card = this.getCardParams();
    			var card = {
    				"name": "NEW"
  				};
  	Card.delete(card, function (err, docs) {
	    if (err) {
	        console.log(err);
	        return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}

exports.updateCard = function (cb) {
    //var card = this.getCardParams();
    			var cardOld = {
    				"name": "NEW"
  				};
  				var cardNew = {
    				"name": "NEW_new_NEW"
  				};
  	Card.update(cardOld, cardNew, function (err, docs) {
	    if (err) {
	        console.log(err);
	        return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}