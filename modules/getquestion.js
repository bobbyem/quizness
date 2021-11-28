async function getQuestion() {
  return fetch(
    "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results[0];
    })
    .catch(console.error);
}
export default getQuestion;
