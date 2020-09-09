//---Cocktail Drinks-------------------------------------------------------------------------------------------------------------------------------------------------------
//---Catergories List
var catUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list" 
//---Glasses List
 var glassesUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list"
//---Ingredient List
 var ingredientsUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list"
//alcoholic filters
var url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list"
var popularCocktailsUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
var cocktailListURL = "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php"
var filterAlcoholic = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic"
//---Bourbon Drinks
var bourbonBtn = document.getElementById("btn1")
bourbonBtn.addEventListener("click", function() {
	event.preventDefault();
	var bourbonSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=bourbon"
	$.ajax({
		url: bourbonSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (bourbon) {
			console.log(bourbon.drinks[0]);
			let bourbonDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = bourbon.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = bourbon.drinks[0].strDrinkThumb;
			let bourbonBr = document.createElement("br");
			bourbonDiv.prepend(bourbonBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + bourbon.drinks[0].strGlass;
			bourbonDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = bourbon.drinks[0].strInstructions;
			bourbonDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(bourbon.drinks[0][`strIngredient${i}`] == null || bourbon.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = bourbon.drinks[0][`strMeasure${i}`] + ': ' + bourbon.drinks[0][`strIngredient${i}`];
				bourbonDiv.prepend(ingredient);
				}
				bourbonDiv.prepend(img);
				bourbonDiv.prepend(drinkName);
			})
		}
		})
})
//----Rum Drinks
var RumBtn = document.getElementById("btn2")
RumBtn.addEventListener("click", function() {
	event.preventDefault();
	var rumSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum"
	$.ajax({
		url: rumSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (rum) {
			console.log(rum.drinks[0]);
			let rumDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = rum.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = rum.drinks[0].strDrinkThumb;
			let rumBr = document.createElement("br");
			rumDiv.prepend(rumBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + rum.drinks[0].strGlass;
			rumDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = rum.drinks[0].strInstructions;
			rumDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(rum.drinks[0][`strIngredient${i}`] == null || rum.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = rum.drinks[0][`strMeasure${i}`] + ': ' + rum.drinks[0][`strIngredient${i}`];
				rumDiv.prepend(ingredient);
				}
				rumDiv.prepend(img);
				rumDiv.prepend(drinkName);
			})
		}
		})
})

//---Tequila Drinks
var TequilaBtn = document.getElementById("btn3")
TequilaBtn.addEventListener("click", function() {
	event.preventDefault();
	var tequilaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila"
	$.ajax({
		url: tequilaSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (tequila) {
			console.log(tequila.drinks[0]);
			let tequilaDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = tequila.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = tequila.drinks[0].strDrinkThumb;
			let tequilaBr = document.createElement("br");
			tequilaDiv.prepend(tequilaBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + tequila.drinks[0].strGlass;
			tequilaDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = tequila.drinks[0].strInstructions;
			tequilaDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(tequila.drinks[0][`strIngredient${i}`] == null || tequila.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = tequila.drinks[0][`strMeasure${i}`] + ': ' + tequila.drinks[0][`strIngredient${i}`];
				tequilaDiv.prepend(ingredient);
				}
				tequilaDiv.prepend(img);
				tequilaDiv.prepend(drinkName);	
			})
		}
		})
})

//---Vodka Drinks
var vodkaBtn = document.getElementById("btn4")
vodkaBtn.addEventListener("click", function() {
	event.preventDefault();
	var vodkaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=vodka"
	$.ajax({
		url: vodkaSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (vodka) {
			console.log(vodka.drinks[0]);
			let vodkaDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = vodka.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = vodka.drinks[0].strDrinkThumb;
			let vodkaBr = document.createElement("br");
			vodkaDiv.prepend(vodkaBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
			vodkaDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = vodka.drinks[0].strInstructions;
			vodkaDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(vodka.drinks[0][`strIngredient${i}`] == null || vodka.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = vodka.drinks[0][`strMeasure${i}`] + ': ' + vodka.drinks[0][`strIngredient${i}`];
				vodkaDiv.prepend(ingredient);
				}
				vodkaDiv.prepend(img);
				vodkaDiv.prepend(drinkName);
				
				
			})
		}
		})
})
    
//---Gin drinks
var ginBtn = document.getElementById("btn5")
ginBtn.addEventListener("click", function() {
	event.preventDefault();
	var ginSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=gin"
	$.ajax({
		url: ginSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (gin) {
			console.log(gin.drinks[0]);
			let ginDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = gin.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = gin.drinks[0].strDrinkThumb;
			let ginBr = document.createElement("br");
			ginDiv.prepend(ginBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
			ginDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = gin.drinks[0].strInstructions;
			ginDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(gin.drinks[0][`strIngredient${i}`] == null || gin.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = gin.drinks[0][`strMeasure${i}`] + ': ' + gin.drinks[0][`strIngredient${i}`];
				ginDiv.prepend(ingredient);
				}
				ginDiv.prepend(img);
				ginDiv.prepend(drinkName);
			})
		}
		})
})

//-----Random Cocktail------
var randomBtn = document.getElementById("btn6");
randomBtn.addEventListener("click", function() {
var  randomCocktail = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
$.ajax({
	url: randomCocktail,
	method: "GET"
})
.then(function (random) {
	console.log(random.drinks[0]);
	let randomDiv = document.getElementById("drinkDiv")
	let drinkName = document.createElement('h2');
	drinkName.innerHTML = random.drinks[0].strDrink;
	let img = document.createElement('img');
	img.src = random.drinks[0].strDrinkThumb;
	let randomBr = document.createElement("br");
	randomDiv.prepend(randomBr);
	let glassType = document.createElement("p");
	glassType.innerHTML = "Serve drink in a " + random.drinks[0].strGlass;
	randomDiv.prepend(glassType);
	let instructionPara = document.createElement("p");
	instructionPara.innerHTML = random.drinks[0].strInstructions;
	randomDiv.prepend(instructionPara);
	for(let i=1; i<16; i++) {
		console.log();
		if(random.drinks[0][`strIngredient${i}`] == null || random.drinks[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = random.drinks[0][`strMeasure${i}`] + ': ' + random.drinks[0][`strIngredient${i}`];
		randomDiv.prepend(ingredient);
		}
		randomDiv.prepend(img);
		randomDiv.prepend(drinkName);	
	})	
})

//---Ingredient Search and produce cocktail from ingredient search
var ingredientInput = document.getElementById("ingredientInput");
document.querySelector('form.ingredientSearch').addEventListener('submit', function (event){
	event.preventDefault();
	var ingredient = ingredientInput.value;
	console.log(ingredient);
	var ingredientSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredient;
	$.ajax({
		url: ingredientSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.drinks.length; i++) {
		var drinkId = response.drinks[i].idDrink
		console.log(drinkId);
		var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + drinkId
		$.ajax({
			url: drinkIdSearch,
			method: "GET"
		})
		.then(function (ingrSearch) {
			console.log(ingrSearch.drinks[0]);
			let ingrSearchDiv = document.getElementById("drinkDiv")
			let drinkName = document.createElement('h2');
			drinkName.innerHTML = ingrSearch.drinks[0].strDrink;
			let img = document.createElement('img');
			img.src = ingrSearch.drinks[0].strDrinkThumb;
			let instructionBr = document.createElement("br");
			ingrSearchDiv.prepend(instructionBr);
			let glassType = document.createElement("p");
			glassType.innerHTML = "Serve drink in a " + ingrSearch.drinks[0].strGlass;
			ingrSearchDiv.prepend(glassType);
			let instructionPara = document.createElement("p");
			instructionPara.innerHTML = ingrSearch.drinks[0].strInstructions;
			ingrSearchDiv.prepend(instructionPara);
			for(let i=1; i<16; i++) {
				console.log();
				if(ingrSearch.drinks[0][`strIngredient${i}`] == null || ingrSearch.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = ingrSearch.drinks[0][`strMeasure${i}`] + ': ' + ingrSearch.drinks[0][`strIngredient${i}`];
				ingrSearchDiv.prepend(ingredient);
				}
				ingrSearchDiv.prepend(img);
				ingrSearchDiv.prepend(drinkName);	
			})
		}
		})
});