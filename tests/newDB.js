var mongoose = require('mongoose');
var db = require('../app/db');

var CardSchema = new mongoose.Schema( {
    name: { type: String, default: "card" },
	desc: { type: String, default: "card description" },
	health: { type: Number },
	power: { type: Number },
	price: { type: Number },
	currHealth: { type: Number },
    currCell: { type: String, default: "none" },
    currStatus: { type: String, default: "dead" },
    buff: Buffer
} );

var Card = db.model("Card", CardSchema);

var card1 = new Card({
	name: "weak",
	desc: "weak card",
	health: 2,
	power: 2,
	price: 1,
	currHealth: 2,
	currcell: "none",
	currStatus: "dead"
});
write(card1);

var card2 = new Card({
	name: "middle",
	desc: "middle card",
	health: 3,
	power: 3,
	price: 2,
	currHealth: 3,
	currcell: "none",
	currStatus: "dead"
});
write(card2);

var card3 = new Card({
	name: "strong",
	desc: "strong card",
	health: 4,
	power: 4,
	price: 4,
	currHealth: 4,
	currcell: "none",
	currStatus: "dead"
});
write(card3);

function write(card) {
	card.save(function (err, card) {
	    if (err){
	        console.log("Something goes wrong with item " + card.name);
	    }else{
	        console.log("Item " + card.name + " successfully written");
	    }
	});
}


