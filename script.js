let computerScore = 0;
let playerScore = 0;
const resultsDisplay = document.querySelector("#display-results");
resultsDisplay.innerText = `${playerScore}:${computerScore}`;
const resultsString = document.querySelector("#resultsString");
function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  let outcome = "";
  let color = 'magenta';
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    outcome = "draw";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    playerScore++;
    outcome = "won";
    color = 'green';
  } else {
    computerScore++;
    outcome = "lost";
    color = 'red';
  }
  resultsString.innerHTML = `<p>You chose:</p>
    <img src="./img/${playerSelection.toLowerCase()}.jpg" alt=${playerSelection.toLowerCase()} width="150px" height="150px" />
    <p>Computer chose:</p>
    <img src="./img/${computerSelection.toLowerCase()}.jpg" alt=${computerSelection.toLowerCase()} width="150px" height="150px" />
    <p style="background-color:${color};">You ${outcome} the round!</p>`;
  resultsDisplay.innerText = `${playerScore}:${computerScore}`;
}

// function game() {
//   let userScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let userInput = prompt("Choose between Rock, Paper and Scissors", "");
//     let resultOfTheRound = playRound(userInput, computerPlay());
//     if (resultOfTheRound[4] === "W") {
//       userScore++;
//     }
//     if (resultOfTheRound[4] === "L") {
//       computerScore++;
//     }
//     console.log(resultOfTheRound);
//     console.log(`Score: ${userScore}:${computerScore}`);
//   }
//   let resultOfTheGame = "";
//   if (userScore > computerScore) {
//     resultOfTheGame = "You Won the game!";
//   } else if (userScore < computerScore) {
//     resultOfTheGame = "You Lose the game!";
//   } else {
//     resultOfTheGame = "It's a Draw!";
//   }
//   console.log(`${resultOfTheGame} Final score: ${userScore}:${computerScore}`);
// }

const options = document.querySelectorAll(".options");
console.log(options);
// options.forEach((element) =>
//   addEventListener("click", (e) => {
//     alert(`you clicked ${element.attributes[0].value}`);
//     e.stopPropagation();
//   })
// );

options[0].addEventListener("click", (e) =>
  playRound(options[0].attributes[0].value, computerPlay())
);
options[1].addEventListener("click", (e) =>
  playRound(options[1].attributes[0].value, computerPlay())
);
options[2].addEventListener("click", (e) =>
  playRound(options[2].attributes[0].value, computerPlay())
);
