
// function getPlayerSelection() {

//     let playerResponse = document.querySelector("btn");
//     console.log(playerResponse);

//     let playerResponse = prompt("Rock, paper, or scissors?", "Rock").toLowerCase().trim();
//     let playerSelection = "";
//     for (let i = 0; i < options.length; i++) {        
//         if (playerResponse === options[i]) {
//         console.log("You chose: " + options[i]);
//         playerSelection += options[i];
//         return playerSelection;
//     }
//   }
// } // This is an earlier version of getPlayerSelection() that uses a loop 

function game() {
    document.querySelector("demo1").innerHTML = "Click an option below to play!;
    let rounds = [1, 2, 3];
    const options = ["rock", "paper", "scissors"];
    for (let i=0; i<rounds.length; i++) {
        function playRound() {
            let playerResponse = [];
            let computerResponse = [];
            function getPlayerSelection() {
                const buttons = document.querySelectorAll("#btn-rock, #btn-paper, #btn-scissors");
                buttons.forEach((button) => {
                    button.addEventListener('click', (event) => {
                        function getClick() {
                            let buttonClick = event.target.textContent.toLowerCase();
                            if (buttonClick === options[0] || options[1] || options[2]) {
                                document.querySelector("playerClick").innerHTML = "You chose " + buttonClick + ".";
                                playerResponse.pop(buttonClick);
                                playerResponse.push(buttonClick);
                                // console.log("You chose: " + buttonClick);
                                return buttonClick;
                            }
                        }
                    });
                });
            }
            console.log(getPlayerSelection(buttons));
            // getPlayerSelection();

            function getComputerSelection() {
                let computerSelection= Math.floor((Math.random() * 3));
                computerResponse.pop();
                computerResponse.push(option[computerSelection]);
                document.querySelector("compClick").innerHTML = "Computer chose " + computerResponse + ".";
            }
            // getComputerSelection();

       
            let result = "";
                // console.log("Start playRound test");
                // console.log("initial playerResponse.toString() selection: " + getPlayerSelection());
                // console.log("initial computer selection: " + getComputerSelection());
                // console.log("playerResponse.toString(): " + playerResponse.toString());
                // console.log("computerResponse.toString(): " + computerResponse.toString());
            if (playerResponse.toString() === computerResponse.toString()) {
                result += "It's a tie.";
                document.querySelector("demo3").innerHTML = result;
                return result;
            } else if (playerResponse.toString() === 'rock' && computerResponse.toString() === 'paper') {  
                result += "Paper covers rock. I win.";
                document.querySelector("demo3").innerHTML = result;
                return result;
            } else if (playerResponse.toString() === 'rock' && computerResponse.toString() === 'scissors') {
                result += "Rock breaks scissors. You win.";  
                document.querySelector("demo3").innerHTML = result;    
                return result;
            } else if (playerResponse.toString() === 'paper' && computerResponse.toString() === 'scissors') {  
                result += "Scissors cuts paper. I win.";  
                document.querySelector("demo3").innerHTML = result; 
                return result;
            } else if (playerResponse.toString() === 'paper' && computerResponse.toString() === 'rock') {  
                result += "Paper covers rock. You win.";
                document.querySelector("demo3").innerHTML = result; 
                return result;
            } else if (playerResponse.toString() === 'scissors' && computerResponse.toString() === 'rock') {  
                result += "Rock breaks scissors. I win.";
                document.querySelector("demo3").innerHTML = result;
                return result;
            } else if (playerResponse.toString() === 'scissors' && computerResponse.toString() === 'paper') {  
                result +=  "Scissors cuts paper. You win.";  
                document.querySelector("demo3").innerHTML = result;  
                return result;
            };
            // else {
            //     result += "No selection was made. Please select: rock, paper, or scissors.";
            //     document.querySelector("demo3").innerHTML = result;
            //     return result;
            // };
        } 
    }
    // console.log(playRound());
    // playRound();

    function scoreRound() { //returns round result as a string value. Ex. "Scissors cuts paper. You win."
        // console.log("Start scoreRound test");
        let scoreLog = [0, 0]; 
        let roundText = playRound();
        let playerScore = 0;
        let computerScore = 0;
        // console.log(roundText);
        if (roundText.includes("You win")) {
            playerScore++;
            // console.log("playerResponse.toString() score: " + playerScore);
        } else if (roundText.includes("tie")) {
            playerScore += 0;
            computerScore += 0;
            // console.log("playerResponse.toString() score: " + playerScore);
            // console.log("computer score: " + computerScore);
        } else if (roundText.includes("I win")) {
            computerScore++;
            // console.log("computer score: " + computerScore);
        };
        
    
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
        };
        // console.log("Round result is: ", roundText);
        return scoreLog;
    }
    
   
    let roundCount = [];
    let gameResult = "";
    let finalScore = [0, 0]; //finalScore[0] = playerResponse.toString() score; finalScore[1] = computer score.

    for (let i = 0; i < rounds.length; i++) {
        let score = scoreRound();
        document.querySelector("demo1").innerHTML = "Current score is: " + finalScore[0] + "-" + finalScore[1];
        if (i === rounds[0]) {
            roundCount.push(rounds[i]);
            document.querySelector("demo2").innerHTML = "Round " + roundCount;
        } else if (i === rounds[1]) {
            roundCount.pop(rounds[i]);
            roundCount.push(rounds[i]);
            document.querySelector("demo2").innerHTML = "Round " + roundCount;
        } else {
            roundCount.pop(rounds[i]);
            roundCount.push(rounds[i]);
            document.querySelector("demo2").innerHTML = "Round " + roundCount;
        }
        if (score[0] > score[1]) {
            finalScore[0]++;
            document.querySelector("demo3").innerHTML = "Player gets a point: " + finalScore[0] + "+";
        } else if (score[0] < score[1]) {
            finalScore[1]++;
            document.querySelector("demo3").innerHTML = "Computer gets a point: " + finalScore[1] + "+";
        } else {
            finalScore[0] += 0;
            finalScore[1] += 0;
            document.querySelector("demo3").innerHTML = "No players recieved points.";
        }
    };
    
}
    

  
    // function roundCounter() {
    //   console.log("Rounds count test start");
    //   let roundsCount = [];
    //   for (let i = 0; i < rounds.length; i++) {
    //     if (++finalScore[0] || ++finalScore[1]) {
    //         roundCount.push("Round: " + rounds[i]);
    //     }
    //   }
    // }
    
    // console.log("This is finalScore:", finalScore);
    if (finalScore[0] > finalScore[1]) {
        gameResult += `The final score is: "${finalScore[0]}" to "${finalScore[1]}". You win!`;
        document.querySelector("demo1").innerHTML = gameResult;
        return gameResult;
    } else if (finalScore[0] < finalScore[1]) {
        gameResult += `The final score is: "${finalScore[0]}" to "${finalScore[1]}". You lose!`;
        document.querySelector("demo1").innerHTML = gameResult;
        return gameResult;
    } else { 
        gameResult += `The final score is: "${finalScore[0]}" to "${finalScore[1]}". It's a draw!`;
        document.querySelector("demo1").innerHTML = gameResult;
        return gameResult;
    }; 
game();