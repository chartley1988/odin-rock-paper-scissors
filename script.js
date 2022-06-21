const moves = ['ROCK', 'PAPER', 'SCISSORS']

let playerScore = 0;
let computerScore = 0;

document.addEventListener('keypress', game)


function computerPlay() {
    let computerAnswer = "";
    computerAnswer = moves[Math.random() * moves.length | 0];
    return(computerAnswer);
}

function playerPlay() {
    const gameAnswer = prompt("Rock, Paper, Scissors. Which do you choose?");
    inputUpperCase = convertStringToUpper(gameAnswer);
    if (moves.includes(inputUpperCase)) {
        return(inputUpperCase);
    } else {
        console.log("The answer you've inputed doesn't make sense!");
        return "";
    }
}

function playMatch() {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();

    if(playerSelection === "") {
        return
    } else {
    let winner = determineWinner(computerSelection, playerSelection);
    console.log(winner);
    return(winner);
    }


}

function game() {
    console.log('Is this fucking working?');
    for (let i = 1; i > 0; i++) {
        playMatch();
        if (playerScore >= 5) {
            console.log("You're the first to reach 5 games, congrats!");
            resetScore();
            break;
        }
        if (computerScore >= 5) {
            console.log("Uh oh, the computer beat you 5 times, that's it!")
            resetScore();
            break;
        }
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    console.log('Both scores have been reset to zero, you\'re now ready to play!');
}

function convertStringToUpper(answer) {
    if(answer === null) {
        return("");
    } else {
    const convertedString = answer.toUpperCase();
    return(convertedString);
    }
}

function determineWinner(computer, player) {
    if (computer === player) {
        return("tie");
    } else {
        switch (player) {
            case 'ROCK':
                console.log('You bashed with a rock!')
                if (computer === "PAPER"){
                    ++computerScore;
                    return('But alas, the enemy respondds with a slice of paper.');
                } else {
                    ++playerScore;
                    return('win');
                }
            case 'PAPER':
                console.log('You chose paper...')
                if (computer === "SCISSORS"){
                    ++computerScore;
                    return('but the enemy chose scissors! you lose!');
                } else {
                    ++playerScore;
                    return('win');
                }
            case 'SCISSORS':
                console.log('You chose scissors...')
                if (computer === "ROCK"){
                    ++computerScore;
                    return('but the computer responded with a rock! you lose!');
                } else {
                    ++playerScore;
                    return('win');
                   
                }
        }
    }
}
// rock > scissors > paper