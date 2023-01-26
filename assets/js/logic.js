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
 // console.log(questionIndex);
  choiceOfAnswer.innerHTML = '';
  feedbackEl.innerHTML = "";
 // feedbackEl.classList.remove('show');
 //Get current question from the questions array
  var currentQuestion = questionsArray[questionIndex];

 //populate questionTitle with question    
  questionTitle.textContent = currentQuestion.question;
 // console.log(questionTitle)

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
        if(event.target.value === currentQuestion.answer) {
            feedbackEl.textContent = "Correct!";
         }else {
            feedbackEl.textContent = "Wrong!";
    
           }
           if(questionIndex !== questionsArray.length) {
            setTimeout(displayQuestion, 1000);
            questionIndex++;
            }
    //call dispaly last page
        
        // feedbackEl.setAttribute('class', 'hide');
       
    }
    
)

  });
}
//function to validate the question
function checkQuestion() {
    
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
        if (timeEl < 0) {
            clearInterval(timeInterval);
        }
       
}, 1000)

};
        
startBtn.addEventListener('click', startQuiz);