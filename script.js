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
  let color = "gray";
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
    color = "green";
  } else {
    computerScore++;
    outcome = "lost";
    color = "red";
  }
  resultsString.innerHTML = `<p>You chose:</p>
    <img src="./img/${playerSelection.toLowerCase()}.png" alt=${playerSelection.toLowerCase()} width="150px" height="150px" />
    <p>Computer chose:</p>
    <img src="./img/${computerSelection.toLowerCase()}.png" alt=${computerSelection.toLowerCase()} width="150px" height="150px" />
    <p style="background-color:${color};">You ${outcome} the round!</p>`;
  resultsDisplay.innerText = `${playerScore}:${computerScore}`;

  if (computerScore == 5 || playerScore == 5) {
    setTimeout(() => {
      resultsString.innerHTML = `<p style="background-color:${color};"> ${
        computerScore == 5 ? "Commiserations" : "Congratulations"
      }! You ${outcome} the match!</p>`;
      computerScore = 0;
      playerScore = 0;
      resultsDisplay.innerText = `${playerScore}:${computerScore}`;
    }, 2000);

    setTimeout(() => {
      resultsString.innerHTML = `<p>Let's play again!</p>`;
    }, 4000);
  }
}

const options = document.querySelectorAll(".options");
console.log(options);

options[0].addEventListener("click", (e) =>
  playRound(options[0].attributes[0].value, computerPlay())
);
options[1].addEventListener("click", (e) =>
  playRound(options[1].attributes[0].value, computerPlay())
);
options[2].addEventListener("click", (e) =>
  playRound(options[2].attributes[0].value, computerPlay())
);
