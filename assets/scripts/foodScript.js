//---Food dishes----------------------------------------------------------------------------------------------------------------------------------

//---Variables------

var randomDishes = "https://www.themealdb.com/api/json/v2/9973533/random.php"





//var foodIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + foodId;



var catagories = "https://www.themealdb.com/api/json/v2/9973533/categories.php"

//---Random Dish AJAX
$.ajax({
	url: randomDishes,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Catagories AJAX
$.ajax({
	url: catagories,
	method: "GET"
})
.then(function (response) {
	console.log(response);
})
//---Ingredient Search and produce food recipe from ingredient search
var foodIngredientInput = document.getElementById("foodIngredientInput");
document.querySelector('form.foodIngredientSearch').addEventListener('submit', function (event){
	event.preventDefault();
	var ingredient = foodIngredientInput.value;
	console.log(ingredient);
	var ingredientSearch = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
	$.ajax({
		url: ingredientSearch,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (ingredientSearch) {
            console.log(ingredientSearch.meals[0]);
            let ingredientSearchDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = ingredientSearch.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = ingredientSearch.meals[0].strMealThumb;
            let instructionBr = document.createElement("br");
            ingredientSearchDiv.prepend(instructionBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = ingredientSearch.meals[0].strInstructions;
            ingredientSearchDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(ingredientSearch.meals[0][`strIngredient${i}`] == null || ingredientSearch.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = ingredientSearch.meals[0][`strMeasure${i}`] + ': ' + ingredientSearch.meals[0][`strIngredient${i}`];
                ingredientSearchDiv.prepend(ingredient);
                }
                ingredientSearchDiv.prepend(img);
                ingredientSearchDiv.prepend(mealName);
            })
		}
		})
})
//-----Random Dish------
var randomDishBtn = document.getElementById("btn1");
randomDishBtn.addEventListener("click", function() {
$.ajax({
	url: randomDishes,
	method: "GET"
})
.then(function (random) {
	console.log(random.meals[0]);
	let randomDiv = document.getElementById("foodDiv")
	let mealName = document.createElement('h2');
	mealName.innerHTML = random.meals[0].strMeal;
	let img = document.createElement('img');
    img.src = random.meals[0].strMealThumb;
    let randomBr = document.createElement("br");
    randomDiv.prepend(randomBr);
    let instructionPara = document.createElement("p");
	instructionPara.innerHTML = random.meals[0].strInstructions;
    randomDiv.prepend(instructionPara);
	for(let i=1; i<21; i++) {
		console.log();
		if(random.meals[0][`strIngredient${i}`] == null || random.meals[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
        ingredient.innerHTML = random.meals[0][`strMeasure${i}`] + ': ' + random.meals[0][`strIngredient${i}`];
        randomDiv.prepend(ingredient);
		}
        randomDiv.prepend(img);
        randomDiv.prepend(mealName);
    })
})
//----Breakfast Dishes
var breakfastBtn = document.getElementById("btn2")
breakfastBtn.addEventListener("click", function() {
	event.preventDefault();
	var breakfastDishes = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=breakfast"
	$.ajax({
		url: breakfastDishes,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (breakfast) {
            console.log(breakfast.meals[0]);
            let breakfastDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = breakfast.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = breakfast.meals[0].strMealThumb;
            let breakfastBr = document.createElement("br");
            breakfastDiv.prepend(breakfastBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = breakfast.meals[0].strInstructions;
            breakfastDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(breakfast.meals[0][`strIngredient${i}`] == null || breakfast.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = breakfast.meals[0][`strMeasure${i}`] + ': ' + breakfast.meals[0][`strIngredient${i}`];
                breakfastDiv.prepend(ingredient);
                }
                breakfastDiv.prepend(img);
                breakfastDiv.prepend(mealName);
            })
		}
		})
    }) 

//----Beef Dishes
var beefBtn = document.getElementById("btn3")
beefBtn.addEventListener("click", function() {
	event.preventDefault();
	var beefDish = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=beef"
	$.ajax({
		url: beefDish,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (beef) {
            console.log(beef.meals[0]);
            let beefDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = beef.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = beef.meals[0].strMealThumb;
            let beefBr = document.createElement("br");
            beefDiv.prepend(beefBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = beef.meals[0].strInstructions;
            beefDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(beef.meals[0][`strIngredient${i}`] == null || beef.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = beef.meals[0][`strMeasure${i}`] + ': ' + beef.meals[0][`strIngredient${i}`];
                beefDiv.prepend(ingredient);
                }
                beefDiv.prepend(img);
                beefDiv.prepend(mealName);
            })
		}
		})
    })

//---Chicken Dishes
var chickenBtn = document.getElementById("btn4")
chickenBtn.addEventListener("click", function() {
	event.preventDefault();
	var chickenDish = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=chicken"
	$.ajax({
		url: chickenDish,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (chicken) {
            console.log(chicken.meals[0]);
            let chickenDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = chicken.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = chicken.meals[0].strMealThumb;
            let chickenBr = document.createElement("br");
            chickenDiv.prepend(chickenBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = chicken.meals[0].strInstructions;
            chickenDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(chicken.meals[0][`strIngredient${i}`] == null || chicken.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = chicken.meals[0][`strMeasure${i}`] + ': ' + chicken.meals[0][`strIngredient${i}`];
                chickenDiv.prepend(ingredient);
                }
                chickenDiv.prepend(img);
                chickenDiv.prepend(mealName);
            })
		}
		})
    })

//---Dessert Dishes
var dessertBtn = document.getElementById("btn5")
dessertBtn.addEventListener("click", function() {
	event.preventDefault();
	var dessertDishes = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=dessert"
	$.ajax({
		url: dessertDishes,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (dessert) {
            console.log(dessert.meals[0]);
            let dessertDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = dessert.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = dessert.meals[0].strMealThumb;
            let dessertBr = document.createElement("br");
            dessertDiv.prepend(dessertBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = dessert.meals[0].strInstructions;
            dessertDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(dessert.meals[0][`strIngredient${i}`] == null || dessert.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = dessert.meals[0][`strMeasure${i}`] + ': ' + dessert.meals[0][`strIngredient${i}`];
                dessertDiv.prepend(ingredient);
                }
                dessertDiv.prepend(img);
                dessertDiv.prepend(mealName);
            })
		}
		})
    }) 
 
//---Pork Dishes
var porkBtn = document.getElementById("btn6")
porkBtn.addEventListener("click", function() {
	event.preventDefault();
	var porkDish = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=pork"
	$.ajax({
		url: porkDish,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (pork) {
            console.log(pork.meals[0]);
            let porkDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = pork.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = pork.meals[0].strMealThumb;
            let porkBr = document.createElement("br");
            porkDiv.prepend(porkBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = pork.meals[0].strInstructions;
            porkDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(pork.meals[0][`strIngredient${i}`] == null || pork.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = pork.meals[0][`strMeasure${i}`] + ': ' + pork.meals[0][`strIngredient${i}`];
                porkDiv.prepend(ingredient);
                }
                porkDiv.prepend(img);
                porkDiv.prepend(mealName);
            })
		}
		})
    }) 

//---Seafood Dishes
var seafoodBtn = document.getElementById("btn7")
seafoodBtn.addEventListener("click", function() {
	event.preventDefault();
	var seafoodDishes = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Seafood"
	$.ajax({
		url: seafoodDishes,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (seafood) {
            console.log(seafood.meals[0]);
            let seafoodDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = seafood.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = seafood.meals[0].strMealThumb;
            let seafoodBr = document.createElement("br");
            seafoodDiv.prepend(seafoodBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = seafood.meals[0].strInstructions;
            seafoodDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(seafood.meals[0][`strIngredient${i}`] == null || seafood.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = seafood.meals[0][`strMeasure${i}`] + ': ' + seafood.meals[0][`strIngredient${i}`];
                seafoodDiv.prepend(ingredient);
                }
                seafoodDiv.prepend(img);
                seafoodDiv.prepend(mealName);
            })
		}
		})
    }) 

//---Soup Dishes
var soupBtn = document.getElementById("btn8")
soupBtn.addEventListener("click", function() {
	event.preventDefault();
	var SoupDishes = "https://www.themealdb.com/api/json/v2/9973533/search.php?s=soup"
	$.ajax({
		url: SoupDishes,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (soup) {
            console.log(soup.meals[0]);
            let soupDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = soup.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = soup.meals[0].strMealThumb;
            let soupBr = document.createElement("br");
            soupDiv.prepend(soupBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = soup.meals[0].strInstructions;
            soupDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(soup.meals[0][`strIngredient${i}`] == null || soup.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = soup.meals[0][`strMeasure${i}`] + ': ' + soup.meals[0][`strIngredient${i}`];
                soupDiv.prepend(ingredient);
                }
                soupDiv.prepend(img);
                soupDiv.prepend(mealName);
            })
		}
		})	
    }) 
 
//---Vegetarian Dishes
var vegetarianBtn = document.getElementById("btn9")
vegetarianBtn.addEventListener("click", function() {
	event.preventDefault();
	var vegetarianDishes = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=vegetarian"
	$.ajax({
		url: vegetarianDishes,
		method: "GET"
	})
	.then(function (response) {
		for (i=0; i < response.meals.length; i++) {
		var mealId = response.meals[i].idMeal
		console.log(mealId);
		var mealIdSearch = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealId
		$.ajax({
			url: mealIdSearch,
			method: "GET"
		})
		.then(function (vegetarian) {
            console.log(vegetarian.meals[0]);
            let vegetarianDiv = document.getElementById("foodDiv")
            let mealName = document.createElement('h2');
            mealName.innerHTML = vegetarian.meals[0].strMeal;
            let img = document.createElement('img');
            img.src = vegetarian.meals[0].strMealThumb;
            let vegetarianBr = document.createElement("br");
            vegetarianDiv.prepend(vegetarianBr);
            let instructionPara = document.createElement("p");
            instructionPara.innerHTML = vegetarian.meals[0].strInstructions;
            vegetarianDiv.prepend(instructionPara);
            for(let i=1; i<21; i++) {
                console.log();
                if(vegetarian.meals[0][`strIngredient${i}`] == null || vegetarian.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = vegetarian.meals[0][`strMeasure${i}`] + ': ' + vegetarian.meals[0][`strIngredient${i}`];
                vegetarianDiv.prepend(ingredient);
                }
                vegetarianDiv.prepend(img);
                vegetarianDiv.prepend(mealName);
            })
		}
		})		
    }) 
 
   
