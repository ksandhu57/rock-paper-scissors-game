function getComputerChoice() {
    const result = Math.floor(Math.random() * 100);
       if (result <= 33) {
        return 'rock';
    } else if (result > 33 && result < 67) {
        return 'paper';
    } else {
        return 'scissor';
    }
};

console.log(getComputerChoice());



