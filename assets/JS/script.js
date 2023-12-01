var questionsE1 = document.getElementById("questions");
var answersE1 = document.getElementById("answers");
var timerE1 = document.getElementById("time-allowed");
var startBtn = document.querySelector(".start");
var timer;
var timeAllowed;
var score = 0;

// var quiz = document.createElement("<h2>");
var questionTitle = document.getElementById("question-title");
//
var currentIndex = 0;
var quiz = [
  {
    question: "What is the fastet bird on the planet?",
    rightAns: "Peregrine Falcon",
    possAnswers: ["Bald Eagle", "Peregrine Falcon", "Sparrow", "Robin"],
  },
  {
    question: "What is the most common waterfowl in Colorado?",
    rightAns: "duck",
    possAnswers: ["duck", "heron"],
  },
];

function startQuiz() {
  isCorrect = false;
  timeAllowed = 80;
  startBtn.disabled = true;
  getQuestion();
  startTimer();
}
function getQuestion() {
  var currentQuestion = quiz[currentIndex];
  //   console.log(currentQuestion);

  for (var i = 0; i < currentQuestion.possAnswers.length; i++) {
    //create a button for the first question possAnswers
    var btnEl = document.createElement("button");
    //grab value of posanswers
    btnEl.textContent = currentQuestion.possAnswers[i];
    // btnEl.appendChild(questionTitle);
    questionTitle.textContent = quiz[0].question;
  }
}

getQuestion();

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timeAllowed--;
    timerE1.textContent = timeAllowed;
    if (timeAllowed >= 0) {
      // Tests if win condition is met
      if (isWin && timeAllowed > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
// questionTitle.textContent = quiz[1].question;
// questionsE1.appendChild(question1);
// function quizQ1() {}
// console.log(quiz.question);
// s;
