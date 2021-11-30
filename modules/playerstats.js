const playerStats = {
  score: localStorage.playerScore ? parseInt(localStorage.playerScore, 10) : 0,
  wins: localStorage.playerWins ? parseInt(localStorage.playerWins, 10) : 0,
  losses: localStorage.playerLosses
    ? parseInt(localStorage.playerLosses, 10)
    : 0,
  addScore: function (amount) {
    this.score = this.score + amount;
    localStorage.playerScore = this.score;
    console.log(`Playerscore = ${this.score}`);
  },
  addWin: function () {
    this.wins = this.wins + 1;
    localStorage.playerWins = this.wins;
  },
  addLoss: function () {
    this.losses = this.losses + 1;
    localStorage.playerLosses = this.losses;
  },
};

export default playerStats;
