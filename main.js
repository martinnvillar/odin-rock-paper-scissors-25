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
// get scores
let userScore = 0;
let cpuScore = 0;
//logic to follow in order to play a single round
function playRound(userSelection, computerSelection){
    if(userSelection === computerSelection){
        console.log(`TIE!`);
    }else if(
        (userSelection === `rock` && computerSelection === `scissors`) ||
        (userSelection === `paper` && computerSelection === `rock`) ||
        (userSelection === `scissors` && computerSelection === `paper`)
    ){
        console.log(`u win! ${userSelection} beats ${computerSelection}`);
        userScore++;
        console.log(`User score: ${userScore} CPU score: ${cpuScore}`);
    }else if(
        
        userSelection === `scissors` && computerSelection === `rock` ||
        userSelection === `rock` && computerSelection === `paper` ||
        userSelection === `paper` && computerSelection === `scissors`
    
    ){
        console.log(`u lose! ${computerSelection} beats ${userSelection}`);
        cpuScore++;
        console.log(`User score: ${userScore} CPU score: ${cpuScore}`);
    }else{
        console.log(`Error! u must choose between rock, paper or scissors`);
    }
}
//play a 5 round game
function playGame() {
    for(let i = 1; i <= 5; i++) {
        const humanSelection = getUserChoice();
        const cpuSelection = getComputerChoice();
        console.log(`Round ${i}`);
        playRound(humanSelection, cpuSelection);
    }
    if(userScore === cpuScore) {
        console.log(`The game is a TIE!
            User score: ${userScore} CPU score: ${cpuScore}`
        );
    } else if (userScore > cpuScore) {
        console.log(`You WON the game!
            User score: ${userScore} CPU score: ${cpuScore}`
        );
    } else {
        console.log(`You LOSE the game!
            User score: ${userScore} CPU score: ${cpuScore}`
        );
    }
}
//call function
playGame();
