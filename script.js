let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[nextSequence()];
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
gamePattern.push(randomChosenColour);

console.log(gamePattern[0]);


const color = gamePattern[0];
const audio = new Audio(`sounds/${color}.mp3`);

$(".btn").click(function(){
    switch(color) {
        case "red":
        case "blue":
        case "green":
        case "yellow":
            $(`#${color}`).fadeOut(100).fadeIn(100);
            audio.play();
            break;
    }
    gamePattern.pop(randomChosenColour);
})

