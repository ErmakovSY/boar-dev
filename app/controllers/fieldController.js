

class fieldController(){

								//формируем поле из ячеек
	buildField() {
		var x, y;
		for (x = 1; x < 6; x++) { //координаты по вертикали
			for (y = 3; y < 8; y++){ //координаты по горизонтали

				if(y > 5){ //середина поля
					var k = 1;
					y -= k * 2; //уменьшаем ширину каждого следующего ряда поля
					k++;
				}
				
				var cellName = "cell" + x + y; //формируем имя ячейки, наподобие cell32
				var cell = new Cell(cellName, x, y); //создаем обьект ячейки - Cell
			}
		}
	}
								//удаление обьектов ячеек из памяти
	destroyField() {
		// body...
	}

}