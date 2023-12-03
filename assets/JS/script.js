var questionsE1 = document.getElementById("questions");
var quizEndE1 = document.getElementById("quiz-end");
var timerE1 = document.getElementById("time-allowed");
var scoreE1 = document.getElementById("score");
var startBtn = document.querySelector(".start");
// var startBtn = document.querySelector(".start");
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
          //TODO: subtract 3 seconds from the timer
          //timeCounter -3\
          timeAllowed -= 5;

          currentIndex++;
          getQuestion();
        } else {
          //TODO: add 5 points to var in global
          score = score += 5;
          scoreE2.push(score);

          currentIndex++;
          getQuestion();
        }
      });
    }
  } else {
    //TODO: SHOW END OF QUIZ DELIGATE TO ITS OWN FUNCTION
    quizEnd();
    // SHOW CURRENT SCORE END QUIZ FUNCTION TELLS HTML TO SHOW
  }
}

function quizEnd() {
  var quizEndE2 = document.createElement("h1");

  quizEndE2.textContent = "End Of Quiz!";
  quizEndE1.appendChild(quizEndE2);
  scoreE1.textContent = "Your Score " + scoreE2[scoreE2.length - 1];

  // [{ javier: 1 }]; local storage stringify with JSONor{ "javier": 1 }
}
// console.log(this);
// getQuestion();

function startQuiz() {
  // isCorrect = false;
  timeAllowed = 30;
  if (startBtn === false) {
  }

  getQuestion();
  startTimer();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timeAllowed--;
    timerE1.textContent = "Time left " + timeAllowed;
    // if (timeAllowed >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timeAllowed > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //     winGame();
    //   }
    // }
    // Tests if time has run out
    if (timeAllowed === 0) {
      // Clears interval
      clearInterval(timer);
      quizEnd();
    }
  }, 1000);
}
startBtn.addEventListener("click", startQuiz);
// questionTitle.textContent = quiz[1].question;
// questionsE1.appendChild(question1);
// function quizQ1() {}
// console.log(quiz.question);
// s
