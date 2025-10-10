document.addEventListener("DOMContentLoaded", () => {
  const highScoresList = document.getElementById("highScoresList");
  if (!highScoresList) return;
});

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = "";
highScores.forEach(({ playerName, score }) => {
  const li = document.createElement("li");
  li.textContent = `${playerName} - ${score}`;
  highScoresList.appendChild(li);
});
