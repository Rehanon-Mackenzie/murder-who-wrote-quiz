const playerName = document.getElementById('playerName')
const playerScoreButton = document.getElementById('playerScoreButton')

playerName.addEventListener('keyup', () => {
    console.log(playerName.value);
    playerScoreButton.disabled = !playerName.value;
})

function savePlayerScore (event) {
console.log("save button clicked");
event.preventDefault();
}