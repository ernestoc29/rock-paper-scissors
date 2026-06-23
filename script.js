const humanScoreDisplay = document.querySelector(".human-score");
const compScoreDisplay = document.querySelector(".comp-score");
const buttons = document.querySelectorAll(".btns");



let humanScore = 0;
let compScore = 0;

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

buttons.forEach(button => {
    button.addEventListener("click", playRound);
})

function playRound(event) {
    const human = event.target.id;
    const computer = getComputerChoice();

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
        humanScore++
        humanScoreDisplay.textContent = humanScore;

    } else {
        compScore++;
        compScoreDisplay.textContent = compScore;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${compScore}`);
}
