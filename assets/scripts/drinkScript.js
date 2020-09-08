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
//---Whiskey Drinks
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
			bourbonDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = bourbon.drinks[0].strDrinkThumb;
			bourbonDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(bourbon.drinks[0][`strIngredient${i}`] == null || bourbon.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = bourbon.drinks[0][`strMeasure${i}`] + ': ' + bourbon.drinks[0][`strIngredient${i}`];
				bourbonDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = bourbon.drinks[0].strInstructions;
				bourbonDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + bourbon.drinks[0].strGlass;
				bourbonDiv.appendChild(glassType);
				let bourbonBr = document.createElement("br");
                bourbonDiv.appendChild(bourbonBr);
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
			rumDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = rum.drinks[0].strDrinkThumb;
			rumDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(rum.drinks[0][`strIngredient${i}`] == null || rum.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = rum.drinks[0][`strMeasure${i}`] + ': ' + rum.drinks[0][`strIngredient${i}`];
				rumDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = rum.drinks[0].strInstructions;
				rumDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + rum.drinks[0].strGlass;
				rumDiv.appendChild(glassType);
				let rumBr = document.createElement("br");
                rumDiv.appendChild(rumBr);
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
			tequilaDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = tequila.drinks[0].strDrinkThumb;
			tequilaDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(tequila.drinks[0][`strIngredient${i}`] == null || tequila.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = tequila.drinks[0][`strMeasure${i}`] + ': ' + tequila.drinks[0][`strIngredient${i}`];
				tequilaDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = tequila.drinks[0].strInstructions;
				tequilaDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + tequila.drinks[0].strGlass;
				tequilaDiv.appendChild(glassType);
				let tequilaBr = document.createElement("br");
                tequilaDiv.appendChild(tequilaBr);
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
			vodkaDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = vodka.drinks[0].strDrinkThumb;
			vodkaDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(vodka.drinks[0][`strIngredient${i}`] == null || vodka.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = vodka.drinks[0][`strMeasure${i}`] + ': ' + vodka.drinks[0][`strIngredient${i}`];
				vodkaDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = vodka.drinks[0].strInstructions;
				vodkaDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
				vodkaDiv.appendChild(glassType);
				let vodkaBr = document.createElement("br");
                vodkaDiv.appendChild(vodkaBr);
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
			ginDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = gin.drinks[0].strDrinkThumb;
			ginDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(gin.drinks[0][`strIngredient${i}`] == null || gin.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = gin.drinks[0][`strMeasure${i}`] + ': ' + gin.drinks[0][`strIngredient${i}`];
				ginDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = gin.drinks[0].strInstructions;
				ginDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
				ginDiv.appendChild(glassType);
				let ginBr = document.createElement("br");
                ginDiv.appendChild(ginBr);
			})

		}
		})
})

//-----Random Cocktail------
var randomBtn = document.getElementById("btn6");
randomBtn.addEventListener("click", function() {
$.ajax({
	url: randomCocktail,
	method: "GET"
})
.then(function (random) {
	console.log(random.drinks[0]);
	let randomDiv = document.getElementById("drinkDiv")
	let drinkName = document.createElement('h2');
	drinkName.innerHTML = random.drinks[0].strDrink;
	randomDiv.appendChild(drinkName);
	let img = document.createElement('img');
	img.src = random.drinks[0].strDrinkThumb;
	randomDiv.appendChild(img);
	for(let i=1; i<16; i++) {
		console.log();
		if(random.drinks[0][`strIngredient${i}`] == null || random.drinks[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = random.drinks[0][`strMeasure${i}`] + ': ' + random.drinks[0][`strIngredient${i}`];
		randomDiv.appendChild(ingredient);
		}
		let instructionPara = document.createElement("p");
		instructionPara.innerHTML = random.drinks[0].strInstructions;
		randomDiv.appendChild(instructionPara);
		let glassType = document.createElement("p");
		glassType.innerHTML = "Serve drink in a " + random.drinks[0].strGlass;
		randomDiv.appendChild(glassType);
		let randomBr = document.createElement("br");
    	randomDiv.appendChild(randomBr);
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
			ingrSearchDiv.appendChild(drinkName);
			let img = document.createElement('img');
			img.src = ingrSearch.drinks[0].strDrinkThumb;
			ingrSearchDiv.appendChild(img);
			for(let i=1; i<16; i++) {
				console.log();
				if(ingrSearch.drinks[0][`strIngredient${i}`] == null || ingrSearch.drinks[0][`strIngredient${i}`] == '' ) {
					break;
				}
				let ingredient = document.createElement('li');
				ingredient.innerHTML = ingrSearch.drinks[0][`strMeasure${i}`] + ': ' + ingrSearch.drinks[0][`strIngredient${i}`];
				ingrSearchDiv.appendChild(ingredient);
				}
				let instructionPara = document.createElement("p");
				instructionPara.innerHTML = ingrSearch.drinks[0].strInstructions;
				ingrSearchDiv.appendChild(instructionPara);
				let glassType = document.createElement("p");
				glassType.innerHTML = "Serve drink in a " + ingrSearch.drinks[0].strGlass;
				ingrSearchDiv.appendChild(glassType);
				let instructionBr = document.createElement("br");
                ingrSearchDiv.appendChild(instructionBr);
			})

		}
		})
});


