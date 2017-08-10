

class Card extends Cell{

	constructor(cardName, desc, health, power, price, currHealth, currCell, currStatus){
		this.cardName = cardName;
		this.desc = desc;
		this.health = health;
		this.power = power;
		this.price = price;
		this.currHealth = currHealth;
		this.currCell = currCell;
		this.currStatus = currStatus;
	}
								//создание карты в БД
	exports.create = function (card, cb) {
    	db.get().collection('cards').insert(card, function (err, result) {
    		cb(err, result);
    	});
	}


								//появление карты на поле
	appair() {            
		super.unsetCellEmpty(currCell);
		this.currStatus = "live";	
	}

								//присваивание карте ячейки
	setCell(currCell) {
		this.currCell = currCell;
	}

								//изменение ячейки картой
	changeCell(currCell, newCell) {
		this.currCell = newCell;
	}

								//движение карты
	move(cardName, currCell, targetCell) {
		
		if(super.getCellStatus(targetCell) == "empty"){
			super.setCellEmpty(currCell);
			super.unsetCellEmpty(targetCell);
			this.currCell = targetCell;
		}
		else if(super.getCellStatus(targetCell) == "notEmpty"){
			this.attack(currCell, targetCell);
		}
	}

								//атака карты на карту
	attack(currCell, targetCell) {

		var attackCard = super.getCardInfo(currCell);   //атакующая карта
		var targetCard = super.getCardInfo(targetCell); //обороняющаяся карта

		attackCard.currHealth -= targetCard.power; //потеря здоровья атакующей картой
		targetCard.CurrHealth -= attackCard.power; //потеря здоровья обороняющейся картой

		if(attackCard.currHealth <= 0){ //если здоровье атакующей карты закончилось (атака отбита)
			attackCard.death();
			super.setCellEmpty(currCell);
		}

		if(targetCard.currHealth <= 0){ //если здоровье обороняющейся карты закончилось (атака успешна)
			targetCard.death();
			super.setCellEmpty(currCell);
			attackCard.currCell = targetCell;
		}
	}

								//исчезновение карты с поля
	death() {
		this.currStatus = "death";
	}
}