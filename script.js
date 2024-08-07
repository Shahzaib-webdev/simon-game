let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

var level = 1;

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#level-title").html("Level " + level);
    level++;
    playSound(randomChosenColour);
    userClickedPattern = [];
}




//sound playing funciton



function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}


// adding event listeners to buttons

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);

    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    animatePress(userChosenColor);

    var currentLevel = userClickedPattern.length - 1;
    checkAnswer(currentLevel);
})


// pressed animation function

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#" + currentColor).removeClass("pressed");
    },100);
}

// detecting when a key is pressed

$(document).keydown(function(event){
    nextSequence();
});



// to check if the answers are same 

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        $("#level-title").html("Game Over, Press Any Key To Restart");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}


// resetting values in case of game over 

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 1;
}