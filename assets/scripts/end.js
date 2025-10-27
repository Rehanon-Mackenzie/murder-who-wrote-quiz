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

  // reads score (defaults to 0 if missing)
  const mostRecentScore = Number(localStorage.getItem("mostRecentScore") || 0);
  if (yourScore) yourScore.textContent = String(mostRecentScore);

  // enable/disable Save button to ensure user has typed their name in input field
  function updateButtonState() {
  const hasName = playerName.value.trim().length > 0;
  playerScoreButton.disabled = !hasName;
}
  updateButtonState();
  playerName.addEventListener("input", updateButtonState);

  // renders user's score in your score element
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

    const highScores = parseHighScoresSafe(); // retrieves existing high scores or creates a new array if there are no scores saved
    highScores.push({ score: mostRecentScore, playerName: safeName }); // adds the player's most recent score
    //Sorts scores into descending order and keeps only the top 10
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highScores", JSON.stringify(highScores)); // saves updated high scores list back to local storage
    window.location.assign("index.html"); // redirects player back to the home page
});
