function countResourceNumber(item) {
	
	var listOfRes = [];
	
	if(item.type == 'SrcIngr'){
		listOfRes.push(item);
	}
	if(item.type == 'ItemIngr'){
		processRecipe(listOfRes, item.recipe);
	}
	
	return listOfRes;	
};



function processRecipe(recs, recipe){
		var ingrs = recipe.ingridients;
		for ( var i = 0; i < ingrs.length; i++) {
			if(ingrs[i].type == 'SrcIngr'){
				addToList(recs, ingrs[i]);
			}
			if(ingrs[i].type == 'ItemIngr'){
				processRecipe(recs, ingrs[i].recipe);
			}
		}
		
}


function addToList(arr, ingr) {
	var isFound = false;
	for ( var i = 0; i < arr.length; i++) {
		if(arr[i].name == ingr.name){
			arr[i].quantity += ingr.quantity;
			isFound = true;
			break;
		}
	}
	if(isFound == false){
		arr.push(ingr);
	}
}

function printResourceSummary(item) {
	var arr = countResourceNumber(item);
	document.writeln("<br>Для производства : " + item.name + " потребуется");
	for ( var i = 0; i < arr.length; i++) {
		document.writeln("<br>" + arr[i].name + ": " + arr[i].quantity + "");
	}
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