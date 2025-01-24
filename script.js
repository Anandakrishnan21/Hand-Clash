const playingHands = document.querySelector(".playingHands");
const userImg = document.querySelector(".userChoice img");
const compImg = document.querySelector(".computerChoice img");
const userPoints = document.querySelector(".userScore");
const computerPoints = document.querySelector(".computerScore");
const clickedOptions = document.querySelectorAll(".option");
const winner = document.querySelector(".winner");

const compArray = [
  {
    name: "stone",
    src: "/images/2.png",
  },
  {
    name: "paper",
    src: "/images/3.png",
  },
  {
    name: "scissors",
    src: "/images/1.png",
  },
];

let winningScore = 5;
let userScore = 0;
let computerScore = 0;
const handleOptionClick = (e) => {
  const clickedOption = e.currentTarget;
  const clickedIndex = Array.from(clickedOptions).indexOf(clickedOption);
  playingHands.classList.add("start");

  setTimeout(() => {
    playingHands.classList.remove("start");
    const userSrc = clickedOption.querySelector("img").src;
    const compRandom = Math.floor(Math.random() * compArray.length);
    const computerChoice = compArray[compRandom];
    userImg.src = userSrc;
    compImg.src = computerChoice.src;

    scoreCounter(clickedIndex, compRandom, computerChoice);
  }, 2000);

  userImg.src = "/images/4.png";
  compImg.src = "/images/2.png";
};

clickedOptions.forEach((option) => {
  option.addEventListener("click", handleOptionClick);
});

const scoreCounter = (clickedIndex, compRandom, computerChoice) => {
  if (clickedIndex === compRandom) {
    console.log("Match tie");
  } else if (
    (clickedIndex === 0 && computerChoice.name === "scissors") ||
    (clickedIndex === 1 && computerChoice.name === "stone") ||
    (clickedIndex === 2 && computerChoice.name === "paper")
  ) {
    userScore++;
    userPoints.textContent = userScore;
  } else {
    computerScore++;
    computerPoints.textContent = computerScore;
  }

  MatchFixing();
};

const MatchFixing = () => {
  if (userScore === winningScore) {
    clickedOptions.forEach((option) => {
      option.removeEventListener("click", handleOptionClick);
    });
    winner.textContent = "You won the match!!";
  } else if (computerScore === winningScore) {
    clickedOptions.forEach((option) => {
      option.removeEventListener("click", handleOptionClick);
    });
    winner.textContent = "Computer won the match!!";
  }
};
