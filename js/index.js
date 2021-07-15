import "../scss/styles.scss";
import "./imagesRender";

import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
import Rock from "../images/rock.png";
import Question from "../images/question.jpg";

const rounds = document.querySelector(".rounds__inner");
const reset = document.getElementById("reset");
const images = document.querySelector(".images");

const computerScoreHTML = document.querySelector(".computer__score");
const playerScoreHTML = document.querySelector(".player__score");

const computerIMG = document.querySelector(".computer__img");
const playerIMG = document.querySelector(".player__img");

const options = ["Paper", "Rock", "Scissors"];

const startGame = () => {
  console.log("start");
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;

  const listener = (e) => {
    e.preventDefault();
    console.log(e.target.alt);
    game(e.target.alt);
  };

  images.addEventListener("click", listener);

  const game = (player) => {
    console.log("game");
    let computer = Math.floor(Math.random() * 3);
    let paragraph = document.createElement("p");
    let text = "";

    if (player === options[computer]) {
      text = "Tie!";
      if (player === "Scissors") {
        computerIMG.src = Scissors;
        playerIMG.src = Scissors;
      } else if (player === "Paper") {
        computerIMG.src = Paper;
        playerIMG.src = Paper;
      } else {
        computerIMG.src = Rock;
        playerIMG.src = Rock;
      }
    } else if (player === "Rock") {
      playerIMG.src = Rock;
      if (options[computer] === "Paper") {
        computerIMG.src = Paper;
        computerScoreHTML.innerHTML = `${++computerScore}`;
        text = "You've LOST!";
      } else {
        computerIMG.src = Scissors;
        playerScoreHTML.innerHTML = `${++playerScore}`;
        text = "You've WON!";
      }
    } else if (player === "Scissors") {
      playerIMG.src = Scissors;
      if (options[computer] === "Rock") {
        computerIMG.src = Rock;
        computerScoreHTML.innerHTML = `${++computerScore}`;
        text = "You've LOST!";
      } else {
        computerIMG.src = Paper;
        playerScoreHTML.innerHTML = `${++playerScore}`;
        text = "You've WON!";
      }
    } else if (player === "Paper") {
      playerIMG.src = Paper;
      if (options[computer] === "Scissors") {
        computerIMG.src = Scissors;
        computerScoreHTML.innerHTML = `${++computerScore}`;
        text = "You've LOST!";
      } else {
        computerIMG.src = Rock;
        playerScoreHTML.innerHTML = `${++playerScore}`;
        text = "You've WON!";
      }
    }
    paragraph.innerHTML = `Round ${round++}, ${player} vs ${
      options[computer]
    }, ${text}`;
    rounds.append(paragraph);

    if (computerScore === 3 || playerScore === 3) {
      alert(`${computerScore === 3 ? "You've LOST!!!" : "You've WON!!!"} `);
      images.removeEventListener("click", listener);
    }
  };

  const listenerDrop = () => {
    images.removeEventListener("click", listener);
    rounds.innerHTML = "";
    computerScoreHTML.innerHTML = "0";
    playerScoreHTML.innerHTML = "0";
    computerIMG.src = Question;
    playerIMG.src = Question;

    reset.removeEventListener("click", listenerDrop);
    startGame();
  };

  reset.addEventListener("click", listenerDrop);
};

startGame();
