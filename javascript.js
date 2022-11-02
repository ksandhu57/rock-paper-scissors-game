function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

console.log(getComputerChoice());

const playerChoice = prompt('Do you pick rock, paper, or scissors?').toLowerCase();

function playRound(playerSelection, computerSelection) {
    console.log(playerChoice);
}

playRound();
