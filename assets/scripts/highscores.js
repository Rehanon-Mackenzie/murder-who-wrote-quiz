const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML =
highScores.map(score => `<li class="high-score">PI ${score.playerName} - ${score.score}</li>`)
.join("");
