var myNames = ["green", "red", "yellow", "blue"];
var level = 0;
var started = false;
var computerGivenPattern = [];
var userGivenPattern = [];

$(document).on("touchstart", function() {
	if(!started){
		$("h1").text("Level" + level);
		computerGame();
		started = true;
	}
});

$("button").on("touchstart", function(){
	var myButton = $(this).attr("id");
	playSound(myButton);
	createAnimation(myButton);
	userGivenPattern.push(myButton);
	answerChecker(userGivenPattern.length-1);
});

$(document).on("keydown", function(){
	if (!started){
		$("h1").text("Level " + level);
		computerGame();
		started = true;
	}


});

$("button").on("click", function(){
	var myButton = $(this).attr("id");
	playSound(myButton);
	createAnimation(myButton);
	userGivenPattern.push(myButton);
	answerChecker(userGivenPattern.length-1);
});



function computerGame(){
	userGivenPattern = [];
	level++;
	$("h1").text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var computerButton = myNames[randomNumber];
	computerGivenPattern.push(computerButton);
	playSound(computerButton);
	createAnimation(computerButton);
}



function answerChecker(myLevel){
	if(userGivenPattern[myLevel]===computerGivenPattern[myLevel]){
		if (userGivenPattern.length === computerGivenPattern.length){
			setTimeout(function(){
				computerGame();
			}, 1000);
		}
	}

	else
	{
		playSound("wrong");		
		$("h1").text("Game Over, Kiddo....Wanna Try Again?");
		$("body").addClass("game-over");
		setTimeout(function(){
		$("body").removeClass("game-over");
		}, 100);
		startOver();
	}
}


function startOver(){
	level = 0;
	computerGivenPattern = [];
	started = false;

}
function playSound(nameSound){
	new Audio("sounds/" + nameSound + ".mp3").play();
}
function createAnimation(nameAnimation){
	$("#" + nameAnimation).addClass("animation");
	setTimeout(function(){
		$("#" + nameAnimation).removeClass("animation");
},100);
    $("#" + nameAnimation).fadeIn(100).fadeOut(100).fadeIn(100);
}