var db = require('../db');
var Cell = require('./cell');
var ObjectID = require('mongodb').ObjectID;

	
	//------------------admin-panel operations------------------//

								//получение всех карт из БД
	exports.getAll = function (cb) {
	    db.collection('cards').find().toArray(function (err, docs) {
	    	cb(err, docs);
	    });
	}
								//получение одной карты из БД
	exports.getOne = function (card, cb) {
		db.collection('cards').findOne({ _id: ObjectID(card) }, function (err, docs) {
	    	cb(err, docs);
	    });
	}
								//создание карты в БД
	exports.create = function (card, cb) {
    	db.collection('cards').insert(card, function (err, result) {
    		cb(err, result);
    	});
	}
								//удаление карты из БД
	exports.delete = function (card, cb) {
	    this.getOne(card, function (err, res){
	    	if(res){
		    	db.collection('cards').remove(res, function(err, result) {
	    			cb(err, result);
	    		});
	    	}
	    	else{
	    		cb(err, "No such card");
	    	}
		});
	}
								//удаление всех карт из БД
	exports.deleteAll = function (cb) {
		db.collection('cards').remove({}, function(err, result) {
	    	cb(err, result);
		});
	}
								//изменеие карты в БД
	exports.update = function (cardOld, cardNew, cb) {
		this.getOne(cardOld, function (err, res){
    		db.collection('cards').update(res, cardNew, function (err, result) {
	    		cb(err, result);
	    	});
	    });
	}

//----------------------------------------------------------//

//------------------game-process operations-----------------//

								//появление карты на поле
	exports.appair = function () {            
		Cell.unsetCellEmpty(currCell);
		this.currStatus = "live";	
	}

								//присваивание карте ячейки
	exports.setCell = function (currCell) {
		this.currCell = currCell;
	}

								//изменение ячейки картой
	exports.changeCell = function (currCell, newCell) {
		this.currCell = newCell;
	}

								//движение карты
	exports.move = function (cardName, currCell, targetCell) {
		
		if(Cell.getCellStatus(targetCell) == "empty"){
			Cell.setCellEmpty(currCell);
			Cell.unsetCellEmpty(targetCell);
			this.currCell = targetCell;
		}
		else if(Cell.getCellStatus(targetCell) == "notEmpty"){
			this.attack(currCell, targetCell);
		}
	}

								//атака карты на карту
	exports.attack = function (currCell, targetCell) {

		var attackCard = Cell.getCardInfo(currCell);   //атакующая карта
		var targetCard = Cell.getCardInfo(targetCell); //обороняющаяся карта

		attackCard.currHealth -= targetCard.power; //потеря здоровья атакующей картой
		targetCard.CurrHealth -= attackCard.power; //потеря здоровья обороняющейся картой

		if(attackCard.currHealth <= 0){ //если здоровье атакующей карты закончилось (атака отбита)
			attackCard.death();
			Cell.setCellEmpty(currCell);
		}

		if(targetCard.currHealth <= 0){ //если здоровье обороняющейся карты закончилось (атака успешна)
			targetCard.death();
			Cell.setCellEmpty(currCell);
			attackCard.currCell = targetCell;
		}
	}

								//исчезновение карты с поля
	exports.death = function () {
		this.currStatus = "death";
	}
