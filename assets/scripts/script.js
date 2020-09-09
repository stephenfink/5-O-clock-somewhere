


// this is my JS for the sake of getting console log.
//catergories list
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list";
//glasses
var glassesURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list";
//ingredients
var ingredientsURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list";
//alcoholic filters
url = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list";

var popularCocktailsUrl ="https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
var cocktailListURL ="https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";
var filterAlcoholic ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic";
var bourbonSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=bourbon";
var drinkIdSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11009";
// whiskey urls
var whiskeySearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=whiskey";
var whiskeySearch1 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11001"; // old fashion
var whiskeySearch2 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178310"; // Brooklyn
var whiskeySearch3 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14087"; //  Red Snapper
var whiskeySearch4 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 16419"; //  avalanche
var whiskeySearch5 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11021"; //  allegheny

// rum urls
var rumSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum";
var rumSearch1 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=17267"; // Bahama Mama
var rumSearch2 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178320"; // banana cream pi
var rumSearch3 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14642"; //  grim reaper
var rumSearch4 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17191"; //  planter's punch
var rumSearch5 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11288"; //  cuba libre

//tequila urls
var tequilaSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila";
var tequilaSearch1 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=16984"; // Radioactive Long Island icetea
var tequilaSearch2 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11118"; // blue margarita
var tequilaSearch3 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17216"; // tommy's margarita
var tequilaSearch4 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178307"; // tequila slammer
var tequilaSearch5 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14602"; // tequila surprise

// vodka urls
var vodkaSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka";
var vodkaSearch1 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=13072"; // popped cherry
var vodkaSearch2 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14029"; // '57 Chevy with a White Licene Plate
var vodkaSearch3 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11462"; // Harvey Wallbanger
var vodkaSearch4 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14622"; // arctic fish
var vodkaSearch5 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17252"; // grey hound

// gin urls
var ginSearch ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=gin";
var ginSearch1 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=12402"; // tom collins
var ginSearch2 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11415"; // Gin sling
var ginSearch3 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17208"; // Rose
var ginSearch4 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11054"; // arthur tompkins
var ginSearch5 ="https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17186"; // clover club


// random url
var randomCocktail =
  "https://www.thecocktaildb.com/api/json/v2/9973533/random.php";

//---Glasses
$.ajax({
  url: glassesURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//---Ingredients
$.ajax({
  url: ingredientsURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//----Popular Cocktails
$.ajax({
  url: popularCocktailsUrl,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Latest Cocktails
$.ajax({
  url: cocktailListURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//----Alcoholic Drinks
$.ajax({
  url: filterAlcoholic,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Vodka Drink Search
$.ajax({
  url: vodkaSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Bourbon Drink Search
$.ajax({
  url: bourbonSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Rum Drink Search
$.ajax({
  url: rumSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Tequila Drink Search
$.ajax({
  url: tequilaSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Gin Drink Search
$.ajax({
  url: ginSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---whiskey Drink Search
$.ajax({
  url: whiskeySearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
//---Drink ID Search
$.ajax({
  url: drinkIdSearch,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//drinks are in array
//this will need to double check functions on console logs

//end of test example

//the button set up: this should save the data collected by user
//that data is saved for the Ajax function via local storage

//---Whiskey Drink---------------------------------------------------------

//---Old Fashion
var wbtn1 = document.getElementById("wbtn1");
wbtn1.addEventListener("click", function () {

  $.ajax({
    url: whiskeySearch1,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    let WhiskeyBr = document.createElement("br");
    WhiskeyDiv.prepend(WhiskeyBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Whiskey.drinks[0][`strIngredient${i}`] == null ||
        Whiskey.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Whiskey.drinks[0][`strMeasure${i}`] +
        ": " +
        Whiskey.drinks[0][`strIngredient${i}`];
      WhiskeyDiv.prepend(ingredient);
    }
    WhiskeyDiv.prepend(img);
    WhiskeyDiv.prepend(drinkName);
  });
});

//---Brooklyn
var wbtn2 = document.getElementById("wbtn2")
wbtn2.addEventListener("click", function () {
  $.ajax({
    url: whiskeySearch2,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    WhiskeyDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    let WhiskeyBr = document.createElement("br");
    WhiskeyDiv.prepend(WhiskeyBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Whiskey.drinks[0][`strIngredient${i}`] == null ||
        Whiskey.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Whiskey.drinks[0][`strMeasure${i}`] +
        ": " +
        Whiskey.drinks[0][`strIngredient${i}`];
      WhiskeyDiv.prepend(ingredient);
    }
    WhiskeyDiv.prepend(img);
    WhiskeyDiv.prepend(drinkName);
  });
});


//---Red Snapper
var wbtn3 = document.getElementById("wbtn3");
wbtn3.addEventListener("click", function () {
  $.ajax({
    url: whiskeySearch3,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    WhiskeyDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    let WhiskeyBr = document.createElement("br");
    WhiskeyDiv.prepend(WhiskeyBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Whiskey.drinks[0][`strIngredient${i}`] == null ||
        Whiskey.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Whiskey.drinks[0][`strMeasure${i}`] +
        ": " +
        Whiskey.drinks[0][`strIngredient${i}`];
      WhiskeyDiv.prepend(ingredient);
    }
    WhiskeyDiv.prepend(img);
    WhiskeyDiv.prepend(drinkName);
  });
});


//---Avalanche
var wbtn4 = document.getElementById("wbtn4");
wbtn4.addEventListener("click", function () {
  $.ajax({
    url: whiskeySearch4,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    WhiskeyDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    let WhiskeyBr = document.createElement("br");
    WhiskeyDiv.prepend(WhiskeyBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Whiskey.drinks[0][`strIngredient${i}`] == null ||
        Whiskey.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Whiskey.drinks[0][`strMeasure${i}`] +
        ": " +
        Whiskey.drinks[0][`strIngredient${i}`];
      WhiskeyDiv.prepend(ingredient);
    }
    WhiskeyDiv.prepend(img);
    WhiskeyDiv.prepend(drinkName);
  });
});


//---Allegheny
var wbtn5 = document.getElementById("wbtn5");
wbtn5.addEventListener("click", function () {
  $.ajax({
    url: whiskeySearch5,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    WhiskeyDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    let WhiskeyBr = document.createElement("br");
    WhiskeyDiv.prepend(WhiskeyBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Whiskey.drinks[0][`strIngredient${i}`] == null ||
        Whiskey.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Whiskey.drinks[0][`strMeasure${i}`] +
        ": " +
        Whiskey.drinks[0][`strIngredient${i}`];
      WhiskeyDiv.prepend(ingredient);
    }
    WhiskeyDiv.prepend(img);
    WhiskeyDiv.prepend(drinkName);
  });
});

//---Rum Drinks---------------------------------------------

//---Bahama Mama
var rbtn1 = document.getElementById("rbtn1");
rbtn1.addEventListener("click", function () {

  $.ajax({
    url: rumSearch1,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv2");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    let RumBr = document.createElement("br");
    RumDiv.prepend(RumBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Rum.drinks[0][`strIngredient${i}`] == null ||
        Rum.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Rum.drinks[0][`strMeasure${i}`] +
        ": " +
        Rum.drinks[0][`strIngredient${i}`];
      RumDiv.prepend(ingredient);
    }
    RumDiv.prepend(img);
    RumDiv.prepend(drinkName);
  });
});

//---Banana Cream Pi
var rbtn2 = document.getElementById("rbtn2");
rbtn2.addEventListener("click", function () {
  $.ajax({
    url: rumSearch2,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv2");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    let RumBr = document.createElement("br");
    RumDiv.prepend(RumBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Rum.drinks[0][`strIngredient${i}`] == null ||
        Rum.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Rum.drinks[0][`strMeasure${i}`] +
        ": " +
        Rum.drinks[0][`strIngredient${i}`];
      RumDiv.prepend(ingredient);
    }
    RumDiv.prepend(img);
    RumDiv.prepend(drinkName);
  });
});

//---Grim Reaper
var rbtn3 = document.getElementById("rbtn3");
rbtn3.addEventListener("click", function () {
  $.ajax({
    url: rumSearch3,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv2");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    let RumBr = document.createElement("br");
    RumDiv.prepend(RumBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Rum.drinks[0][`strIngredient${i}`] == null ||
        Rum.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Rum.drinks[0][`strMeasure${i}`] +
        ": " +
        Rum.drinks[0][`strIngredient${i}`];
      RumDiv.prepend(ingredient);
    }
    RumDiv.prepend(img);
    RumDiv.prepend(drinkName);
  });
});

//---Planter's Punch
var rbtn4 = document.getElementById("rbtn4");
rbtn4.addEventListener("click", function () {
  $.ajax({
    url: rumSearch4,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv2");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    let RumBr = document.createElement("br");
    RumDiv.prepend(RumBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Rum.drinks[0][`strIngredient${i}`] == null ||
        Rum.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Rum.drinks[0][`strMeasure${i}`] +
        ": " +
        Rum.drinks[0][`strIngredient${i}`];
      RumDiv.prepend(ingredient);
    }
    RumDiv.prepend(img);
    RumDiv.prepend(drinkName);
  });
});

//---Cuba Libre
var rbtn4 = document.getElementById("rbtn5");
rbtn4.addEventListener("click", function () {
  $.ajax({
    url: rumSearch5,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv2");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    let RumBr = document.createElement("br");
    RumDiv.prepend(RumBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Rum.drinks[0][`strIngredient${i}`] == null ||
        Rum.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Rum.drinks[0][`strMeasure${i}`] +
        ": " +
        Rum.drinks[0][`strIngredient${i}`];
      RumDiv.prepend(ingredient);
    }
    RumDiv.prepend(img);
    RumDiv.prepend(drinkName);
  });
});


//---Tequila Drinks---------------------------------------------------------


//---Radioactive Longisland Ice Tea
var tbtn1 = document.getElementById("tbtn1");
tbtn1.addEventListener("click", function () {

  $.ajax({
    url: tequilaSearch1,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);

    let TequilaDiv = document.getElementById("drinkDiv3");

    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    let TequilaBr = document.createElement("br");
    TequilaDiv.prepend(TequilaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Tequila.drinks[0][`strIngredient${i}`] == null ||
        Tequila.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Tequila.drinks[0][`strMeasure${i}`] +
        ": " +
        Tequila.drinks[0][`strIngredient${i}`];
      TequilaDiv.prepend(ingredient);
    }
    TequilaDiv.prepend(img);
    TequilaDiv.prepend(drinkName);
  });
});

//---Blue Margarita
var tbtn2 = document.getElementById("tbtn2");
tbtn2.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch2,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv3");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    let TequilaBr = document.createElement("br");
    TequilaDiv.prepend(TequilaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Tequila.drinks[0][`strIngredient${i}`] == null ||
        Tequila.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Tequila.drinks[0][`strMeasure${i}`] +
        ": " +
        Tequila.drinks[0][`strIngredient${i}`];
      TequilaDiv.prepend(ingredient);
    }
    TequilaDiv.prepend(img);
    TequilaDiv.prepend(drinkName);
  });
});

//---Tommy's Margarita
var tbtn3 = document.getElementById("tbtn3");
tbtn3.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch3,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv3");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    let TequilaBr = document.createElement("br");
    TequilaDiv.prepend(TequilaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Tequila.drinks[0][`strIngredient${i}`] == null ||
        Tequila.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Tequila.drinks[0][`strMeasure${i}`] +
        ": " +
        Tequila.drinks[0][`strIngredient${i}`];
      TequilaDiv.prepend(ingredient);
    }
    TequilaDiv.prepend(img);
    TequilaDiv.prepend(drinkName);
  });
});

//---Tequila slammer
var tbtn4 = document.getElementById("tbtn4");
tbtn4.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch4,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv3");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    let TequilaBr = document.createElement("br");
    TequilaDiv.prepend(TequilaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Tequila.drinks[0][`strIngredient${i}`] == null ||
        Tequila.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Tequila.drinks[0][`strMeasure${i}`] +
        ": " +
        Tequila.drinks[0][`strIngredient${i}`];
      TequilaDiv.prepend(ingredient);
    }
    TequilaDiv.prepend(img);
    TequilaDiv.prepend(drinkName);
  });
});

//---Tequila surprise
var tbtn5 = document.getElementById("tbtn5");
tbtn5.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch5,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv3");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    let TequilaBr = document.createElement("br");
    TequilaDiv.prepend(TequilaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        Tequila.drinks[0][`strIngredient${i}`] == null ||
        Tequila.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        Tequila.drinks[0][`strMeasure${i}`] +
        ": " +
        Tequila.drinks[0][`strIngredient${i}`];
      TequilaDiv.prepend(ingredient);
    }
    TequilaDiv.prepend(img);
    TequilaDiv.prepend(drinkName);
  });
});

//---Vodka Drinks---------------------------------------------------------

//---Popped Cherry
var vbtn1 = document.getElementById("vbtn1");
vbtn1.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch1,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv4");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    let vodkaBr = document.createElement("br");
    vodkaDiv.prepend(vodkaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        vodka.drinks[0][`strIngredient${i}`] == null ||
        vodka.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        vodka.drinks[0][`strMeasure${i}`] +
        ": " +
        vodka.drinks[0][`strIngredient${i}`];
      vodkaDiv.prepend(ingredient);
    }
    vodkaDiv.prepend(img);
    vodkaDiv.prepend(drinkName);
  });
});

//---'57 Chevy with a White license Plate
var vbtn2 = document.getElementById("vbtn2");
vbtn2.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch2,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv4");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    let vodkaBr = document.createElement("br");
    vodkaDiv.prepend(vodkaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        vodka.drinks[0][`strIngredient${i}`] == null ||
        vodka.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        vodka.drinks[0][`strMeasure${i}`] +
        ": " +
        vodka.drinks[0][`strIngredient${i}`];
      vodkaDiv.prepend(ingredient);
    }
    vodkaDiv.prepend(img);
    vodkaDiv.prepend(drinkName);
  });
});

//---Harvey Wallbanger
var vbtn3 = document.getElementById("vbtn3");
vbtn3.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch3,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv4");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    let vodkaBr = document.createElement("br");
    vodkaDiv.prepend(vodkaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        vodka.drinks[0][`strIngredient${i}`] == null ||
        vodka.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        vodka.drinks[0][`strMeasure${i}`] +
        ": " +
        vodka.drinks[0][`strIngredient${i}`];
      vodkaDiv.prepend(ingredient);
    }
    vodkaDiv.prepend(img);
    vodkaDiv.prepend(drinkName);
  });
});

//---Artic Fish
var vbtn4 = document.getElementById("vbtn4");
vbtn4.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch4,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv4");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    let vodkaBr = document.createElement("br");
    vodkaDiv.prepend(vodkaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        vodka.drinks[0][`strIngredient${i}`] == null ||
        vodka.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        vodka.drinks[0][`strMeasure${i}`] +
        ": " +
        vodka.drinks[0][`strIngredient${i}`];
      vodkaDiv.prepend(ingredient);
    }
    vodkaDiv.prepend(img);
    vodkaDiv.prepend(drinkName);
  });
});

//---Grey Hound
var vbtn5 = document.getElementById("vbtn5");
vbtn5.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch5,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv4");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    let vodkaBr = document.createElement("br");
    vodkaDiv.prepend(vodkaBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        vodka.drinks[0][`strIngredient${i}`] == null ||
        vodka.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        vodka.drinks[0][`strMeasure${i}`] +
        ": " +
        vodka.drinks[0][`strIngredient${i}`];
      vodkaDiv.prepend(ingredient);
    }
    vodkaDiv.prepend(img);
    vodkaDiv.prepend(drinkName);
  });
});

//---Gin drinks---------------------------------------------------

//---Tom Collins
var gbtn1 = document.getElementById("gbtn1");
gbtn1.addEventListener("click", function () {
  $.ajax({
    url: ginSearch1,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv5");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    let ginBr = document.createElement("br");
    ginDiv.prepend(ginBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        gin.drinks[0][`strIngredient${i}`] == null ||
        gin.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        gin.drinks[0][`strMeasure${i}`] +
        ": " +
        gin.drinks[0][`strIngredient${i}`];
      ginDiv.prepend(ingredient);
    }
    ginDiv.prepend(img);
    ginDiv.prepend(drinkName);
  });
});

//---Gin Sling
var gbtn2 = document.getElementById("gbtn2");
gbtn2.addEventListener("click", function () {
  $.ajax({
    url: ginSearch2,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv5");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    let ginBr = document.createElement("br");
    ginDiv.prepend(ginBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        gin.drinks[0][`strIngredient${i}`] == null ||
        gin.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        gin.drinks[0][`strMeasure${i}`] +
        ": " +
        gin.drinks[0][`strIngredient${i}`];
      ginDiv.prepend(ingredient);
    }
    ginDiv.prepend(img);
    ginDiv.prepend(drinkName);
  });
});

//---Rose
var gbtn = document.getElementById("gbtn3");
gbtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch3,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv5");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    let ginBr = document.createElement("br");
    ginDiv.prepend(ginBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        gin.drinks[0][`strIngredient${i}`] == null ||
        gin.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        gin.drinks[0][`strMeasure${i}`] +
        ": " +
        gin.drinks[0][`strIngredient${i}`];
      ginDiv.prepend(ingredient);
    }
    ginDiv.prepend(img);
    ginDiv.prepend(drinkName);
  });
});

//---Arthur Tompkins
var gbtn4 = document.getElementById("gbtn4");
gbtn4.addEventListener("click", function () {
  $.ajax({
    url: ginSearch4,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv5");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    let ginBr = document.createElement("br");
    ginDiv.prepend(ginBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        gin.drinks[0][`strIngredient${i}`] == null ||
        gin.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        gin.drinks[0][`strMeasure${i}`] +
        ": " +
        gin.drinks[0][`strIngredient${i}`];
      ginDiv.prepend(ingredient);
    }
    ginDiv.prepend(img);
    ginDiv.prepend(drinkName);
  });
});

//---Clover Club
var gbtn5 = document.getElementById("gbtn5");
gbtn5.addEventListener("click", function () {
  $.ajax({
    url: ginSearch5,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv5");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.prepend(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    let ginBr = document.createElement("br");
    ginDiv.prepend(ginBr);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.prepend(glassType);
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.prepend(instructionPara);
    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        gin.drinks[0][`strIngredient${i}`] == null ||
        gin.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        gin.drinks[0][`strMeasure${i}`] +
        ": " +
        gin.drinks[0][`strIngredient${i}`];
      ginDiv.prepend(ingredient);
    }
    ginDiv.prepend(img);
    ginDiv.prepend(drinkName);
  });
});

