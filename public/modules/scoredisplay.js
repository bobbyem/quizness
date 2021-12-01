import playerStats from "./playerstats.js";
//Elements
const scoreDisplay = document.querySelector("#score-display");
let scoreText = document.createElement("p");
//Append scoretext to display
scoreDisplay.appendChild(scoreText);
//Functions
function updateScoreDisplay() {
  scoreText.innerHTML = playerStats.score;
}

export default updateScoreDisplay;
