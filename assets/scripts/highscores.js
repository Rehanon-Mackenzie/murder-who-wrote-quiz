const list = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = '';
highScores.forEach (s => {
    list.className = 'high-score';
    list.textContent = `PI ${score.playerName} - ${score.score}`;
list.appenChild(list);
});

