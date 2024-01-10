const playerOne = document.getElementById("userOne");
const playerTwo = document.getElementById("userTwo");

function play(){
    let diceOne = Math.floor(Math.random()*6 +1);
    let diceTwo = Math.floor(Math.random()*6 +1);
    let playerOneTotal = diceOne+diceTwo;
    console.log(playerOneTotal);
    playerOne.innerHTML = `Your roll is :<img src="./img/dice-six-faces-${diceOne}.svg">&nbsp;<img src="./img/dice-six-faces-${diceTwo}.svg">`
    let diceThree = Math.floor(Math.random()*6 +1);
    let diceFour = Math.floor(Math.random()*6 +1);
    let playerTwoTotal = diceThree+diceFour;
    console.log(playerTwoTotal);
    playerTwo.innerHTML = `Your roll is :<img src="./img/dice-six-faces-${diceThree}.svg">&nbsp;<img src="./img/dice-six-faces-${diceFour}.svg">`
    const vincitore = document.getElementById("winner");
    
    if (playerOneTotal > playerTwoTotal){
        vincitore.innerHTML = "Plyer 1 wins!"
    } else if (playerOneTotal < playerTwoTotal){
        vincitore.innerHTML = "Plyer 2 wins!"
    } else if (playerOneTotal === playerTwoTotal){
        vincitore.innerHTML = "It is a Tie!"
    }
}






