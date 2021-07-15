import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
import Rock from "../images/rock.png";
import Question from "../images/question.jpg";

const computerIMG = document.querySelector(".computer__img");
const playerIMG = document.querySelector(".player__img");

computerIMG.src = Question;
playerIMG.src = Question;

const images = document.querySelector(".images");

const imgPaper = document.createElement("img");
imgPaper.src = Paper;
imgPaper.alt = "Paper";
images.appendChild(imgPaper);

const imgScissors = document.createElement("img");
imgScissors.src = Scissors;
imgScissors.alt = "Scissors";
images.appendChild(imgScissors);

const imgRock = document.createElement("img");
imgRock.src = Rock;
imgRock.alt = "Rock";
images.appendChild(imgRock);
