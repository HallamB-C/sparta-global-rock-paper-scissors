var moves = [
  {
    name: "rock",
    beats: "scissors"
  },

  {
    name: "paper",
    beats: "rock"
  },

  {
    name: "scissors",
    beats: "paper"
  }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function AIMove(){
  var move = moves[getRandomInt(0,2)];
  console.log("AI throws " + move.name);
  return move;
}
function getPlayerMove(){
  var getMove = prompt("What move do you want to throw? 'rock', 'paper', or 'scissors' " || 'rock');
  var move = moves.find(function (move){
     return move.name == getMove;
   });
  console.log("Player throws " + move.name);
  return move;
}
function checkThrow(compT, playerT){
  if(playerT.beats == compT.name){
    alert('player wins');
  }else if (playerT.name == compT.beats) {
    alert('AI wins');
  }else{
    alert('its a tie');
  }
}

checkThrow(AIMove(), getPlayerMove());
