var humanScore = 0;
var computerScore = 0;
var round = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scisBtn = document.querySelector("#scisBtn");
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
document.body.appendChild(resultsDiv);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * choices.length));
    return choices[randomIndex];
}

function updateScore() {
    return "   Round " + round + " Score:      Human: " + humanScore + "  ||  Computer: " + computerScore;

}

function resetScore() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice) {
    round ++;
    const computerChoice = getComputerChoice();
    const winMessage = "You win this round! " + humanChoice + " beats " + computerChoice + " !";
    const loseMessage = "Your lose this round! " + humanChoice + " loses to " + computerChoice + " !";
    const tieMessage = "Tie! You both chose " + humanChoice + "!";
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = tieMessage + updateScore();
    }
    else {
        const winConditions = {
            rock : "scissors",
            paper : "rock",
            scissors : "paper"
        }
        if (winConditions[humanChoice] === computerChoice) {
            humanScore ++;
            if (humanScore >= 5) {
                resultsDiv.textContent = "You win the game!" + updateScore();
                resetScore();
            }
            else {
                resultsDiv.textContent = winMessage + updateScore();
            }
        }
        else {
            computerScore++;
            if (computerScore >= 5) {
                resultsDiv.textContent = "You lost the game..." + updateScore();
                resetScore();
            }
            else {
                resultsDiv.textContent = loseMessage + updateScore();
            }
        }
    }
}
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scisBtn.addEventListener("click", () => playRound("scissors"));





