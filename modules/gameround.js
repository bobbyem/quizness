import getQuestion from "./getquestion.js";
import playerStats from "./playerstats.js";
import updateScoreDisplay from "./scoredisplay.js";
//Elements
const questionArea = document.getElementById("question");
const answerArea = document.getElementById("answers");
let wrongAnswers = [];
let correctAnswer;
let gameOver = true;
//Functions
async function createGameRound() {
  //Clear Displays
  questionArea.innerHTML = "";
  answerArea.innerHTML = "";
  answerArea.classList.remove("reset");
  questionArea.classList.remove("reset");
  wrongAnswers = [];
  correctAnswer = "";
  //Create question and answers
  let question = await getQuestion().then((value) => {
    console.log(value);
    //Create and add Category to game
    let category = document.createElement("h1");
    category.innerHTML = value.category;
    questionArea.appendChild(category);
    //Create and add difficulty
    let difficulty = document.createElement("h2");
    difficulty.innerHTML = value.difficulty.toUpperCase();
    questionArea.appendChild(difficulty);
    //Create and add question to game
    let questionText = document.createElement("p");
    questionText.innerHTML = value.question;
    questionArea.appendChild(questionText);
    //Create and add answer to game
    value.incorrect_answers.forEach((element) => {
      let answer = document.createElement("section");
      answer.classList.add("answer");
      answer.innerHTML = element;
      // answerArea.appendChild(answer);
      wrongAnswers.push(answer);
      //Add listener for wrong answer
      answer.addEventListener("click", wrong, true);
    });
    //Correct answer
    let answer = document.createElement("section");
    correctAnswer = answer;
    answer.classList.add("answer");
    answer.innerHTML = value.correct_answer;
    // answerArea.appendChild(correctAnswer);
    //Add listener for correct answer
    correctAnswer.addEventListener("click", correct, true);
    //Game is started
    gameOver = false;
    randomize();
  });
}

function randomize() {
  let answers = [...wrongAnswers, correctAnswer];
  while (answers.length > 0) {
    let index = Math.floor(Math.random() * answers.length);
    answerArea.appendChild(answers[index]);
    answers.splice(index, 1);
  }
  console.log(answers);
}

function correct() {
  correctAnswer.classList.add("correct");
  correctAnswer.style.pointerEvents = "none";
  wrongAnswers.forEach((element) => {
    element.classList.add("wrong");
    element.style.pointerEvents = "none";
  });
  playerStats.addScore(300);
  playerStats.addWin();
  updateScoreDisplay();
  reset();
}

function wrong() {
  correctAnswer.classList.add("correct");
  correctAnswer.style.pointerEvents = "none";
  wrongAnswers.forEach((element) => {
    element.classList.add("wrong");
    element.style.pointerEvents = "none";
  });
  playerStats.addScore(-300);
  playerStats.addLoss();
  updateScoreDisplay();
  reset();
}

function reset() {
  answerArea.classList.add("reset");
  questionArea.classList.add("reset");
  setTimeout(() => {
    createGameRound();
  }, 5000);
}

export default createGameRound;
