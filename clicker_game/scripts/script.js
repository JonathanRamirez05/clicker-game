const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;
let clicksps = 0;



// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let blueDrink = new Building('Blue Drink', 1, 15, 'buyBlueDrink');
let yellowDrink = new Building('Yellow Drink', 8, 100, 'buyYellowDrink');
let orangeDrink = new Building('Orange Drink', 47, 1100, 'buyOrangeDrink');
let redDrink = new Building('Red Drink', 100, 12000, 'buyRedDrink');
let purpleDrink = new Building('Purple Drink', 1000, 50000, 'buyPurpleDrink');
let blackDrink = new Building('Black Drink', 5000, 2500000, 'buyBlackDrink');


// Manual click function
function scorePlusPlus() {
    score++;
}

//function cpsPlusPlus() {
  //  clicksps ++;
//}

// Increases the score by the current clicks-per-second
function incScore() {
    score += blueDrink.cps + yellowDrink.cps + orangeDrink.cps + redDrink.cps + purpleDrink.cps + blackDrink.cps;
}





// Updates the states of all the Building buttons
function updateButtons() {
    blueDrink.buttonState();
    yellowDrink.buttonState();
    orangeDrink.buttonState();
    redDrink.buttonState();
    purpleDrink.buttonState();
    blackDrink.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
        
    document.getElementById('clicksps').innerHTML =
        Math.floor(clicksps).toLocaleString();    
}

setInterval(updatePage, tickRate);
