var db = require('../db');
//var Card = require('../models/card');

exports.selectAllCards = function (cb) {
    db.collection('cards').find().toArray(function (err, docs) {
	    if (err) {
	        console.log(err);
	        return res.sendStatus(500);
	    }
	    cb(err, docs);
    });
}

exports.createCard = function (req, res) {
    //var card = this.getCardParams();
    			var card = {
    				name: "new",
					desc: "new card",
					health: 10,
					power: 10,
					price: 10,
					currHealth: 10,
					currcell: "none",
					currStatus: "dead"
  				};
  	Card.create(card, function (err) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(card);
    });
}

function getCardParams() {
	//getting card properties from front-end
}
