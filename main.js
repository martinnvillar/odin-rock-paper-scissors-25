// get computer choice
function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
//get user choice
function getUserChoice() {
    let userInput = prompt(`Choose rock, paper or scissors:`);
    let userChoice = userInput.toLowerCase();
    if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        console.log('Error!');
        return;
    }
}
