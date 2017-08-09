

class Cell{

	constructor(cellName, cellXpos, cellYpos){
		this.cellName = cellName;
		this.cellXpos = cellXpos;
		this.cellYpos = cellYpos;
		this.cellStatus = "empty";
	}

								//освобождение ячейки
	setCellEmpty(cellName) {
		this.cellStatus = "empty";
	}

								//занятие ячейки
	unsetCellEmpty(cellName) {
		this.cellStatus = "notEmpty";
	}

								//проверка статуса ячейки
	function getCellStatus(cellName) {
		return this.cellStatus;
	}

								//параметры карты на ячейке
	function getCardInfo(cellName) {
		if(this.getCellStatus(cellName) == "notEmpty"){
			//выбрать карту по currCell и возвратить ее объект
			return card;
		}else if(this.getCellStatus(cellName) == "empty"){
			//карта отсутствует на ячейке
			return false;
		}
	}

}