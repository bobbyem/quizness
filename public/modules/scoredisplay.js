import playerStats from "./playerstats.js";
//Elements
const scoreDisplay = document.querySelector("#score-display");
let scoreText = document.createElement("p");
//Append scoretext to display
scoreDisplay.appendChild(scoreText);
//Functions
function updateScoreDisplay() {
  scoreText.innerHTML = playerStats.score;
  scoreDisplay.classList.add("catching");
  setTimeout(() => {
    scoreDisplay.classList.remove("catching");
  }, 1000);
}

export default updateScoreDisplay;
