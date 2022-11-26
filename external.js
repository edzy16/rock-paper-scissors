function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}
var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultFinal = document.querySelector("#result-text");
    resultFinal.textContent = resultText;
    
    if (playerSelection === computerSelection) {
        var resultText = `It's a tie! You both chose ${playerSelection}`;
        console.log("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        var resultText = `You win! ${playerSelection} beats ${computerSelection}`;
        console.log("You win! Rock beats scissors");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        var resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log("You lose! Paper beats rock");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        var resultText = `You win! ${playerSelection} beats ${computerSelection}`;
        console.log("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        var resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log("You lose! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        var resultText = `You win! ${playerSelection} beats ${computerSelection}`;
        console.log("You win! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        var resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log("You lose! Rock beats scissors");
    }
    if(resultText.includes("win")) {
        playerScore++;
    }
    else if(resultText.includes("lose")) {
        computerScore++;
    }
    let playerScoreText = document.querySelector("#player-score");
    playerScoreText.textContent = "Player Score= "+playerScore;
    let computerScoreText = document.querySelector("#computer-score");
    computerScoreText.textContent = "Computer Score="+computerScore;
    if(playerScore === 5) {
        alert("You win!");
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5) {
        alert("You lose!");
        playerScore = 0;
        computerScore = 0;
    }

}

