var pScore = 0;
var cScore = 0;

var moves = [
  {
    name: "rock",
    beats: "scissors",
    beats2: "lizard"
  },

  {
    name: "paper",
    beats: "rock",
    beats2: "spock"
  },

  {
    name: "scissors",
    beats: "paper",
    beats2: "lizard"
  },

  {
    name: "lizard",
    beats: "spock",
    beats2: "paper"
  },

  {
    name: "spock",
    beats: "rock",
    beats2: "paper"
  }
];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function AIMove(){
  var move = moves[getRandomInt(0,4)];
  console.log("AI throws " + move.name);
  return move;
}
function getPlayerMove(){
  var getMove = prompt("What move do you want to throw? 'rock', 'paper', 'scissors', 'lizard' or 'spock' " || 'rock');
  var move = moves.find(function (move){
     return move.name == getMove;
   });
  console.log("Player throws " + move.name);
  return move;
}
function checkThrow(compT, playerT){
  if((playerT.beats || playerT.beats2) == compT.name){
    pScore += 1;
    alert("Player wins. Score is " + pScore + " to " + cScore);
  }else if (playerT.name == (compT.beats || comptT.beats2)) {
  cScore += 1;
    alert("AI wins. Score is " + pScore + " to " + cScore);
  }else{
    alert("No one wins. Score is " + pScore + " to " + cScore);
  }
}
for(var i = 0; i < 5; i++){
  checkThrow(AIMove(), getPlayerMove());
}
if(pScore > cScore){
  alert("Player wins");
}else if (cScore > pScore) {
  alert("Computer wins");
}else {
  alert("Its a draw");
}
