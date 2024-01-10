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


const CompanyEmail = ["alice@email.com", "bob@email.com", "carlo@email.com", "davide@email.com","eva@email.com"];


const container = document.createElement("div");
container.setAttribute("id", "response");
document.body.appendChild(container);

function checkEmail(){
let isValid = isEmailValid();
const responseDiv = document.getElementById("response");
 if (isValid) {
responseDiv.innerHTML = "puoi entrare";
} else {
responseDiv.innerHTML = `<img src="./img/nonentra.jpg">`
}
}



function isEmailValid(){
    let Email = document.getElementById("userEmail").value;
    for (let i = 0; i < CompanyEmail.length; i++){
        if (Email === CompanyEmail[i]){
         return  true;
        }
    }
    return false;
}

