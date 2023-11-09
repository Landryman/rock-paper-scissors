
const options = ["Rock", "Paper", "Scissors"];
const container = document.querySelector('div');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');

container.appendChild(buttonOne);
container.appendChild(buttonTwo);
container.appendChild(buttonThree);

const buttons = document.querySelectorAll('button');

buttons.forEach(createButtonTextAttributes);
function createButtonTextAttributes(button, index) {
  button.textContent = options[index];
}

let rounds = 0;
let roundResults = [];
let scoreLog = [0, 0];

const introText = document.createElement("h1");
introText.innerHTML = "Lets play RPS!" + "<br />" + "Click a button!";
const playerText = document.createElement("h1");
const computerText = document.createElement("h1");
const gameResultText = document.createElement("h1")
const roundResultText = document.createElement("h2");
const h3 = document.createElement("h3");
h3.style.fontStyle = "italic";

container.insertBefore(gameResultText, buttonOne);
container.insertBefore(roundResultText, gameResultText);
container.insertBefore(computerText, roundResultText);
container.insertBefore(playerText, computerText);
container.insertBefore(introText, playerText);
container.appendChild(h3);

function endGame() {
 h3.textContent = "Thanks for playing RPS!";
  buttons.forEach((button) => {
    button.removeEventListener('click', playGame);
    });
}

function getFinalScore(roundScore) {
  console.log("roundScore = " + roundScore);
  let gameResult = "";
  if (roundScore[0] > roundScore[1]) {
    gameResult = `The final score is: "${roundScore[0]}" to "${roundScore[1]}". You win!`;
    gameResultText.textContent = gameResult;
    endGame();
  } else if (roundScore[0] < roundScore[1]) {
    gameResult = `The final score is: "${roundScore[0]}" to "${roundScore[1]}". You lose!`;
    gameResultText.textContent = gameResult;
    endGame();
  } else {
    gameResult = `The final score is: "${roundScore[0]}" to "${roundScore[1]}". It's a draw!`;
    gameResultText.textContent = gameResult;
    endGame();
  }
}

function scoreRound(arg1) {
  console.log("arg1[0] = " + arg1[0]); 
  console.log("arg1[1] = " + arg1[1]);
  // for (let i = 0; i <= rounds - 1; i++) {
    if (arg1[0] === arg1[1]) {
      scoreLog[0] += 0;
      scoreLog[1] += 0;
      console.log("0 second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1])
      roundResultText.textContent = "It's a tie. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Rock" && arg1[1] === "Paper") {
      scoreLog[1]++;
      roundResultText.textContent = "Paper covers Rock. I win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("1-1. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Rock" && arg1[1] === "Scissors") {
      scoreLog[0]++;
      roundResultText.textContent = "Rock breaks scissors. You win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("1-2. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Paper" && arg1[1] === "Scissors") {
      scoreLog[1]++;
      roundResultText.textContent =  "Scissors cuts paper. I win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("2-1. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Paper" && arg1[1] === "Rock") {
      scoreLog[0]++;
      roundResultText.textContent = "Paper covers rock. You win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("2-2. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Scissors" && arg1[1] === "Rock") {
      scoreLog[1]++;
      roundResultText.textContent = "Rock breaks scissors. I win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("3-1. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    } else if (arg1[0] === "Scissors" && arg1[1] === "Paper") {
      scoreLog[0]++;
      roundResultText.textContent = "Scissors cuts paper. You win. Score is " + scoreLog[0] + " to " + scoreLog[1] + ".";
      h3.textContent = "Click a button to play another round."
      console.log("3-2. second log of 'scoreLog' = " + scoreLog[0] + ", " + scoreLog[1]);
        if (scoreLog[0] === 5 || scoreLog[1] === 5) {
          getFinalScore(scoreLog);
        }
    }
  // }
}
  

function playRound(yourChoice) {
  
  console.log("round # = " + (rounds + 1));
  console.log("current 'scoreLog' = " + scoreLog);
  
  let randomNumber = Math.floor(Math.random() * 3);
  
  for (let i = 0; i < buttons.length; i++) {  
    if (event.target.textContent === buttons[i].textContent) {
      let choices = [yourChoice, options[randomNumber]];
      playerText.textContent = "You chose " + choices[0] + ".";
      computerText.textContent = "I chose " + choices[1] + ".";
      h3.textContent = "Click a button to play another round."
      roundResults.push(choices);
      console.log("'roundResults' for this round *" + (rounds + 1) + "* = ", roundResults[rounds]);
      console.log("'roundResults' =", roundResults);
      console.log("'choices' for this round *" + (rounds + 1) + "* = " + choices[0] + " and " + choices[1]);
      rounds++;
      scoreRound(choices);
    }
  }
}

function playGame() {
  let playerChoice = event.target.textContent;
  introText.textContent = "";
  playRound(playerChoice);
}

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});