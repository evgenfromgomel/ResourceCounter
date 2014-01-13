function getResourceNumber() {
	
}

function printItem(item){
	if(item.type == 'SrcIngr'){
		document.writeln("<br>Название предмета: " + item.name);
	}
	if(item.type == 'ItemIngr'){
		document.writeln("<br>Название предмета: " + item.name);
		document.writeln("<br>Количество на выходе: " + item.recipe.numOfOutput);
		document.writeln("<br>Составляющие ингридиенты:");
		for(var i = 0; i < item.recipe.ingridients.length; i++){
			document.writeln("<br>" + item.recipe.ingridients[i].name + " x " + item.recipe.ingridients[i].quantity);
		}
	}
	document.writeln("<br>");
}