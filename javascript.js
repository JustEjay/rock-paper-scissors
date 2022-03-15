
   let playerScore = 0;
   let computerScore = 0;

// Player enters input 
function playerSelection () {
    return prompt('Select Rock, Paper or Scissors').toLowerCase();
}

// Randomly generate number 0 - 2 and assign rock, paper or scissors to it 
function computerSelection() {
    num =  Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'invalid selection';
    }
}

//play one round of rock paper scissors 
function playRound(player, computer) {
    if (player === 'rock' && computer === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return playerScore ++;
    } else if (player === 'paper' && computer === "rock") {
        console.log('You Win! Paper beats Rock');
        return playerScore ++;
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('You Win! Scissors beats paper' );
        return playerScore ++;
    } else if (player === computer) {
        console.log(`Tie! you both picked ${player}`);
        return playerScore++, computerScore++ ;
    } else {
        console.log(`You lose! ${computer} beats ${player}`);
    }
}




function game () {
    for (let i = 0; i < 5; i++) {
        let player = playerSelection();
        let computer = computerSelection();
        console.log( playRound(player, computer));
    }
    

}



