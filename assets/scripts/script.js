// this is my JS for the sake of getting console log.
//catergories list
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list" 
//glasses
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list"
//ingredients
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list"
//alcoholic filters
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list"

//this is a test exmaple
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "3ef48bec08msh4ca648e32eb8d00p144008jsnd9c733aaf1ee"
	}
}
$.ajax(settings).done(function (response) {
	console.log(response);
});


//drinks are in array
//this wil need to double check functions on console logs

console.log(object.drinks[0])
console.log(drinks[1])
console.log(drinks[2])
console.log(drinks[3])
console.log(drinks[4])
console.log(drinks[5])
console.log(drinks[6])
//end of test example

//the button set up: this should save the data collected by user
//that data is saved for the Ajax function via local storage

var whiskeyBtn = getelementbyID("#whiskeyButton")
$(whiskeyBtn).on("click", function(){
	console.log(whiskeyBtn)
    //when i click this button it will show whiskey
    //from most used there old fashion, 
    //wiskey sour, wiskey coke, random
    //add a random whiskey drink
})


var rumBtn = getelementbyID("#rumButton")
$(rumBtn).on("click", function(){
	console.log(rumBtn)
    //when i click this it gives me the rum options
    //add random rum drink
})

var lightRumBtn = getelementbyID("#lightRumButton")
$(lightRumBtn).on("click", function(){
    //this will give light rum drinks
    //random 
})

//we need a button to let the script to know the user stop sel drink ingred.s 
// so it will show what kind of drink it has made, or errors


//this is from our api code Snippets to set up the api parts of it
// we need 12 vars and then ajax for 


// This should be the ajax function to pull the data from the apis
var alcoholicFilters
var ingredients
var drinkImage
var categories
var searchBar = getElementbyID("#searchBarInput") // this equals to a value that the users types in
var userInput = ""
//api for categories list
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "93edb3a2f6msh0fbac3bf66ebae6p15bb2djsn6920073de5e9"
	}
}
// example of a ajax set up for getting data from api
$.ajax({
	
}).then(function(response){
	console.log(response);



// the .then of collecting and JSON ingredients into a var via object
 var drinkName = response.strDrinkThumb
var ingredient1 = strIngredient1
var ingredient2=  strIngredient2
var ingredient3 = strIngredient3
var ingredient4 = strIngredient4
var ingredient5 = strIngredient5
var ingredient6 = strIngredient6
var ingredient7 = strIngredient7
var ingredient8 = strIngredient8
var ingredient9 = strIngredient9
var ingredient10 = strIngredient10
var ingredient11 = strIngredient11
var ingredient12 = strIngredient12
var ingredient13 = strIngredient13
var ingredient14 = strIngredient14
var ingredient15 = strIngredient15
var measure1 = strMeasure1
var measure2 = strMeasure2
var measure3 = strMeasure3
var measure4 = strMeasure4
var measure5 = strMeasure5
var measure6 = strMeasure6
var measure7 = strMeasure7
var measure8 = strMeasure8
var measure9 = strMeasure9
var measure10 = strMeasure10
var measure11 = strMeasure11
var measure12 = strMeasure12
var measure13 = strMeasure13
var measure14 = strMeasure14
var measure15 = strMeasure15

})

//need to make a possible way of listing ingredients 
//this list should have selectors or a search bar to give user input
//








//this is still in works to add the results page 
//this appends the drink and how to make with info is posted
//this is almost done:

	function drinkResults(){
		
		//this is use for the image
		
		var img = document.createElement("image")
		img.src = cocktail.drinks[0].strDrinkTumb;

		drinkSection.appendChild(img);
		/* */ 
		//jQuery appending divs but will change late on
		//this is the image prepend
		$("#finalImage").prepend(img)
		//this is the ingreidents and how to add them this is an example
		// loop is needed also
		("#eachIngreident").append("<ul>" + text strIngredient[i] + "</ul>")
		//measurements this needs a for each or for loop
		("#eachIngreidentM").append("<ul>" + measure[i] + "</ul>")
		
		//this is the list of each step, in which needs to be a number list
		//
		$("#steps").append("<li>" + + "<li>");
	}

// the $("#id that carries the div for display").empty(); lets the inter phase clear of any past holdings

//will need $("#sameid").append()("<div class=something like container> then fill it with divs
// after close it with ") "")


//we want the how to text to be the last along with image
// IFs are when the project is finish with the base functions
    // IF we get done with base use the local storage and email api to user
    //IF we have time we add the 21 or older if not then results = apple juice


// we need images for wiskey, rum, etc for our short cut buttons
// how to user select ingredients from array so we can pick which ones we want
//also how to caught errors if user picks too many or not enough
// if a user picks A ingredient then it text gets added to the top 
//between the drink core and ingred selector

//user then can count. to pick until the "See what the result button is"
// will need to show a results of an error to tell the user that 
//they need to change some ingred types

//the results should show the top three drinks used with most ingred 
//to least but only up to 5 depending on drink



//with the api and data use is follows:

//each drink has these data types: example
/*
idDrink": "178329",
"strDrink": "Captain Kidd's Punch", --needed
"strDrinkAlternate": null,
"strDrinkES": null,
"strDrinkDE": null,
"strDrinkFR": null,
"strDrinkZH-HANS": null,
"strDrinkZH-HANT": null,
"strTags": null,
"strVideo": null,
"strCategory": "Cocktail", -- needed
"strIBA": null,
"strAlcoholic": "Alcoholic", --need?
"strGlass": "Collins glass", --need?
"strInstructions": "Mix all ingredients together in a shaker 
	and strain into a collins glass. Use Caribbean dark Rum for a sweeter taste.", --needed
"strInstructionsES": null,
"strInstructionsDE": null,
"strInstructionsFR": null,
"strInstructionsZH-HANS": null,
"strInstructionsZH-HANT": null,
"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg", --eeded
"strIngredient1": "Rum", -- need
"strIngredient2": "Lime Juice", --need
"strIngredient3": "Egg White", --need
"strIngredient4": "Bitters", ------ these listing are needed for all drinks
"strIngredient5": "Sugar", ------ these listing are needed for all drinks
"strIngredient6": "Nutmeg", ------ these listing are needed for all drinks
"strIngredient7": "", ------ these listing are needed for all drinks
"strIngredient8": null, ------ these listing are needed for all drinks
"strIngredient9": null, ------ these listing are needed for all drinks
"strIngredient10": null, ------ these listing are needed for all drinks
"strIngredient11": null, ------ these listing are needed for all drinks
"strIngredient12": null, ------ these listing are needed for all drinks
"strIngredient13": null, ------ these listing are needed for all drinks
"strIngredient14": null, ------ these listing are needed for all drinks
"strIngredient15": null, ------ these listing are needed for all drinks
"strMeasure1": "2 shots", ------ these listing are needed for all drinks
"strMeasure2": "1 shot", ------ these listing are needed for all drinks
"strMeasure3": "1 shot", ------ these listing are needed for all drinks
"strMeasure4": "1 dash", ------ these listing are needed for all drinks
"strMeasure5": "Ground", ------ these listing are needed for all drinks
"strMeasure6": "Top", ------ these listing are needed for all drinks
"strMeasure7": "", ------ these listing are needed for all drinks
"strMeasure8": null, ------ these listing are needed for all drinks
"strMeasure9": null, ------ these listing are needed for all drinks
"strMeasure10": null, ------ these listing are needed for all drinks
"strMeasure11": null, ------ these listing are needed for all drinks
"strMeasure12": null, ------ these listing are needed for all drinks
"strMeasure13": null, ------ these listing are needed for all drinks
"strMeasure14": null, ------ these listing are needed for all drinks
"strMeasure15": null, ------ these listing are needed for all drinks
"strCreativeCommonsConfirmed": "Yes",
"dateModified": null
*/
//all things needed are we what plan to pull for our display and how we make it on screen


var popularCocktailsUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
var cocktailListURL = "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php"
var  randomCocktail = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
var filterAlcoholic = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic"
var vodkaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka"
var bourbonSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=bourbon"
var rumSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum"
var tequilaSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila"
var ginSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=gin"
let drinkID = "11145";
var drinkIdSearch = "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11009" ;
var vodkaDrinkID = ["17212", "12528", "12754", "11009"];


//---Vodka Drinks
var vodkaBtn = document.getElementById("btn4")
vodkaBtn.addEventListener("click", function() {
	$.ajax({
		url: drinkIdSearch,
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