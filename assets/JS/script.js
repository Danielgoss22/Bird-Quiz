var questionsE1 = document.getElementById("questions");
var answersE1 = document.getElementById("answers");
var timer = 80;
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
function getQuestion() {
  var currentQuestion = quiz[currentIndex];
  //   console.log(currentQuestion);

  for (var i = 0; i < currentQuestion.possAnswers.length; i++) {
    //create a button for the first question possAnswers
    var btnEl = document.createElement("button");
    //grab value of posanswers
    btnEl.textContent = currentQuestion.possAnswers[i];
    btnEl.append;
  }
}
getQuestion();
// questionTitle.textContent = quiz[0].question;
// questionTitle.textContent = quiz[1].question;
// questionsE1.appendChild(question1);
// function quizQ1() {}
// console.log(quiz.question);
// s;
