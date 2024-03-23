// Array of questions with options and correct answers
const questions = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Solutions", "Computer Style Syntax", "Coded Style System"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which property is used to change the background color of an element?",
    options: ["background-color", "color", "text-color", "background"],
    answer: "background-color"
  },
  {
    question: "Which CSS property is used to control the text size of an element?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "What does the 'C' in CSS stand for?",
    options: ["Cascading", "Colorful", "Creative", "Coded"],
    answer: "Cascading"
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-decoration", "font-style", "bold"],
    answer: "font-weight"
  },
  {
    question: "Which symbol precedes an ID selector in CSS?",
    options: ["#", ".", "$", "@"],
    answer: "#"
  },
  {
    question: "Which CSS property is used to add shadows to text?",
    options: ["text-shadow", "shadow", "font-shadow", "text-effect"],
    answer: "text-shadow"
  },
  {
    question: "Which CSS property is used to change the spacing between lines of text?",
    options: ["line-height", "text-spacing", "word-spacing", "line-spacing"],
    answer: "line-height"
  },
  {
    question: "Which CSS property is used to control the layout of an element?",
    options: ["display", "layout", "arrange", "position"],
    answer: "display"
  },
  {
    question: "Which CSS property is used to add rounded corners to an element?",
    options: ["border-radius", "corner-style", "rounded-style", "border-style"],
    answer: "border-radius"
  },
  {
    question: "Which symbol precedes a class selector in CSS?",
    options: [".", "#", "$", "@"],
    answer: "."
  },
  {
    question: "Which CSS property is used to specify the space between cells of a table?",
    options: ["border-spacing", "cell-spacing", "table-spacing", "spacing"],
    answer: "border-spacing"
  },
  {
    question: "Which CSS property is used to specify the style of the border of an element?",
    options: ["border-style", "outline-style", "border-design", "style"],
    answer: "border-style"
  },
  {
    question: "Which CSS property is used to hide an element?",
    options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hidden: true;"],
    answer: "display: none;"
  },
  {
    question: "Which CSS property is used to align text vertically?",
    options: ["vertical-align", "align-text", "text-align", "align"],
    answer: "vertical-align"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const tryAgainButton = document.getElementById('try-again-button');
const welcomeScreen = document.querySelector('.welcome');

// Event listeners
startButton.addEventListener('click', startQuiz);
tryAgainButton.addEventListener('click', startQuiz);

// Function to display question and options
function displayQuestion() {
  welcomeScreen.style.display = 'none'; // Hide welcome message screen
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.classList.add('option');
    optionButton.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(optionButton);
  });
}

// Function to check answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the quiz
function startQuiz() {
  startButton.style.display = 'none';
  tryAgainButton.style.display = 'none';
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  startTimer();
}

// Function to start the timer
function startTimer() {
  let timeLeft = 60; // 30 seconds
  timerElement.textContent = `Time Left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timer);
  quizContainer.innerHTML = `<h2>Quiz Ended!</h2>
    <p>Your final score is: ${score}</p>`;
  tryAgainButton.style.display = 'block';
}