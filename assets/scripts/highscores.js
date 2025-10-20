/**
 * Murder Who Wrote? — highscores.js
 * ---------------------------------
 * Author: Rehanon Mackenzie
 * Description:
 *   Retrieves saved scores from localStorage and displays
 *   them as a sorted leaderboard.
 *
 * Associated Page: highscores.html
 *
 * Features:
 *   - Fetches scores from localStorage
 *   - Sorts and displays top results
 *   - Provides option to clear stored scores
 *
 * Last updated: 20 Oct 2025
 * 
 *//* jshint esversion: 8 */
/* High scores JS */

 document.addEventListener("DOMContentLoaded", () => {
  const highScoresList = document.getElementById("highScoresList");
  if (!highScoresList) return;

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScoresList.innerHTML = "";

  if (highScores.length === 0) {
  // Lets player know there are no high scores yet
    const li = document.createElement("li");
    li.textContent = "No high scores yet — play a game!";
    li.style.fontStyle = "italic";
    highScoresList.appendChild(li);
    return;
  }
  
  highScores.forEach(({ playerName, score }) => {
    const li = document.createElement("li");
    li.textContent = `PI ${playerName} - ${score}`;
    highScoresList.appendChild(li);
  });
});