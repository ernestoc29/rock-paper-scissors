const humanScoreDisplay = document.querySelector(".human-score");
const compScoreDisplay = document.querySelector(".comp-score");
const buttons = document.querySelectorAll(".btns");

const logsContainer = document.querySelector(".logs");
const log = document.querySelectorAll(".log");

const finalScore = document.querySelector(".final-score");


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

    let roundResult;
    const newLog = document.createElement("p");
    newLog.classList.add("log");

    const resultSpan = document.createElement("span")

    const humanCap = human.charAt(0).toUpperCase() + human.slice(1);
    const compCap = computer.charAt(0).toUpperCase() + computer.slice(1);


    if (human === computer) {
        newLog.textContent = `You and Computer chose ${humanCap}.`;
        resultSpan.textContent = " Tie.";
        resultSpan.classList.add("tie");
    } else {
        const humanWin = 
        (human === "rock" && computer === "scissors") || 
        (human === "paper" && computer === "rock") || 
        (human === "scissors" && computer === "paper");

        if (humanWin) {
            humanScore++
            humanScoreDisplay.textContent = humanScore;
            resultSpan.textContent = " You win this round!";
            resultSpan.classList.add("win");

        } else {
            compScore++;
            compScoreDisplay.textContent = compScore;
            resultSpan.textContent = " Computer wins this round.";
            resultSpan.classList.add("lose");
        }
        newLog.textContent = `You chose ${humanCap}. Computer chose ${compCap}.`;
    }

    newLog.appendChild(resultSpan);
    logsContainer.prepend(newLog)
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = event.target.id;
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }

//     console.log(`You: ${humanScore}`);
//     console.log(`Computer: ${compScore}`);
// }
