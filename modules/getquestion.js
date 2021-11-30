const difficultySelector = document.getElementById("difficulty-selector");
const categorySelector = document.getElementById("category-selector");
const typeSelector = document.getElementById("type-selector");
const gameSettings = {
  category: "",
  difficulty: "",
  type: "",
};

difficultySelector.addEventListener("change", (e) => {
  if (e.target.value !== "any") {
    gameSettings.difficulty = e.target.value;
    console.log(gameSettings.difficulty);
    return;
  }
  gameSettings.difficulty = "";
});

categorySelector.addEventListener("change", (e) => {
  if (e.target.value !== "any") {
    gameSettings.category = e.target.value;
    console.log(gameSettings.category);
    return;
  }
  gameSettings.category = "";
});
typeSelector.addEventListener("change", (e) => {
  if (e.target.value !== "any") {
    gameSettings.type = e.target.value;
    console.log(gameSettings.type);
    return;
  }
  gameSettings.type = "";
});

async function getQuestion() {
  let url = "https://opentdb.com/api.php?amount=1";
  //Set gamedifficulty if set
  if (gameSettings.difficulty) {
    url = url.concat(`&difficulty=${gameSettings.difficulty}`);
    console.log(url);
  }
  if (gameSettings.category) {
    url = url.concat(`&category=${gameSettings.category}`);
    console.log(url);
  }
  if (gameSettings.type) {
    url = url.concat(`&type=${gameSettings.type}`);
    console.log(url);
  }
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results[0];
    })
    .catch(console.error);
}
export default getQuestion;
