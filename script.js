const moves = ['ROCK', 'PAPER', 'SCISSORS']
let pause = false

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('comptuter-score');

updateScoreText();

rockButton.addEventListener('click', function() {
    if (pause === false) game(this);
});
paperButton.addEventListener('click', function() {
    if (pause === false) game(this);
});
scissorsButton.addEventListener('click', function() {
    if (pause === false) game(this);
});

function computerPlay() {
    let computerAnswer = "";
    computerAnswer = moves[Math.random() * moves.length | 0];
    return(computerAnswer);
}

function playerPlay(i) {
    const gameAnswer = i;
    inputUpperCase = convertStringToUpper(gameAnswer);
    if (moves.includes(inputUpperCase)) {
        return(inputUpperCase);
    } else {
        console.log("The answer you've inputed doesn't make sense!");
        return "";
    }
}

function playMatch(playerMove) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay(playerMove);

    if(playerSelection === "") {
        return
    } else {
    let winner = determineWinner(computerSelection, playerSelection);
    console.log(winner);
    return(winner);
    }
}

function game(move) {
    playMatch(move.id);
    updateScoreText();
    checkForWin();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScoreText();
    pause = false;
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

function updateScoreText() {
    playerScoreText.textContent = `Player Score:     ${playerScore}`;
    computerScoreText.textContent = `Computer Score:    ${computerScore}`;
}

function checkForWin() {
    if (playerScore >= 5) {
        pause = true;
        playerScoreText.textContent = `Player Score:     ${playerScore}, You win!`;
        setTimeout(resetScore, 2000);
    }
    if (computerScore >= 5) {
        pause = true;
        computerScoreText.textContent = `Computer Score:    ${computerScore}, You lose!`;
        setTimeout(resetScore, 2000);
    }
}

// rock > scissors > paper