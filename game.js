const choices = ["Lapis", "Papyrus", "Scalpellus"];
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

function computerChooses() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function compareChoices(player, computer) {
  computerChooses();
  const playerScoreBoard = document.querySelector("#p-count");
  const computerScoreBoard = document.querySelector("#c-count");
  if (computer === player) {
    outcomeHandler(
      "It's a tie! The computer and player both chose " + computer
    );
  } else if (computer === choices[0]) {
    if (player === choices[1]) {
      outcomeHandler(
        "The player wins! the computer chose " +
          computer +
          " and the player chose " +
          player
      );
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    } else {
      outcomeHandler(
        "The computer wins! The computer chose " +
          computer +
          " and the player chose " +
          player
      );
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }
  } else if (computer === choices[1]) {
    if (player === choices[2]) {
      outcomeHandler(
        "The player wins! The computer chose " +
          computer +
          " and the player chose " +
          player
      );
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    } else {
      outcomeHandler(
        "The computer wins! The computer chose " +
          computer +
          " and the player chose " +
          player
      );
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }
  } else if (computer === choices[2]) {
    if (player === choices[0]) {
      outcomeHandler(
        "The player wins! The computer chose " +
          computer +
          " and the player chose " +
          player
      );
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    } else {
      outcomeHandler(
        "The computer wins! The computer chose " +
          computer +
          " and the player chose " +
          player
      );
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }
  }
}

buttons.forEach((button) => {
 button.addEventListener("click", (e) => {
    const userChoice = e.target.innerHTML;
    const computerChoice = computerChooses();

    return compareChoices(userChoice, computerChoice);
  });
});

function outcomeHandler(string) {
  let outcome = document.getElementById("result");
  if (!outcome) {
    outcome = document.createElement("p");
    outcome.id = "result";
    document.body.appendChild(outcome);
  }
  outcome.textContent = string;
}

const reset = () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector("#p-count").innerHTML = playerScore;
  document.querySelector("#c-count").innerHTML = computerScore;
  document.querySelector("#result").remove("p");
}