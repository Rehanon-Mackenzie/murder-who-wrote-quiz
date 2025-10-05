const HIGHSCORES_KEY = 'mwq_highscores';
const LAST_SCORE_KEY  = 'mwq_lastScore';

document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('scoresList');
  const lastEl = document.getElementById('lastScore');

  const highscores = JSON.parse(localStorage.getItem(HIGHSCORES_KEY) || '[]');
  const last = localStorage.getItem(LAST_SCORE_KEY);

  if (lastEl && last) lastEl.textContent = `Your last score: ${last}`;

  if (!highscores.length) {
    listEl.innerHTML = '<li>No scores yet. Be the first!</li>';
  } else {
    listEl.innerHTML = highscores
      .map(s => `<li><strong>${s.score}</strong> — ${s.name}</li>`)
      .join('');
  }

  document.getElementById('playAgain')?.addEventListener('click', () => {
    window.location.href = 'quiz.html';
  });
});