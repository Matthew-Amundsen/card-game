//----Initializing Variables---------------------------------------------//

var playersDeck = [
  {cardID:1, name:"Card 1", attackType:"infantry"},
  {cardID:2, name:"Card 2", attackType:"infantry"},
  {cardID:3, name:"Card 3", attackType:"infantry"},
  {cardID:4, name:"Card 4", attackType:"infantry"},
  {cardID:5, name:"Card 5", attackType:"infantry"},
  {cardID:6, name:"Card 6", attackType:"ranged"},
  {cardID:7, name:"Card 7", attackType:"ranged"},
  {cardID:8, name:"Card 8", attackType:"ranged"},
  {cardID:9, name:"Card 9", attackType:"ranged"},
  {cardID:10, name:"Card 10", attackType:"ranged"},
  {cardID:11, name:"Card 11", attackType:"siege"},
  {cardID:12, name:"Card 12", attackType:"siege"},
  {cardID:13, name:"Card 13", attackType:"siege"},
  {cardID:14, name:"Card 14", attackType:"siege"},
  {cardID:15, name:"Card 15", attackType:"siege"},
];

var playersHand = [];

var playersInfantry = [];
var playersRanged = [];
var playersSiege = [];

//----Coin Flip---------------------------------------------//

function flipCoin(playerValue) {
  var computerRandomNumber = Math.round(Math.random());

  console.log(playerValue);
  console.log(computerRandomNumber);

  if (playerValue == computerRandomNumber) {
    console.log("You won");
    document.getElementById("pResult").innerHTML = "player number was " + playerValue;
    document.getElementById("cResult").innerHTML = "computer number was " + computerRandomNumber;
    document.getElementById("result").innerHTML = "You won";
    return true;
  } else {
    console.log("You lost");
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

function moveCards(startLocation, endLocation, cardPosition) {
  return endLocation.splice(0, 0, startLocation[cardPosition]);
}


//-----------------------------------------------------------------------//
//----------------Shuffle Players Deck-----------------------------------//

//console.log(shuffle(playersDeck));
//-----------------------------------------------------------------------//
//-----------------Draw 3 Cards------------------------------------------//

shuffle(playersDeck);
console.log(playersDeck);
console.log(playersHand);

moveCards(playersDeck,playersHand,0);

console.log(playersHand);

// console.log(playersHand);
// console.log(playersInfantry);
// console.log(playersRanged);
// console.log(playersSiege);


//-----------------------------------------------------------------------//
