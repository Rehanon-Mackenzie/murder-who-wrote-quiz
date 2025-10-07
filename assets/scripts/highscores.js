const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML =
highScores.map(score => {
    return(`<li class="high-score">Detective ${score.playerName} - ${score.score}</li>`)
})
.join("");
