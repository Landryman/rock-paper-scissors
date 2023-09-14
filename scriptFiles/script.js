const options = ['rock', 'paper', 'scissors'];
function getComputerSelection() {
    let computerSelection = Math.floor((Math.random() * 3));
    // console.log(options[choice]);
    return options[computerSelection];
}

const error = null;
function getPlayerSelection() {
    // let playerSelection = 'rock';
    let playerResponse = prompt("Rock, paper, or scissors?", "")
    let playerSelection = playerResponse.toLowerCase().trim();
    for (let i = 0; i < options.length; i++) {
        console.log(i);
        if (playerResponse === options[i]) {
            console.log("you chose: ", options[i]);
            return options[i];
        } else {
            console.log("you chose: ", error);
            // return y;
        }
    }
    return playerSelection;
} // This is for testing with 'rock'. Delete when running with prompt().

function playRound() {
    // console.log("Start playRound test");
    let player = getPlayerSelection();
    let comp = getComputerSelection();
    // console.log("initial player selection: " + getPlayerSelection());
    // console.log("initial computer selection: " + getComputerSelection());
    // console.log("player: " + player);
    // console.log("comp: " + comp);
     if (player === comp) {       
        return "It's a tie";
    } else if (player === 'rock' && comp === 'paper') {       
        return "Paper covers rock. I win.";
    } else if (player === 'rock' && comp === 'scissors') {       
        return "Rock breaks scissors. You win.";
    } else if (player === 'paper' && comp === 'scissors') {       
        return "Scissors cuts paper. I win.";
    } else if (player === 'paper' && comp === 'rock') {       
        return "Paper covers rock. You win.";
    } else if (player === 'scissors' && comp === 'rock') {        
        return "Rock breaks scissors. I win.";
    } else if (player === 'scissors' && comp === 'paper') {        
        return "Scissors cuts paper. You win.";
    } else {
        return "No selection was made. Please select: rock, paper, or scissors.";
    }
}
// console.log("Results for playRound: " + playRound());

function scoreRound() { //returns round result as a string value. Ex. "Scissors cuts paper. You win."
    // console.log("Start scoreRound test");
    let scoreLog = [0, 0]; 
    let playerScore = 0;
    let computerScore = 0;
    let roundText = playRound();
    // console.log(roundText);
    if (roundText.includes("You win")) {
        playerScore++;
        // console.log("player score: " + playerScore);
    } else if (roundText.includes("tie")) {
        playerScore += 0;
        computerScore += 0;
        // console.log("player score: " + playerScore);
        // console.log("computer score: " + computerScore);
    } else if (roundText.includes("I win")) {
        computerScore++;
        // console.log("computer score: " + computerScore);
    }
    

    if (playerScore === computerScore) {
        scoreLog.shift();
        scoreLog.unshift(playerScore);
        scoreLog.pop();
        scoreLog.push(computerScore);
    
    } else if (playerScore > computerScore) {
        scoreLog.shift();
        scoreLog.unshift(playerScore);
    } else if (playerScore < computerScore) {
        scoreLog.pop();
        scoreLog.push(computerScore); 
    }
    // console.log("Round result is: ", roundText);
    return scoreLog;
}
// console.log(scoreRound())
// console.log("Results for scoreRound: ", scoreRound());


function game() {
    console.log("Start test for: game()")
    let rounds = 1;
    let gameResult = "";
    let finalScore = [0, 0];
  
    for (let i = 0; i < rounds; i++) {
        let score = scoreRound();
        console.log("Score this round is: ", score);
        if (score[0] > score[1]) {
            finalScore[0]++;
            console.log("player gets a point: " + finalScore[0]);
            console.log("Round score is: ", score);
        } else if (score[0] < score[1]) {
            finalScore[1]++;
            console.log("comp gets a point: " + finalScore[1])
        } else {
            finalScore[0] += 0;
            finalScore[1] += 0;
            console.log("no players recieved points: ", finalScore)
        }
        console.log("final score: ", finalScore);
    };
    
    // console.log("This is finalScore:", finalScore);
    if (finalScore[0] > finalScore[1]) {
        gameResult += `The final score is "${finalScore[0]}" to "${finalScore[1]}". You win!`;
    } else if (finalScore[0] < finalScore[1]) {
        gameResult += `The final score is "${finalScore[0]}" to "${finalScore[1]}". You lose!`;
    } else { 
        gameResult += `The final score is "${finalScore[0]}" to "${finalScore[1]}". It's a tie!`;
    }
    return gameResult;
}

console.log("Results for game: ", game());