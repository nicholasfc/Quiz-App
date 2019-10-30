const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

const startGame = () => {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  nextQuestion();
};

const nextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  console.log(currentQuestionIndex, shuffledQuestions.length);
};

const showQuestion = questions => {
  questionElement.innerText = questions.question;
  questions.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
};

const resetState = () => {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = e => {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.add("restart");
    startButton.classList.remove("hide");
  }
};

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};

const clearStatusClass = element => {
  element.classList.remove("correct");
  element.classList.remove("wrong");
};

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});

const questions = [
  {
    question: "Which of the following chemicals are found in eggplant seeds?",
    answers: [
      { text: "Nicotine", correct: true },
      { text: "Mescaline", correct: false },
      { text: "Cyanide", correct: false },
      { text: "Psilocybin", correct: false }
    ]
  },
  {
    question:
      "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
    answers: [
      { text: "3 weeks", correct: false },
      { text: "1 week", correct: false },
      { text: "1 month", correct: true },
      { text: "2 months", correct: false }
    ]
  },
  {
    question: "Which country has the most Trappist breweries?",
    answers: [
      { text: "Netherlands", correct: false },
      { text: "Belgium", correct: true },
      { text: "France", correct: false },
      { text: "USA", correct: false }
    ]
  },
  {
    question: "What was the original name of the search engine Google?",
    answers: [
      { text: "BackRub", correct: true },
      { text: "CatMassage", correct: false },
      { text: "SearchPro", correct: false },
      { text: "Netscape Navigator", correct: false }
    ]
  },
  {
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    answers: [
      { text: "Mike", correct: true },
      { text: "Matthew", correct: false },
      { text: "Mark", correct: false },
      { text: "Max", correct: false }
    ]
  },
  {
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      { text: "Watches", correct: true },
      { text: "Cars", correct: false },
      { text: "Computers", correct: false },
      { text: "Sports Equipment", correct: false }
    ]
  },
  {
    question: 'The term "scientist" was coined in which year?',
    answers: [
      { text: "1833", correct: true },
      { text: "1933", correct: false },
      { text: "1942", correct: false },
      { text: "1796", correct: false }
    ]
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: [
      { text: "Watch", correct: true },
      { text: "Money", correct: false },
      { text: "Keys", correct: false },
      { text: "Notebook", correct: false }
    ]
  },
  {
    question: "When was YouTube founded?",
    answers: [
      { text: "February 14, 2005", correct: true },
      { text: "May 22, 2004", correct: false },
      { text: "September 12, 2005", correct: false },
      { text: "July 19, 2009", correct: false }
    ]
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: [
      { text: "Truth", correct: true },
      { text: "Answer", correct: false },
      { text: "Cause", correct: false },
      { text: "Source", correct: false }
    ]
  }
];
