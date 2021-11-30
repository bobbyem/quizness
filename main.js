import { getToken, token } from "./modules/gametoken.js";
import createGameRound from "./modules/gameround.js";
import updateScoreDisplay from "./modules/scoredisplay.js";

const settingsBtn = document.querySelector("#settings");
let settingsToggled = true;

settingsBtn.addEventListener("click", () => {
  toggleSettingsMenu(!settingsToggled);
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();
});

function toggleSettingsMenu(show) {
  if (show) {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
    settingsToggled = true;
    return;
  }
  document.querySelector("#game").scrollIntoView({ behavior: "smooth" });
  settingsToggled = false;
  createGameRound();
}
//Show settings on startup
document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
updateScoreDisplay();
