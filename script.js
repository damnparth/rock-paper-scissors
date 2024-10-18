let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playround(humanChoice) {
    if (round >= maxRounds) return; // Stop if game is over

    const computerChoice = getComputerChoice();
    const resultDisplay = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    // Increment round count
    round++;

    // Determine the round result
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = `Round ${round}: It's a tie! Computer chose the same.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = `Round ${round}: You won! Computer chose ${computerChoice}.`;
        humanScore++;
    } else {
        resultDisplay.textContent = `Round ${round}: You lose! Computer chose ${computerChoice}.`;
        computerScore++;
    }

    // Update score display
    scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    // Check if the game is over
    if (round === maxRounds) {
        displayWinner();
    }
}

function displayWinner() {
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll(".choice");

    // Disable the buttons after the game is over
    buttons.forEach(button => button.disabled = true);

    // Display the final winner
    if (humanScore > computerScore) {
        resultDisplay.textContent = `Game Over! You won the game with a score of ${humanScore} to ${computerScore}.`;
    } else if (computerScore > humanScore) {
        resultDisplay.textContent = `Game Over! Computer won the game with a score of ${computerScore} to ${humanScore}.`;
    } else {
        resultDisplay.textContent = `Game Over! It's a tie! Final score: ${humanScore} to ${computerScore}.`;
    }
}

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        playround(button.id);
    });
});


