const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("options"));
const quiz = document.getElementById("quizArea");

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

// constants

const correct_bonus = 10;
const max_questions = 20;

startQuiz = () => {
  questionNumber = 0;
  score = 0;
  availableQuestions = [...questions];
  for (let i = availableQuestions.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [availableQuestions[i], availableQuestions[j]] = [availableQuestions [j], availableQuestions[i]];
  }
  availableQuestions =availableQuestions.slice(0, max_questions);
  console.log(availableQuestions);
  getNextQuestion();
};



getNextQuestion = () => {
  if (questionNumber >= max_questions || availableQuestions.length === 0) {
    console.log ("Quiz Finished!  Final score:", score);
  }
  questionNumber++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestionItem = availableQuestions.splice(questionIndex, 1)[0];

  question.innerText = currentQuestionItem.question;
   //  set options text
  options.forEach((options, i) => {
    options.innerText = currentQuestionItem.options[i] || "";
    options.dataset.index = i;
  });
};

 

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    const chosenAnswerIndex = Number(event.currentTarget.dataset.index);
    const correctAnswerIndex = currentQuestionItem.answer_index;
  
    if(chosenAnswerIndex === correctAnswerIndex) {
      console.log('Wahoo!')
    } else {
      console.log('oh next time')
    }
  
    getNextQuestion()
  });
});