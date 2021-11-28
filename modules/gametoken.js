let token;
function getToken() {
  fetch("https://opentdb.com/api_token.php?command=request")
    .then((response) => response.json())
    .then((data) => {
      token = data.token;
    })
    .catch((error) => console.log(error));
}

export { getToken, token };
