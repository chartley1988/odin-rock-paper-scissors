const moves = ['ROCK', 'PAPER', 'SCISSORS']

document.addEventListener('keypress', playMatch)

playMatch();


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
    let winner = determineWinner(computerSelection, playerSelection);
    console.log(winner);
    return(winner);


}

function game() {

}


function convertStringToUpper(answer) {
    const convertedString = answer.toUpperCase();
    return(convertedString);
}

function determineWinner(computer, player) {
    if (computer === player) {
        console.log('tie');
        return("tie");
    } else {
        switch (player) {
            case 'ROCK':
                console.log('You bashed with a rock!')
                if (computer === "PAPER"){
                    return('But alas, the enemy respondds with a slice of paper.');
                } else {
                    return('win');
                }
            case 'PAPER':
                console.log('You chose paper...')
                if (computer === "SCISSORS"){
                    return('but the enemy chose scissors! you lose!');
                } else {
                    return('win');
                }
            case 'SCISSORS':
                console.log('You chose scissors...')
                if (computer === "ROCK"){
                    return('but the computer responded with a rock! you lose!');
                } else {
                    return('win');
                }
        }
    }
}
// rock > scissors > paper