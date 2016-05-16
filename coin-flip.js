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
