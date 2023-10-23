
const possibleChoice = document.querySelectorAll('.choice');
const playerScore = document.querySelector('.player');
const compScore = document.querySelector('.computer');
const scoreboard = {
    player : 0,
    computer : 0
};
const result = document.querySelector('.result');
let roundsPlayed = 0;

possibleChoice.forEach(choice => choice.addEventListener('click', round))


function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissor'];
    let index = Math.floor((Math.random()*100)%3);
    return arr[index];
}

function round(e) {
    let player = e.target.id;
    let comp = getComputerChoice();
    roundsPlayed++;
    if(player == 'rock') {
        if(comp == 'scissor') {
            result.textContent = "You win! Rock beats Paper"
            scoreboard.player++;
        } else if(comp == 'paper') {
            result.textContent = "You lose! Paper beats Rock";
            scoreboard.computer++;
        } else {
            result.textContent = "Tie!";
        }
    } else if(player == 'paper') {
        if(comp == 'rock') {
            result.textContent = "You win! Paper beats Rock";
            scoreboard.player++;
        } else if(comp == 'scissor') {
            result.textContent = "You lose! Scissor beats Paper";
            scoreboard.computer++;
        } else {
            result.textContent = "Tie!";
        }
    } else if(player == 'scissor') {
        if(comp == 'paper') {
            result.textContent = "You win! Scissor beats Paper";
            scoreboard.player++;
        } else if(comp == 'rock') {
            result.textContent = "You lose! Rock beats Scissor";
            scoreboard.computer++;
        } else {
            result.textContent = "Tie!";
        }
    } 
    updateScore();
}

function updateScore() {
    let pw = scoreboard.player;
    let cw = scoreboard.computer;
    playerScore.textContent = `Player: ${pw}`;
    compScore.textContent = `Computer: ${cw}`;
    if(roundsPlayed%5==0) {
        if(pw>cw) {
            result.textContent = "PLAYER wins the bout!";
        } else if(cw>pw) {
            result.textContent = "COMPUTER wins the bout :(";
        } else {
            result.textContent = "Its a Tie!!!";
        }
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', clear)

function clear() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    playerScore.textContent = "Player: ";
    compScore.textContent = "Computer: ";
    result.textContent = "";
}

