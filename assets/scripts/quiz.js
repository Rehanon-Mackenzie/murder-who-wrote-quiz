const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("options"));
const quiz = document.getElementById('quizArea');


let acceptingAnswers = true;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];


let questions = [];

// loads the questions from JSON file
async function loadQuestions() {
  try {
    const res = await fetch ('./assets/scripts/quiz.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json();
    questions = data;
    startQuiz();
  } catch (err) {
    console.error('Failed to load questions:', err);
    document.getElementById('question').innerHTML = 'Sorry could not load quiz questions.';
  }
}


loadQuestions();


// constants

const correct_bonus = 10;
const max_questions = 20;

startQuiz = () => {
  questionNumber = 0;
  score = 0;
  availableQuestions = [...questions]
  getNextQuestion();
}


getNextQuestion = () => {
  questionNumber++;
 const questionIndex = Math.floor(Math.random() * availableQuestions.length);
 let currentQuizQuestion =  availableQuestions[questionIndex];
  question.innerText = currentQuizQuestion.question;
  let correctAnswer = currentQuizQuestion.answer_index;
  console.log(correctAnswer);
  let correctAnswerText = currentQuizQuestion.options[correctAnswer];
  console.log(correctAnswerText);

//  set options text
options.forEach((options, i)=> {
  options.innerText = currentQuizQuestion.options[i] || '' ;
})

}
 
options.forEach((options,i) => {
  options.addEventListener('click', (options) => {
    const chosenAnswer = e.currentTarget.innerText;
    checkAnswer = (chosenAnswer) => {
  if (chosenAnswer === correctAnswer) {
    console.log('yay')
  } else (
    console.log('bad luck')
  ) };
  });
  checkAnswer(chosenAnswer)
});




 





