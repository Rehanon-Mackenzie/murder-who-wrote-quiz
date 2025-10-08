const playerName = document.getElementById('playerName')
const playerScoreButton = document.getElementById('playerScoreButton')
const yourScore = document.getElementById('yourScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')
yourScore.innerText = mostRecentScore

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 10;


playerName.addEventListener('keyup', () => {
    playerScoreButton.disabled = !playerName.value;
})

function savePlayerScore (event) {
event.preventDefault();

  const raw = playerName.value;
  const safeName = raw.replace(/[<>]/g, '').trim().slice(0, 20);
  if (!safeName) return;

  const entry = {score: Number(mostRecentScore), playerName: safeName };
highScores.push(entry);
highScores.sort((a, b) => b.score - a.score)
highScores.splice(MAX_HIGH_SCORES);

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('index.html');
}