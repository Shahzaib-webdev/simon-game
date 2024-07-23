let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[nextSequence()];
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
gamePattern.push(randomChosenColour);

