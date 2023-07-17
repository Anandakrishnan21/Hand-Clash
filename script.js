const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const who = document.getElementById("who");
const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");
const computer = document.getElementById("computer");
const you = document.getElementById("you");
const three = document.getElementById("three");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const reset = document.getElementById("reset");

const choices = [
  {
    name: "rock",
    image: "./images/rock.png",
  },
  {
    name: "paper",
    image: "./images/paper.png",
  },
  {
    name: "scissors",
    image: "./images/scissors.png",
  },
];

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

function setWinningScore(clickedElement, score) {
  const elements = [three, five, ten];

  for (const element of elements) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }

  clickedElement.style.backgroundColor = "black";
  clickedElement.style.color = "#fff";

  winningScore = score;
}

three.addEventListener("click", () => {
  setWinningScore(three, 3);
});

five.addEventListener("click", () => {
  setWinningScore(five, 5);
});

ten.addEventListener("click", () => {
  setWinningScore(ten, 10);
});

reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

  computer.innerHTML = "";
  you.innerHTML = "";

  computerScoreDisplay.textContent = 0;
  playerScoreDisplay.textContent = 0;
  who.textContent = "";
});

function updateScores() {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}

function checkWinner() {
  if (playerScore === winningScore) {
    who.textContent = "You win the match 🧚🏼‍♂️🎉 🎉";
    who.style.color = "green";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (computerScore === winningScore) {
    who.textContent = "Computer wins the match 😫😩";
    who.style.color = "green";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function computerChoose() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function displayChoices(computerChoice, playerChoice) {
  const computerImg = document.createElement("img");
  computerImg.src = computerChoice.image;
  computer.innerHTML = "";
  computer.appendChild(computerImg);

  const yourImage = you.querySelector("img");
  if (yourImage) {
    yourImage.src = playerChoice.image;
  } else {
    const yourImage = document.createElement("img");
    yourImage.src = playerChoice.image;
    you.appendChild(yourImage);
  }
}

function playRound(playerChoice) {
  const computerSelection = computerChoose();
  displayChoices(computerSelection, playerChoice);

  if (computerSelection.name === playerChoice.name) {
    who.textContent = "Match Tie";
  } else if (
    (computerSelection.name === "rock" && playerChoice.name === "scissors") ||
    (computerSelection.name === "paper" && playerChoice.name === "rock") ||
    (computerSelection.name === "scissors" && playerChoice.name === "paper")
  ) {
    who.textContent = `Computer Choose ${computerSelection.name} and You choose ${playerChoice.name}`;
    computerScore += 1;
  } else {
    who.textContent = `Computer Choose ${computerSelection.name} and You choose ${playerChoice.name}`;
    playerScore += 1;
  }

  updateScores();
  checkWinner();
}

rock.addEventListener("click", () => {
  playRound(choices[0]);
});

paper.addEventListener("click", () => {
  playRound(choices[1]);
});

scissors.addEventListener("click", () => {
  playRound(choices[2]);
});
