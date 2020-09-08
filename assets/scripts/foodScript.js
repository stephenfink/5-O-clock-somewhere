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
            ingredientSearchDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = ingredientSearch.meals[0].strMealThumb;
            ingredientSearchDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(ingredientSearch.meals[0][`strIngredient${i}`] == null || ingredientSearch.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = ingredientSearch.meals[0][`strMeasure${i}`] + ': ' + ingredientSearch.meals[0][`strIngredient${i}`];
                ingredientSearchDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = ingredientSearch.meals[0].strInstructions;
                ingredientSearchDiv.appendChild(instructionPara);
                let instructionBr = document.createElement("br");
                ingredientSearchDiv.appendChild(instructionBr);
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
	randomDiv.appendChild(mealName);
	let img = document.createElement('img');
	img.src = random.meals[0].strMealThumb;
	randomDiv.appendChild(img);
	for(let i=1; i<21; i++) {
		console.log();
		if(random.meals[0][`strIngredient${i}`] == null || random.meals[0][`strIngredient${i}`] == '' ) {
			break;
		}
		let ingredient = document.createElement('li');
		ingredient.innerHTML = random.meals[0][`strMeasure${i}`] + ': ' + random.meals[0][`strIngredient${i}`];
		randomDiv.appendChild(ingredient);
		}
		let instructionPara = document.createElement("p");
		instructionPara.innerHTML = random.meals[0].strInstructions;
        randomDiv.appendChild(instructionPara);
        let randomBr = document.createElement("br");
        randomDiv.appendChild(randomBr);
    })
})

//----Beef Dishes
var beefBtn = document.getElementById("btn2")
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
            beefDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = beef.meals[0].strMealThumb;
            beefDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(beef.meals[0][`strIngredient${i}`] == null || beef.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = beef.meals[0][`strMeasure${i}`] + ': ' + beef.meals[0][`strIngredient${i}`];
                beefDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = beef.meals[0].strInstructions;
                beefDiv.appendChild(instructionPara);
                let beefBr = document.createElement("br");
                beefDiv.appendChild(beefBr);
            })

		}
		})
		
    }) 
//----Breakfast Dishes
var breakfastBtn = document.getElementById("btn3")
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
            breakfastDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = breakfast.meals[0].strMealThumb;
            breakfastDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(breakfast.meals[0][`strIngredient${i}`] == null || breakfast.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = breakfast.meals[0][`strMeasure${i}`] + ': ' + breakfast.meals[0][`strIngredient${i}`];
                breakfastDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = breakfast.meals[0].strInstructions;
                breakfastDiv.appendChild(instructionPara);
                let breakfastBr = document.createElement("br");
                breakfastDiv.appendChild(breakfastBr);
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
            chickenDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = chicken.meals[0].strMealThumb;
            chickenDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(chicken.meals[0][`strIngredient${i}`] == null || chicken.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = chicken.meals[0][`strMeasure${i}`] + ': ' + chicken.meals[0][`strIngredient${i}`];
                chickenDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = chicken.meals[0].strInstructions;
                chickenDiv.appendChild(instructionPara);
                let chickenBr = document.createElement("br");
                chickenDiv.appendChild(chickenBr);
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
            dessertDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = dessert.meals[0].strMealThumb;
            dessertDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(dessert.meals[0][`strIngredient${i}`] == null || dessert.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = dessert.meals[0][`strMeasure${i}`] + ': ' + dessert.meals[0][`strIngredient${i}`];
                dessertDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = dessert.meals[0].strInstructions;
                dessertDiv.appendChild(instructionPara);
                let dessertBr = document.createElement("br");
                dessertDiv.appendChild(dessertBr);
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
            porkDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = pork.meals[0].strMealThumb;
            porkDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(pork.meals[0][`strIngredient${i}`] == null || pork.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = pork.meals[0][`strMeasure${i}`] + ': ' + pork.meals[0][`strIngredient${i}`];
                porkDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = pork.meals[0].strInstructions;
                porkDiv.appendChild(instructionPara);
                let porkBr = document.createElement("br");
                porkDiv.appendChild(porkBr);
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
            seafoodDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = seafood.meals[0].strMealThumb;
            seafoodDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(seafood.meals[0][`strIngredient${i}`] == null || seafood.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = seafood.meals[0][`strMeasure${i}`] + ': ' + seafood.meals[0][`strIngredient${i}`];
                seafoodDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = seafood.meals[0].strInstructions;
                seafoodDiv.appendChild(instructionPara);
                let seafoodBr = document.createElement("br");
                seafoodDiv.appendChild(seafoodBr);
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
            soupDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = soup.meals[0].strMealThumb;
            soupDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(soup.meals[0][`strIngredient${i}`] == null || soup.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = soup.meals[0][`strMeasure${i}`] + ': ' + soup.meals[0][`strIngredient${i}`];
                soupDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = soup.meals[0].strInstructions;
                soupDiv.appendChild(instructionPara);
                let soupBr = document.createElement("br");
                soupDiv.appendChild(soupBr);
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
            vegetarianDiv.appendChild(mealName);
            let img = document.createElement('img');
            img.src = vegetarian.meals[0].strMealThumb;
            vegetarianDiv.appendChild(img);
            for(let i=1; i<21; i++) {
                console.log();
                if(vegetarian.meals[0][`strIngredient${i}`] == null || vegetarian.meals[0][`strIngredient${i}`] == '' ) {
                    break;
                }
                let ingredient = document.createElement('li');
                ingredient.innerHTML = vegetarian.meals[0][`strMeasure${i}`] + ': ' + vegetarian.meals[0][`strIngredient${i}`];
                vegetarianDiv.appendChild(ingredient);
                }
                let instructionPara = document.createElement("p");
                instructionPara.innerHTML = vegetarian.meals[0].strInstructions;
                vegetarianDiv.appendChild(instructionPara);
                let vegetarianBr = document.createElement("br");
                vegetarianDiv.appendChild(vegetarianBr);
            })

		}
		})
		
    }) 
 
   
