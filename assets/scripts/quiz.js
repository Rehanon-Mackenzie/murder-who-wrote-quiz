/**
 * Murder Who Wrote? — quiz.js
 * ---------------------------------
 * Author: Rehanon Mackenzie
 * Description:
 *   Core quiz functionality — handles question display, scoring,
 *   and visual feedback for correct/incorrect answers.
 *
 * Associated Page: quiz.html
 *
 * Features:
 *   - Loads questions dynamically
 *   - Tracks current question index and score
 *   - Provides progress bar updates
 *   - Stores player score in localStorage
 *
 * Last updated: 20 Oct 2025
 */

/* jshint esversion: 8 */
/* Quiz JS */

const question = document.getElementById("question");
const options = Array.from(document.querySelectorAll(".options"));
const rows = Array.from(document.querySelectorAll(".quiz-container"));
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const scoreEl = document.getElementById("score");

let acceptingAnswers = true;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];
let currentQuestionItem;

let questions = [];

// loads the questions from JSON file
async function loadQuestions() {
  try {
    const res = await fetch("./assets/scripts/quiz.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    questions = data;
    startQuiz();
  } catch (err) {
    console.error("Failed to load questions:", err);
    document.getElementById("question").innerHTML =
      "Sorry could not load quiz questions.";
  }
}

loadQuestions();



const correct_bonus = 10;
const max_questions = 20;

// Starts quiz

function startQuiz () {
  questionNumber = 0;
  score = 0;
  scoreEl.textContent = "0";
  progressText.textContent = `Question 1 / ${max_questions}`;
  progressBar.style.width = "0%";
  progressBar.parentElement.setAttribute("aria-valuenow", "0");
  availableQuestions = [...questions];
  for (let i = availableQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableQuestions[i], availableQuestions[j]] = [
      availableQuestions[j],
      availableQuestions[i],
    ];
  }
  availableQuestions = availableQuestions.slice(0, max_questions);
  getNextQuestion();
}

// randomises and loads questions automatically

function getNextQuestion () {
  if (questionNumber >= max_questions || availableQuestions.length === 0) {
    finishQuiz();
    return;
  }
  questionNumber++;
  updateHud();
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestionItem = availableQuestions.splice(questionIndex, 1)[0];

  question.innerText = currentQuestionItem.question;
  //  set options text
  options.forEach((option, i) => {
    option.innerText = currentQuestionItem.options[i] || "";
    option.dataset.answerIndex = String(i);
  });
}

// finishes quiz and sends user to end page

function finishQuiz() {
  localStorage.setItem("mostRecentScore", score);

  window.location.href = "end.html";
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false; // stops player from clicking another answer

    const chosen = Number(option.dataset.answerIndex);
    const correct = currentQuestionItem.answer_index;
    const result = chosen === correct ? "correct" : "incorrect";

    rows.forEach((r) => r.classList.remove("correct", "incorrect"));

    const selectedRow = option.closest(".quiz-container") || option;
    selectedRow.classList.add(result);

// shows if answer is correct or incorrect

    if (result === "correct") {
      score += correct_bonus;
      scoreEl.textContent = String(score);
    } else {
      const correctOption = options.find(
        (o) => Number(o.dataset.answerIndex) === correct,
      );
      const correctRow = correctOption ? correctOption.closest(".quiz-container")
        : null;
      if (correctRow) {
        correctRow.classList.add("correct");
      }
    }

    setTimeout(() => {
      rows.forEach((r) => r.classList.remove("correct", "incorrect"));

      getNextQuestion();
      acceptingAnswers = true; // unlocks the choices on the next question 
    }, 1000);
  });
});
function updateHud() {
  // Text: “Question X / N”
  progressText.textContent = `Question ${questionNumber} / ${max_questions}`;

// Fills in progress bar proportionally
  const pct = Math.round(((questionNumber - 1) / max_questions) * 100);
  progressBar.style.width = `${pct}%`;
  progressBar.parentElement.setAttribute("aria-valuenow", String(pct));

  // Score
  scoreEl.textContent = String(score);
}
