function getComputerChoice() {

    let randomNum = Math.floor(Math.random()*3) + 1;
    

    let computerChoice;

    switch (randomNum) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "error";
    }
     
    // console.log(computerChoice)
    return computerChoice;
}

var win;

function playRound(playerSelection, computerSelection) {

    let newPlayerSelection = playerSelection.toLowerCase();
    let output;
    
    if (newPlayerSelection === "rock" && computerSelection === "rock") {
        win = null;
        output = "tie, both chose rock";
    } else if (newPlayerSelection === "rock" && computerSelection === "paper") {
        win = false;
        output = "you lose, paper beats rock";
    } else if (newPlayerSelection === "paper" && computerSelection === "rock") {
        win = true;
        output = "you win, paper beats rock";
    } else if (newPlayerSelection === "rock" && computerSelection === "scissors") {
        win = true;
        output = "you win, rock beats scissors";
    } else if (newPlayerSelection === "scissors" && computerSelection === "rock") {
        win = false;
        output = "you lose, rock beats scissors";
    } else if (newPlayerSelection === "paper" && computerSelection === "scissors") {
        win = false;
        output = "you lose, scissor beats paper";
    } else if (newPlayerSelection === "scissors" && computerSelection === "paper") {
        win = true;
        output = "you win, scissor beats paper";
    } else if (newPlayerSelection === "paper" && computerSelection === "paper") {
        win = null;
        output = "tie, both chose paper";
    } else if (newPlayerSelection === "scissors" && computerSelection === "scissors") {
        win = null;
        output = "tie, both chose scissor";
    } else {
        win = null;
        output = "error";
    }
   
    return output;

}


let button = document.querySelectorAll('button');
let div = document.querySelector('.output');
let computerDiv = document.querySelector('.computer')
let playerDiv = document.querySelector('.player')

let playerSelection;
let playerScore = 0;
let computerScore = 0;
playerDiv.innerText = "you score = " + playerScore;
computerDiv.innerText = "computer = " + computerScore;
let p = document.createElement('p');

button.forEach(b => {
    b.addEventListener('click', e => {

        playerDiv.innerText = "you score = " + playerScore;
        computerDiv.innerText = "computer = " + computerScore;
        playerSelection = e.target.innerText;
        div.innerText = playRound(playerSelection, getComputerChoice());
        if (div.innerText.split('')[4] === "w") {
            console.log(div.innerText.split('')[4])
            playerDiv.innerText = "you score = " + ++playerScore;
        } 
        else if (div.innerText.split('')[4] === "l") {
            console.log(div.innerText.split('')[4])
            computerDiv.innerText = "computer = " + ++computerScore;
        } 

        if (computerScore >= 5) {
            playerScore = 0;
            computerScore = 0;
            p.innerText = 'YOU LOSE COMPUTER WINS'; 
            document.body.appendChild(p);
        } else if (playerScore >= 5) {
            playerScore = 0;
            computerScore = 0;
            p.innerText = 'YOU WIN COMPUTER LOSES'; 
            document.body.appendChild(p);
        }
    })
})
