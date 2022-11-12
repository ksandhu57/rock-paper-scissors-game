function getComputerChoice() {
    let result = Math.floor(Math.random() * 100);
       if (result <= 33) {
        return 'rock';
    } else if (result > 33 && result < 67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

let playerChoice = prompt('What is your choice? Rock, Paper, or Scissors?').toLowerCase();
let computerChoice = getComputerChoice();


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((playerChoice == 'rock' && computerChoice == 'scissor') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissor' && computerChoice == 'paper')) {
        return `You win! ${playerChoice} beats ${computerChoice}!`; 
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}!`;
    }
}

console.log('COMPUTER PICKS: ' + computerChoice);
console.log('YOU CHOSE: ' + playerChoice);
console.log(playRound(playerChoice, computerChoice));


