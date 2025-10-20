/**
 * Murder Who Wrote? — end.js
 * ---------------------------------
 * Author: Rehanon Mackenzie
 * Description:
 *   Manages the final score display and saving the player's
 *   name and score to localStorage for the leaderboard.
 *
 * Associated Page: end.html
 *
 * Features:
 *   - Displays final score
 *   - Handles name input and validation
 *   - Saves data to localStorage
 *
 * Last updated: 20 Oct 2025
 */

/* jshint esversion: 8 */
/* End JS */

  const MAX_HIGH_SCORES = 10;

  const playerName = document.getElementById("playerName");
  const playerScoreButton = document.getElementById("playerScoreButton");
  const yourScore = document.getElementById("yourScore");
  const scorePad = document.getElementById("scorePad");

  // robustly read score (defaults to 0 if missing)
  const mostRecentScore = Number(localStorage.getItem("mostRecentScore") || 0);
  if (yourScore) yourScore.textContent = String(mostRecentScore);

  // enable/disable Save button as user types
  function updateButtonState() {
  const hasName = playerName.value.trim().length > 0;
  playerScoreButton.disabled = !hasName;
}
  updateButtonState();
  playerName.addEventListener("input", updateButtonState);

  function parseHighScoresSafe() {
    const score = localStorage.getItem("highScores");
    if (!score) return [];
    try {
      const safeScores = JSON.parse(score);
      return Array.isArray(safeScores) ? safeScores : [];
    } catch (event) {
      console.warn("[end] invalid highScores JSON; resetting.", event);
      return [];
    }
  }

  // handle Save
  scorePad.addEventListener("submit", (event) => {
    event.preventDefault();

    const safeName = (playerName.value || "")
      .replace(/[<>]/g, "")
      .trim()
      .slice(0, 20);
    if (!safeName) return;

    const highScores = parseHighScoresSafe();
    highScores.push({ score: mostRecentScore, playerName: safeName });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    // go to leaderboard page (this matches your first HTML block)
    window.location.assign("index.html"); // or 'highscores.html' if you keep it separate
});
