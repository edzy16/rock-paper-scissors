function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function getPlayerchoice() {
    const playerSelection = prompt("Choose rock, paper or scissors");
    return playerSelection.toLowerCase();
}

function playround() {
    const playerSelection = getPlayerchoice();
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You lose! Scissors beats paper";
        } else {
            return "You win! Paper beats rock";
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper";
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerchoice();
        const computerSelection = getComputerChoice();
        console.log(playround(playerSelection, computerSelection));
        const result = playround();
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return "You win the game!";
    } else if (playerScore < computerScore) {
        return "You lose the game!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());