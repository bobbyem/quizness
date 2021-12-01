import { getToken, token } from "./modules/gametoken.js";
import createGameRound from "./modules/gameround.js";
import updateScoreDisplay from "./modules/scoredisplay.js";
//Elements
const settingsBtn = document.querySelector("#settings");
//Variables
let settingsToggled = true;
//Eventlisteners
settingsBtn.addEventListener("click", () => {
  toggleSettingsMenu(!settingsToggled);
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();
});
//Functions
function toggleSettingsMenu(show) {
  //When opening the settings
  if (show) {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
    settingsBtn.classList.remove("fa-cog");
    settingsBtn.classList.add("fa-play");
    settingsToggled = true;
    //Fix positioning for phones
    document.querySelector("nav").style.marginBottom = "10vh";
    return;
  }
  //When closing the settings
  settingsBtn.classList.remove("fa-play");
  settingsBtn.classList.add("fa-cog");
  document.querySelector("#game").scrollIntoView({ behavior: "smooth" });
  settingsToggled = false;
  //Fix positioning for phones
  document.querySelector("nav").style.marginBottom = "0";
  createGameRound();
}
//Show settings on startup
toggleSettingsMenu(true);
updateScoreDisplay();
