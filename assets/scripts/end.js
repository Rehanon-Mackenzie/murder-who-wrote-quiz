const playerName = document.getElementById('playerName')
const playerScoreButton = document.getElementById('playerScoreButton')
const yourScore = document.getElementById('yourScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')
yourScore.innerText = mostRecentScore

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 10;
console.log(highScores);


playerName.addEventListener('keyup', () => {
    playerScoreButton.disabled = !playerName.value;
})

function savePlayerScore (event) {
event.preventDefault();

const entry = {
    score: Number(mostRecentScore),
    playerName: playerName.value.trim()
};
highScores.push(entry);
highScores.sort((a, b) => b.score - a.score)
highScores.splice(MAX_HIGH_SCORES);

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('index.html');
}