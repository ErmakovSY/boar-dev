
								//освобождение ячейки
	exports.setCellEmpty = function (cellName) {
		this.cellStatus = "empty";
	}

								//занятие ячейки
	exports.unsetCellEmpty = function (cellName) {
		this.cellStatus = "notEmpty";
	}

								//проверка статуса ячейки
	exports.getCellStatus = function (cellName) {
		return this.cellStatus;
	}

								//параметры карты на ячейке
	exports.getCardInfo = function (cellName) {
		if(this.getCellStatus(cellName) == "notEmpty"){
			//выбрать карту по currCell и возвратить ее объект
			return card;
		}else if(this.getCellStatus(cellName) == "empty"){
			//карта отсутствует на ячейке
			return false;
		}
	}