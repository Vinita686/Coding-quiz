//call the elements from DOM to interact with
var startBtn = document.getElementById('start');
var timeEl = document.getElementById('time');
var screenEl = document.getElementById('start-screen');
var questionsEl = document.getElementById('questions');
var questionTitle = document.getElementById('question-title');
var choiceOfAnswer = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');


let counter = questionsArray.length*15;
let questionIndex = 0;
let score = 0;
let btn = [];

//function to show a question
function displayQuestion() {
  choiceOfAnswer.innerHTML = '';
  feedbackEl.innerHTML = "";
 
  if(questionIndex < questionsArray.length) {
    //Get current question from the questions array
    var currentQuestion = questionsArray[questionIndex];
    questionTitle.textContent = currentQuestion.question;
    } else {
    questionTitle.textContent = '';
    endQuiz();
   }  

   //loop over choices for answer
    currentQuestion.choices.forEach(function(option, i) {
     //create button to each option
     btn[i]= document.createElement("button");
     btn[i].textContent = i + 1 + "." + option;
     btn[i].setAttribute('value', option);
     choiceOfAnswer.appendChild(btn[i]);

         //attach click event listner to each choice for answer
      btn[i].addEventListener('click', function(event) {

         //display the feedback
      feedbackEl.setAttribute('class', 'show');
      if(event.target.value !== currentQuestion.answer) {
        feedbackEl.textContent = "Wrong!";
        counter -= 10;
        }else {
            feedbackEl.textContent = "Right!";
            score++;
            }
            setTimeout(displayQuestion, 1000);
            questionIndex++;
        })
    });
}

//function to start the quiz
function startQuiz() {
 //hide start screen
 screenEl.setAttribute('class', 'hide');
 //show questions screen
 questionsEl.setAttribute('class', 'show');
 displayQuestion();
 timeEl.textContent = counter;
 //start timer
 var timeInterval = setInterval(function() {
     timeEl.textContent = counter;
     counter--;
      if (counter < 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
};

function endQuiz() {
  if (questionIndex === questionsArray.length || counter === 0) {
    counter = "";
    questionsEl.setAttribute('class', 'hide')
    feedbackEl.setAttribute('class', 'hide')
    endScreenEl.setAttribute('class', 'show');
    finalScore.textContent = score + "/" + questionsArray.length;
  }
}
        
startBtn.addEventListener('click', startQuiz);
