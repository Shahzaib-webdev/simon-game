let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}




//sound playing funciton



function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}
nextSequence();



// adding event listeners to buttons

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);

    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    animatePress(userChosenColor);
})


// pressed animation function

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#" + currentColor).removeClass("pressed");
    },100);
}

