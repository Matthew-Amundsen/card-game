function flipCoin(playerValue) {
  var computerRandomNumber = Math.round(Math.random());

//  console.log(playerValue);
//  console.log(computerRandomNumber);

  if (playerValue == computerRandomNumber) {
//    console.log("You won");
    document.getElementById("pResult").innerHTML = "player number was " + playerValue;
    document.getElementById("cResult").innerHTML = "computer number was " + computerRandomNumber;
    document.getElementById("result").innerHTML = "You won";
    return true;
  } else {
//    console.log("You lost");
    document.getElementById("pResult").innerHTML = "player number was " + playerValue;
    document.getElementById("cResult").innerHTML = "computer number was " + computerRandomNumber;
    document.getElementById("result").innerHTML = "You lost";
    return false;
  }
}

//-----------------------------------------------------------------------//
//--------------------Fisher–Yates Shuffle-------------------------------//

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


//-----------------------------------------------------------------------//
//------------Card Drawing Function--------------------------------------//

function drawToHand(playersDeck, playersHand) {
  var turn = 0;
  if (turn === 0) {
    var draw = playersDeck.splice(0,3);
  } else {
    var draw = playersDeck.splice(0,1);
  }

  return playersHand.concat(draw);;
}


//----Initializing Variables---------------------------------------------//

var playersDeck = [
  {cardID:"001", name:"Card 1", attackType:"infantry"},
  {cardID:"002", name:"Card 2", attackType:"infantry"},
  {cardID:"003", name:"Card 3", attackType:"infantry"},
  {cardID:"004", name:"Card 4", attackType:"infantry"},
  {cardID:"005", name:"Card 5", attackType:"infantry"},
  {cardID:"006", name:"Card 6", attackType:"ranged"},
  {cardID:"007", name:"Card 7", attackType:"ranged"},
  {cardID:"008", name:"Card 8", attackType:"ranged"},
  {cardID:"009", name:"Card 9", attackType:"ranged"},
  {cardID:"010", name:"Card 10", attackType:"ranged"},
  {cardID:"011", name:"Card 11", attackType:"siege"},
  {cardID:"012", name:"Card 12", attackType:"siege"},
  {cardID:"013", name:"Card 13", attackType:"siege"},
  {cardID:"014", name:"Card 14", attackType:"siege"},
  {cardID:"015", name:"Card 15", attackType:"siege"},
];

var playersHand = [];

var playersInfantry = [];
var playersRanged = [];
var playersSiege = [];


//-----------------------------------------------------------------------//
//----------------Shuffle Players Deck-----------------------------------//

//console.log(shuffle(playersDeck));
//-----------------------------------------------------------------------//
//-----------------Draw 3 Cards------------------------------------------//

console.log(drawToHand(playersDeck,playersHand));

//-----------------------------------------------------------------------//
