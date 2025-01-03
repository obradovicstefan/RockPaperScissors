"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const signs = Math.floor(Math.random() *3) + 1;
  if (signs == 1) {
    return "rock";
  } else if (signs == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let inputSign = prompt("Please, enter your choice: ").toLowerCase();
  return inputSign;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  } else if (humanChoice == computerChoice) {
    return "Draw!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = playRound(humanChoice, computerChoice);

    alert(`Round ${i + 1}\nYou chose: ${humanChoice}\nComputer chose: ${computerChoice}\n${winner}`);
  }

  if(humanScore > computerScore) {
    alert(`You win the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`You lose the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
  } else {
    alert(`Draw!\nYour score: ${humanScore}\nComputer Score: ${computerScore}`);
  }
}
playGame();