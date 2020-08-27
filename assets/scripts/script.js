// this is my JS for the sake of getting console log.
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
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


//the button set up

var whiskeyBtn = getelementbyID("#whiskeybutton")
$(whiskeyBtn).on("click", function(){
    //when i click this button it will show whiskey
    //from most used there old fashion, 
    //wiskey sour, wiskey coke, random
    //add a random whiskey drink
})


var rumBtn = getelementbyID("#rumButton")
$(rumBtn).on("click", function(){
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

$.ajax(settings).done(function (response) {
	console.log(response);
});


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
