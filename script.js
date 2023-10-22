
function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissor'];
    let index = Math.floor((Math.random()*100)%3);
    return arr[index];
}

function round(getPlayerChoice, getComputerChoice) {
    let player = getPlayerChoice();
    let comp = getComputerChoice();

    if(player == 'rock') {
        if(comp == 'scissor') {
            console.log("You win! Rock beats Scissor");
            return 'player'
        } else if(comp == 'paper') {
            console.log("You lose! Paper beats Rock");
            return 'comp';
        } else {
            console.log("Tie!");
            return null;
        }
    } else if(player == 'paper') {
        if(comp == 'rock') {
            console.log("You win! Paper beats Rock");
            return 'player';
        } else if(comp == 'scissor') {
            console.log("You lose! Scissor beats Paper");
            return 'comp';
        } else {
            console.log("Tie!");
            return null;
        }
    } else if(player == 'scissor') {
        if(comp == 'paper') {
            console.log("You win! Scissor beats Paper");
            return 'player';
        } else if(comp == 'rock') {
            console.log("You lose! Rock beats Scissor");
            return 'comp';
        } else {
            console.log("Tie!");
            return null;
        }
    } 
}

function playGame(round, getComputerChoice, getPlayerChoice) {
    let t = 5;
    let pw = 0;
    let cw = 0;
    while(t--) {
        let r = round(getPlayerChoice, getComputerChoice);
        if(r == 'player') {
            pw++;
        } else if(r == 'comp') {
            cw++;
        }
    }

    if(pw>cw) {
        console.log("PLAYER wins!");
    } else if(cw>pw) {
        console.log("COMPUTER wins!")
    } else {
        console.log("TIED!");
    }
}


