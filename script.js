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




function game() {

    let score = 0;

    for (let i = 1; i <= 5; i++) {

        let playerChoice = prompt("Enter your choice!")

        let round = playRound(playerChoice, getComputerChoice())
        console.log(round)
        
        switch (win) {
            case true:
                score++;
                break;
            case false:
                score--;
                break;
            default:
                score;
                break;
        }

    }

    console.log("score=" + score)
    return score;

}

// console.log(game())

function getResult() {

    let result;
    
    if (game() < 0) {
        result = "YOU LOSE";
    } else if (game() > 0) {
        result = "YOU WIN";
    } else {
        result = "TIE";
    }

    
    return result;

}

console.log(getResult())
