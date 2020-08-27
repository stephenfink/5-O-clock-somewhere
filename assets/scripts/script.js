// this is my JS for the sake of getting console log.

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

console.log(drinks[0])
console.log(drinks[1])
console.log(drinks[2])
console.log(drinks[3])
console.log(drinks[4])
console.log(drinks[5])
console.log(drinks[6])