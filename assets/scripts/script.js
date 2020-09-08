
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
var bourbonSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=bourbon"
//---Whiskey urls
var whiskeySearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11001" // old fashion
//---Rum urls
var rumSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=17267" // Bahama Mama
//---Tequila urls
var tequilaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=16984" // Radioactive Long Island icetea
//---Vodka urls 
var vodkaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=13072" // popped cherry
//---Gin urls
var ginSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=12402" // tom collins
//---Random url
var  randomCocktail = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
//---Glasses
$.ajax({
	url: glassesUrl,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Ingredients
$.ajax({
	url: ingredientsUrl,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//----Popular Cocktails
$.ajax({
	url: popularCocktailsUrl,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Latest Cocktails
$.ajax({
	url: cocktailListURL,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//----Alcoholic Drinks
$.ajax({
	url: filterAlcoholic,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Vodka Drink Search
$.ajax({
	url: vodkaSearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Bourbon Drink Search
$.ajax({
	url: bourbonSearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Rum Drink Search
$.ajax({
	url: rumSearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Tequila Drink Search
$.ajax({
	url: tequilaSearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Gin Drink Search
$.ajax({
	url: ginSearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---whiskey Drink Search
$.ajax({
	url: whiskeySearch,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---drinks are in array
//---this wil need to double check functions on console logs
//---end of test example
//---the button set up: this should save the data collected by user
//---that data is saved for the Ajax function via local storage
//---Whiskey Drinks
var WhiskeyBtn = document.getElementById("btn1")
WhiskeyBtn.addEventListener("click", function() {
	$.ajax({
		url: whiskeySearch,
		method: "GET"
	})
	.then(function (Whiskey) {
		console.log(Whiskey);
		let WhiskeyDiv = document.getElementById("drinkDiv")
	let drinkName = document.createElement('h2');
	drinkName.innerHTML = Whiskey.drinks[0].strDrink;
	WhiskeyDiv.appendChild(drinkName);
	let img = document.createElement('img');
	img.src = Whiskey.drinks[0].strDrinkThumb;
	WhiskeyDiv.appendChild(img);
	for(let i=1; i<16; i++) {
		console.log();
		if(Whiskey.drinks[0][`strIngredient${i}`] == null || Whiskey.drinks[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = Whiskey.drinks[0][`strMeasure${i}`] + ': ' + Whiskey.drinks[0][`strIngredient${i}`];
		WhiskeyDiv.appendChild(ingredient);
		}
		let instructionPara = document.createElement("p");
		instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
		WhiskeyDiv.appendChild(instructionPara);
		let glassType = document.createElement("p");
		glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
		WhiskeyDiv.appendChild(glassType);
		
		})
		
    })
//----Rum Drinks
var RumBtn = document.getElementById("btn2")
RumBtn.addEventListener("click", function() {
	$.ajax({
		url: rumSearch,
		method: "GET"
	})
	.then(function (Rum) {
		console.log(Rum);
		let RumDiv = document.getElementById("drinkDiv")
	let drinkName = document.createElement('h2');
	drinkName.innerHTML = Rum.drinks[0].strDrink;
	RumDiv.appendChild(drinkName);
	let img = document.createElement('img');
	img.src = Rum.drinks[0].strDrinkThumb;
	RumDiv.appendChild(img);
	for(let i=1; i<16; i++) {
		console.log();
		if(Rum.drinks[0][`strIngredient${i}`] == null || Rum.drinks[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = Rum.drinks[0][`strMeasure${i}`] + ': ' + Rum.drinks[0][`strIngredient${i}`];
		RumDiv.appendChild(ingredient);
		}
		let instructionPara = document.createElement("p");
		instructionPara.innerHTML = Rum.drinks[0].strInstructions;
		RumDiv.appendChild(instructionPara);
		let glassType = document.createElement("p");
		glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
		RumDiv.appendChild(glassType);
		
		})
		
    }) 
//---Tequila Drinks
var TequilaBtn = document.getElementById("btn3")
TequilaBtn.addEventListener("click", function() {
	$.ajax({
		url: tequilaSearch,
		method: "GET"
	})
		
	.then(function (Tequila) {
		console.log(Tequila);
		let TequilaDiv = document.getElementById("drinkDiv")
	let drinkName = document.createElement('h2');
	drinkName.innerHTML = Tequila.drinks[0].strDrink;
	TequilaDiv.appendChild(drinkName);
	let img = document.createElement('img');
	img.src = Tequila.drinks[0].strDrinkThumb;
	TequilaDiv.appendChild(img);
	for(let i=1; i<16; i++) {
		console.log();
		if(Tequila.drinks[0][`strIngredient${i}`] == null || Tequila.drinks[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = Tequila.drinks[0][`strMeasure${i}`] + ': ' + Tequila.drinks[0][`strIngredient${i}`];
		TequilaDiv.appendChild(ingredient);
		}
		let instructionPara = document.createElement("p");
		instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
		TequilaDiv.appendChild(instructionPara);
		let glassType = document.createElement("p");
		glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
		TequilaDiv.appendChild(glassType);
		
		})
		
    })
//---Vodka Drinks
var vodkaBtn = document.getElementById("btn4")
    vodkaBtn.addEventListener("click", function() {
        $.ajax({
            url: vodkaSearch,
            method: "GET"
        })
        .then(function (vodka) {
            console.log(vodka);
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
            
            })
            
        })
//---Gin drinks
var ginBtn = document.getElementById("btn5")
    ginBtn.addEventListener("click", function() {
        $.ajax({
            url: ginSearch,
            method: "GET"
        })
        .then(function (gin) {
            console.log(gin);
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
			})

		}
		})
});

