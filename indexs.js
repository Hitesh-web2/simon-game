var buttonColours =["red","green","blue","yellow"];
var gamePattern= [];
var userClickedPattern= [];

var started = false;
var level = 0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("level"+level);
    nextSequence();
    stared = true;
  }
});
$(".btn").click(function(){
  var userChosencolour = $(this).attr("id");
  userClickedpattern.push(userChosencolour);
  playSound(userChosencolour)
  animationPress(userChosenPattern);
  checkAnswer(userClickedpattern.length-1);
});

function checkAnswer(currentLevel){
if (gamepattern[currentlevel]=== userClickedPattern[currentLevel]){
if  (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
    nextSequence();
         }, 1000);
      }
} else {
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Gmae Over, Press Any Key to Return");

  setTimeout(function(){
    $("body").removeClass("game-over")
  }, 200);
  startOver();
}
}

function nextSequence(){
  userClickedPattern =[];
  level++;
  $("#level-title").text("level"+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosencolour = buttoncolours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+ randomChosenColour).fadeIn(100)FadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentcolour)  {
  $("#"+ currentcolour).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentcolour).removeClass("pressed")
  },100);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
