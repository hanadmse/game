

function getComputerChoice() {
    let random = Math.random() * 10;
    let computerChoice;
    if (random >= 0 && random < 4) {
        computerChoice = "rock";
    }
    else if (random >= 4 && random < 7) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors: ");
    return humanChoice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let winMessage = "You win! " + humanChoice + " beats " + computerChoice + " !";
        let loseMessage = "Your lose! " + computerChoice + " beats " + humanChoice + " !";
        let tieMessage = "Tie! You both choose " + humanChoice + "!";
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log(tieMessage)
        }
        else {
            if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
                humanScore ++;
                console.log(winMessage);
                return;
            }
            if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
                humanScore ++;
                console.log(winMessage);
                return;
            }
            if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
                humanScore ++;
                console.log(winMessage);
                return;
            }
            computerScore++;
            console.log(loseMessage);
            return;
        }
        return;
    }
    var humanScore = 0;
    var computerScore = 0;
    for (i = 1; i < 6; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Human choice: " + humanChoice + " , Computer choice: " + computerChoice);
        console.log("Round " + i + " score, Human: " + humanScore + "  ||  Computer: " + computerScore);
    }
    if (humanScore === computerScore) {
        console.log("Tie!")
    }
    else if (humanScore > computerScore) {
        console.log("You win!")
    }
    else {
        console.log("You lost!")
    }
    return;
}
    playGame();




