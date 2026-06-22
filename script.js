let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;

    if (num === 0) {
        computerChoice = "rock";
    } else if (num === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// function getHumanChoice() {
//     let choice = prompt("Choose rock, paper, or scissors");
//     return choice.toLowerCase();
// }

function playRound(human, computer) {
    if (human === computer) {
        console.log("Tie!");
        return;
    }

    // human win conditions
    const humanWin = 
    (human === "rock" && computer === "scissors") || 
    (human === "paper" && computer === "rock") || 
    (human === "scissors" && computer === "paper");

    if (humanWin) {
        console.log(`You win! ${human} beats ${computer}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computer} beats ${human}.`)
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}

playGame();