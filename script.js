let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;

    if (num == 0) {
        computerChoice = "rock";
    } else if (num == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice.toLowerCase();
}