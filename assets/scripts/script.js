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

var popularCocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
var cocktailListURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";
var filterAlcoholic =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic";
var bourbonSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=bourbon";
var drinkIdSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11009";
// whiskey urls
var whiskeySearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=whiskey";
var whiskeySearch1 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11001"; // old fashion
var whiskeySearch2 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178310"; // Brooklyn
var whiskeySearch3 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14087"; //  Red Snapper
var whiskeySearch4 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 16419"; //  avalanche
var whiskeySearch5 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11021"; //  allegheny

// rum urls
var rumSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum";
var rumSearch1 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=17267"; // Bahama Mama
var rumSearch2 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178320"; // banana cream pi
var rumSearch3 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14642"; //  grim reaper
var rumSearch4 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17191"; //  planter's punch
var rumSearch5 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11288"; //  cuba libre

//tequila urls
var tequilaSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila";
var tequilaSearch1 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=16984"; // Radioactive Long Island icetea
var tequilaSearch2 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11118"; // blue margarita
var tequilaSearch3 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17216"; // tommy's margarita
var tequilaSearch4 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 178307"; // tequila slammer
var tequilaSearch5 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14602"; // tequila surprise

// vodka urls
var vodkaSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka";
var vodkaSearch1 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=13072"; // popped cherry
var vodkaSearch2 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14029"; // '57 Chevy with a White Licene Plate
var vodkaSearch3 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11462"; // Harvey Wallbanger
var vodkaSearch4 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 14622"; // arctic fish
var vodkaSearch5 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17252"; // grey hound

// gin urls
var ginSearch =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=gin";
var ginSearch1 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=12402"; // tom collins
var ginSearch2 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11415"; // Gin sling
var ginSearch3 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17208"; // Rose
var ginSearch4 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 11054"; // arthur tompkins
var ginSearch5 =
  "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i= 17186"; // clover club

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
//this wil need to double check functions on console logs

//end of test example

//the button set up: this should save the data collected by user
//that data is saved for the Ajax function via local storage

// whiskey button

//old fashion
var WhiskeyBtn = document.getElementById("wbtn1");
WhiskeyBtn.addEventListener("click", function () {
  $.ajax({
    url: whiskeySearch1,
    method: "GET",
  }).then(function (Whiskey) {
    console.log(Whiskey);
    let WhiskeyDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Whiskey.drinks[0].strDrink;
    WhiskeyDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Whiskey.drinks[0].strDrinkThumb;
    WhiskeyDiv.appendChild(img);

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
      WhiskeyDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.appendChild(glassType);
  });
});

// Brooklyn
var WhiskeyBtn = document.getElementById("wbtn2");
WhiskeyBtn.addEventListener("click", function () {

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
    WhiskeyDiv.appendChild(img);

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
      WhiskeyDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.appendChild(glassType);
  });
});

// red snapper

var WhiskeyBtn = document.getElementById("wbtn3");
WhiskeyBtn.addEventListener("click", function () {

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
    WhiskeyDiv.appendChild(img);

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
      WhiskeyDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.appendChild(glassType);
  });
});

// Avalanche

var WhiskeyBtn = document.getElementById("wbtn4");
WhiskeyBtn.addEventListener("click", function () {
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
    WhiskeyDiv.appendChild(img);

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
      WhiskeyDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.appendChild(glassType);
  });
});

//Allegheny

var WhiskeyBtn = document.getElementById("wbtn5");
WhiskeyBtn.addEventListener("click", function () {
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
    WhiskeyDiv.appendChild(img);

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
      WhiskeyDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Whiskey.drinks[0].strInstructions;
    WhiskeyDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Whiskey.drinks[0].strGlass;
    WhiskeyDiv.appendChild(glassType);
  });
});

// rum button

// Bahama Mama

var RumBtn = document.getElementById("rbtn1");
RumBtn.addEventListener("click", function () {
  $.ajax({
    url: rumSearch1,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    RumDiv.appendChild(img);

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
      RumDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.appendChild(glassType);
  });
});

// Banana Cream Pi
var RumBtn = document.getElementById("rbtn2");
RumBtn.addEventListener("click", function () {
  $.ajax({
    url: rumSearch2,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    RumDiv.appendChild(img);

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
      RumDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.appendChild(glassType);
  });
});

// Grim Reaper

var RumBtn = document.getElementById("rbtn3");
RumBtn.addEventListener("click", function () {
  $.ajax({
    url: rumSearch3,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    RumDiv.appendChild(img);

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
      RumDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.appendChild(glassType);
  });
});

// PLanter's Punch

var RumBtn = document.getElementById("rbtn4");
RumBtn.addEventListener("click", function () {
  $.ajax({
    url: rumSearch4,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    RumDiv.appendChild(img);

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
      RumDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.appendChild(glassType);
  });
});

// Cuba Libre

var RumBtn = document.getElementById("rbtn5");
RumBtn.addEventListener("click", function () {
  $.ajax({
    url: rumSearch5,
    method: "GET",
  }).then(function (Rum) {
    console.log(Rum);
    let RumDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Rum.drinks[0].strDrink;
    RumDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Rum.drinks[0].strDrinkThumb;
    RumDiv.appendChild(img);

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
      RumDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Rum.drinks[0].strInstructions;
    RumDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Rum.drinks[0].strGlass;
    RumDiv.appendChild(glassType);
  });
});


// tequila button

// Radioactive Longisland Ice Tea
var TequilaBtn = document.getElementById("tbtn1");
TequilaBtn.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch1,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    TequilaDiv.appendChild(img);

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
      TequilaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.appendChild(glassType);
  });
});

//Blue Margarita
var TequilaBtn = document.getElementById("tbtn2");
TequilaBtn.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch2,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    TequilaDiv.appendChild(img);

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
      TequilaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.appendChild(glassType);
  });
});

// Tommy's Margarita
var TequilaBtn = document.getElementById("tbtn3");
TequilaBtn.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch3,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    TequilaDiv.appendChild(img);

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
      TequilaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.appendChild(glassType);
  });
});

//Tequila slammer
var TequilaBtn = document.getElementById("tbtn4");
TequilaBtn.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch4,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    TequilaDiv.appendChild(img);

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
      TequilaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.appendChild(glassType);
  });
});

//Tequila surprise
var TequilaBtn = document.getElementById("tbtn5");
TequilaBtn.addEventListener("click", function () {
  $.ajax({
    url: tequilaSearch5,
    method: "GET",
  }).then(function (Tequila) {
    console.log(Tequila);
    let TequilaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = Tequila.drinks[0].strDrink;
    TequilaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = Tequila.drinks[0].strDrinkThumb;
    TequilaDiv.appendChild(img);

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
      TequilaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = Tequila.drinks[0].strInstructions;
    TequilaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + Tequila.drinks[0].strGlass;
    TequilaDiv.appendChild(glassType);
  });
});

//---Vodka Drinks

// Popped Cherry
var vodkaBtn = document.getElementById("vbtn1");
vodkaBtn.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch1,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    vodkaDiv.appendChild(img);

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
      vodkaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.appendChild(glassType);
  });
});

// '57 Chevy with a White license Plate
var vodkaBtn = document.getElementById("vbtn2");
vodkaBtn.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch2,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    vodkaDiv.appendChild(img);

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
      vodkaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.appendChild(glassType);
  });
});

// Harvey Wallbanger
var vodkaBtn = document.getElementById("vbtn3");
vodkaBtn.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch3,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    vodkaDiv.appendChild(img);

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
      vodkaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.appendChild(glassType);
  });
});

//Artic Fish
var vodkaBtn = document.getElementById("vbtn4");
vodkaBtn.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch4,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    vodkaDiv.appendChild(img);

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
      vodkaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.appendChild(glassType);
  });
});

//Grey Hound
var vodkaBtn = document.getElementById("vbtn5");
vodkaBtn.addEventListener("click", function () {
  $.ajax({
    url: vodkaSearch5,
    method: "GET",
  }).then(function (vodka) {
    console.log(vodka);
    let vodkaDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = vodka.drinks[0].strDrink;
    vodkaDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = vodka.drinks[0].strDrinkThumb;
    vodkaDiv.appendChild(img);

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
      vodkaDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = vodka.drinks[0].strInstructions;
    vodkaDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + vodka.drinks[0].strGlass;
    vodkaDiv.appendChild(glassType);
  });
});

// Gin drinks

//
var ginBtn = document.getElementById("gbtn1");
ginBtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch1,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    ginDiv.appendChild(img);

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
      ginDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.appendChild(glassType);
  });
});

//
var ginBtn = document.getElementById("gbtn2");
ginBtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch2,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    ginDiv.appendChild(img);

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
      ginDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.appendChild(glassType);
  });
});

//
var ginBtn = document.getElementById("gbtn3");
ginBtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch3,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    ginDiv.appendChild(img);

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
      ginDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.appendChild(glassType);
  });
});

//
var ginBtn = document.getElementById("gbtn4");
ginBtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch4,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    ginDiv.appendChild(img);

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
      ginDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.appendChild(glassType);
  });
});

//
var ginBtn = document.getElementById("gbtn5");
ginBtn.addEventListener("click", function () {
  $.ajax({
    url: ginSearch5,
    method: "GET",
  }).then(function (gin) {
    console.log(gin);
    let ginDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = gin.drinks[0].strDrink;
    ginDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = gin.drinks[0].strDrinkThumb;
    ginDiv.appendChild(img);

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
      ginDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = gin.drinks[0].strInstructions;
    ginDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + gin.drinks[0].strGlass;
    ginDiv.appendChild(glassType);
  });
});



//-----Random Cocktail------
var randomBtn = document.getElementById("btn6");
randomBtn.addEventListener("click", function () {
  $.ajax({
    url: randomCocktail,
    method: "GET",
  }).then(function (random) {
    console.log(random.drinks[0]);
    let randomDiv = document.getElementById("drinkDiv");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = random.drinks[0].strDrink;
    randomDiv.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = random.drinks[0].strDrinkThumb;
    randomDiv.appendChild(img);

    for (let i = 1; i < 16; i++) {
      console.log();
      if (
        random.drinks[0][`strIngredient${i}`] == null ||
        random.drinks[0][`strIngredient${i}`] == ""
      ) {
        break;
      }
      let ingredient = document.createElement("li");
      ingredient.innerHTML =
        random.drinks[0][`strMeasure${i}`] +
        ": " +
        random.drinks[0][`strIngredient${i}`];
      randomDiv.appendChild(ingredient);
    }
    let instructionPara = document.createElement("p");
    instructionPara.innerHTML = random.drinks[0].strInstructions;
    randomDiv.appendChild(instructionPara);
    let glassType = document.createElement("p");
    glassType.innerHTML = "Serve drink in a " + random.drinks[0].strGlass;
    randomDiv.appendChild(glassType);
  });
});
// search bar
