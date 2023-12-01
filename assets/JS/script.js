var questionsE1 = document.getElementById("questions");
var answersE1 = document.getElementById("answers");
// var timerE1 = document.getElementById("time-allowed");
// var startBtn = document.querySelector(".start");
var timer;
var timeAllowed;
var score = 0;

// var quiz = document.createElement("<h2>");
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
    rightAns: "duck",
    possAnswers: ["duck", "heron"],
  },
];

function getQuestion() {
  var currentQuestion = quiz[currentIndex];
  choicesE1.textContent = "";
  questionTitle.textContent = "";
  //TODO: check if the last index matches the index of the array clear
  if (currentIndex < quiz.length) {
    for (var i = 0; i < currentQuestion.possAnswers.length; i++) {
      var btnEl = document.createElement("button");

      btnEl.textContent = currentQuestion.possAnswers[i];
      choicesE1.appendChild(btnEl);
      questionTitle.textContent = currentQuestion.question;
      btnEl.addEventListener("click", function () {
        //   console.log(this.textContent);
        if (this.textContent !== currentQuestion.rightAns) {
          //TODO: subtract 3 seconds from the timer
          //TODO: go to the next question
          currentIndex++;
          getQuestion();
        } else {
          //TODO: add 5 points to var in global
          //TODO: go to the next question
          currentIndex++;
          getQuestion();
        }
      });
    }
  } else {
    //TODO: SHOW END OF QUIZ DELIGATE TO ITS OWN FUNCTION
    // SHOW CURRENT SCORE END QUIZ FUNCTION TELLS HTML TO SHOW
    console.log("quiz.end");
  }
}
// console.log(this);
getQuestion();
// function startQuiz() {
//   isCorrect = false;
//   timeAllowed = 80;
//   startBtn.disabled = true;
//   getQuestion();
//   startTimer();
// }

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
