var questionsE1 = document.getElementById("questions");
var quizEndE1 = document.getElementById("quiz-end");
var timerE1 = document.getElementById("time-allowed");
var scoreE1 = document.getElementById("score");
var startBtn = document.querySelector(".start");
var highScoreBtn = document.getElementById("highscore");
// var initials = document.getElementById("initials");
// var saveBtn = document.getElementById("save");

var timer;
var timeAllowed;
var score = 0;
let scoreE2 = [];

var questionTitle = document.getElementById("question-title");
var choicesE1 = document.getElementById("choices");
var currentIndex = 0;
var quiz = [
  {
    question: "What is the fastet bird on the planet?",
    rightAns: "Peregrine Falcon",
    possAnswers: ["Bald Eagle", "Peregrine Falcon", "Sparrow", "Robin"],
  },
  {
    question: "What is the most common waterfowl in Colorado?",
    rightAns: "Mallard",
    possAnswers: ["Mallard", "Heron", "Cormorant", "Norther Shoveler"],
  },
  {
    question: "What is the largest flighted bird on the planet?",
    rightAns: "Wandering Albatross",
    possAnswers: ["Golden Eagle", "Ostrich", "Emu", "Wandering Albatross"],
  },
  {
    question: "What is Colorado's State bird?",
    rightAns: "Lark Bunting",
    possAnswers: [
      "Lark Bunting",
      "Rock Pigeon",
      "Red-Throated Hummingbird",
      "House Sparrow",
    ],
  },
  {
    question: "What is the United State's national bird?",
    rightAns: "Bald Eagle",
    possAnswers: ["American Robin", "Raven", "Bald Eagle", "Crow"],
  },
];

function getQuestion() {
  var currentQuestion = quiz[currentIndex];
  choicesE1.textContent = "";
  questionTitle.textContent = "";

  if (currentIndex < quiz.length) {
    for (var i = 0; i < currentQuestion.possAnswers.length; i++) {
      var btnEl = document.createElement("button");

      btnEl.textContent = currentQuestion.possAnswers[i];
      choicesE1.appendChild(btnEl);
      questionTitle.textContent = currentQuestion.question;
      btnEl.addEventListener("click", function () {
        if (this.textContent !== currentQuestion.rightAns) {
          timeAllowed -= 5;
          timerE1.textContent = timeAllowed;

          currentIndex++;
          getQuestion();
        } else {
          score = score += 5;
          scoreE2.push(score);

          currentIndex++;
          getQuestion();
        }
      });
    }
  } else {
    quizEnd();
    clearInterval(timer);
  }
}

function quizEnd() {
  var quizEndE2 = document.createElement("h1");

  quizEndE2.textContent = "End Of Quiz!";
  quizEndE1.appendChild(quizEndE2);
  scoreE1.textContent = "Your Score " + scoreE2[scoreE2.length - 1];
  if (timeAllowed === 0) {
    scoreE1.textContent = "Your Score 0";
  }
  // var saveBtn = document.createElement("button");
  let userInput = prompt("Please enter your initials for the Scoreboard!");

  var scoreBoard = {
    userInput: userInput.trim(),
    total: scoreE2[scoreE2.length - 1],
  };

  localStorage.setItem("score", JSON.stringify(scoreBoard));

  // clearInterval(timer);
}

function highScores() {
  var highScore = JSON.parse(localStorage.getItem("scoreBoard"));
  var board = document.createElement("ul");
  highScore.textContent = scoreBoard.userInput;
  highScoreBtn.appendChild(board);
}
s;
function startQuiz() {
  timeAllowed = 30;
  if (startBtn === false) {
  }
  getQuestion();
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    timeAllowed--;
    timerE1.textContent = "Time left " + timeAllowed;

    if (timeAllowed === 0) {
      clearInterval(timer);
      quizEnd();
    }
  }, 1000);
}
startBtn.addEventListener("click", startQuiz);
