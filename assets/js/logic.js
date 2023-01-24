//call the elements from DOM to interact with
var startBtn = document.getElementById('start');
var timeEl = document.getElementById('time');
var screenEl = document.getElementById('start-screen');
var questionsEl = document.getElementById('questions');
var questionToAsk = document.getElementById('question-title');
var choiceOfAnswer = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');


var counter = questionsArray.length*15;
let questionIndex = 0;

//function to show questions
function displayQuestion() {
//Get current question from the questions array
    var currentQuestion = questionsArray[questionIndex];
//populate questionToAsk with question    
    questionToAsk.textContent = currentQuestion.Question;

//loop over choices for answer
currentQuestion.choices.forEach(function(choice, i) {
    var choiceList = document.createElement("button");
    choiceList.setAttribute('class', 'choice');
    choiceList.setAttribute('value', choice);
    choiceList.textContent = i + 1 + "." + choice;

    //attach click event listner to each choice for answer
    // choiceList.onclick = optionsClick;
    choiceOfAnswer.appendChild(choiceList);
    
});
}

//function to start the quiz 
function startQuiz() {
    //hide start screen
    screenEl.setAttribute('class', 'hide');

    //show questions screen
    questionsEl.setAttribute('class', 'show');
    displayQuestion();
}
    var timeInterval = setInterval(function() {
        timeEl.textContent = counter;


    }
    )


startBtn.onclick = startQuiz;

