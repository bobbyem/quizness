import getQuestion from "./getquestion.js";
const questionArea = document.getElementById("question");
const answerArea = document.getElementById("answers");
async function createGameRound(data) {
  let question = await getQuestion().then((value) => console.log(value));
}

export default createGameRound;
