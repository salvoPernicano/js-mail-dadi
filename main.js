const playerOne = document.getElementById("userOne");
const playerTwo = document.getElementById("userTwo");

function play(){
    let diceOne = Math.floor(Math.random()*6 +1);
    let diceTwo = Math.floor(Math.random()*6 +1);
    playerOne.textContent = `Your roll is : ${diceOne} & ${diceTwo}`
    let diceThree = Math.floor(Math.random()*6 +1);
    let diceFour = Math.floor(Math.random()*6 +1);
    playerTwo.textContent = `Your roll is : ${diceThree} & ${diceFour}`
}



