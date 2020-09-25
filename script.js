function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a draw!";
  }

  let result = "Lose";

  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    result = "Won";
    return `You ${result} the round! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You ${result} the round! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Choose between Rock, Paper and Scissors", "");
    let resultOfTheRound = playRound(userInput, computerPlay());
    if (resultOfTheRound[4] === "W") {
      userScore++;
    }
    if (resultOfTheRound[4] === "L") {
      computerScore++;
    }
    console.log(resultOfTheRound);
    console.log(`Score: ${userScore}:${computerScore}`);
  }
  let resultOfTheGame = "";
  if (userScore > computerScore) {
    resultOfTheGame = "You Won the game!";
  } else if (userScore < computerScore) {
    resultOfTheGame = "You Lose the game!";
  } else {
    resultOfTheGame = "It's a Draw!";
  }
  console.log(`${resultOfTheGame} Final score: ${userScore}:${computerScore}`);
}

