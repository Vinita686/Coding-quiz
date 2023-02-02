
//call the elements from DOM to interact with
var startBtn = document.getElementById('start');
var timeEl = document.getElementById('time');
var screenEl = document.getElementById('start-screen');
var questionsEl = document.getElementById('questions');
var questionTitle = document.getElementById('question-title');
var choiceOfAnswer = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initialsEl = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');

let counter = questionsArray.length*15;
let questionIndex = 0;
let score = 0;
let btn = [];
const correct = new Audio("./assets/sfx/correct.wav");
const incorrect =new Audio("./assets/sfx/incorrect.wav");

//function to show a question
function displayQuestion() {
	choiceOfAnswer.innerHTML = '';
	feedbackEl.innerHTML = "";
 
	if(questionIndex < questionsArray.length) {
		//Get current question from the questions array
		var currentQuestion = questionsArray[questionIndex];
		questionTitle.textContent = currentQuestion.question;

		currentQuestion.choices.forEach(function(element, i) {
			btn[i]= document.createElement("button");
			btn[i].textContent = i + 1 + "." + element;
			btn[i].setAttribute('value', element);
			choiceOfAnswer.appendChild(btn[i]);

			//attach click event listner to each choice for answer
			btn[i].addEventListener('click', function(event) {
		 //display the feedback
			feedbackEl.setAttribute('class', 'feedback show');
			if(event.target.value !== currentQuestion.answer) {
				feedbackEl.textContent = " :-( Wrong!";
				counter -= 10;
				incorrect.play();
				}else {
					feedbackEl.textContent = "AWESOME!! Your answer is Right";
					score++;
					correct.play();
					}
					setTimeout(displayQuestion, 1000);
					questionIndex++;
				});
		});

	} else {
		questionTitle.textContent = '';
		endQuiz()
	}  

}

//function to start the quiz
 function startQuiz() {
 //hide start screen
 screenEl.setAttribute('class', 'hide');
 //show questions screen
 questionsEl.setAttribute('class', 'show');
 displayQuestion();

 //start timer
 var timeInterval = setInterval(function() {
		timeEl.textContent = counter;
		counter--;
		if (counter <= 0) {
				clearInterval(timeInterval);
				}
		}, 1000)
};

//function to end the quiz
function endQuiz() {
	
	if (questionIndex === questionsArray.length || counter === 0) {
		counter = "";
		questionsEl.setAttribute('class', 'hide')
		feedbackEl.setAttribute('class', 'hide')
		endScreenEl.setAttribute('class', 'show');
		finalScore.textContent = score + "/" + questionsArray.length;
	}
}
//function to validate input of initials to only alphabets
//resource found on W3 Shools
function lettersOnlyCheck(input) {
	 var regEx = /^[A-Za-z]+$/;
	 if(input.value.match(regEx))
		 {
			return true;
		 }
	 else
		 {
		 alert("Please enter letters only.");
		 
		 return false;	 
		 }
};   
//capture final score and initials and store them to local storage
submitBtn.addEventListener('click', function(event){
	event.preventDefault();

	//take input from initial element
	var initials = initialsEl.value.trim();
	//check if input in initaials is not empty and only accept alphbets
	if (initials !== "" && lettersOnlyCheck(initialsEl)){
		let saveScores = JSON.parse(localStorage.getItem("scoreDetail"));
		console.log(saveScores);
		if (saveScores === null) {
				saveScores = [];
		} 
		
		var userInputs = {
			Initials: initials,
			Score: score
		};

		saveScores.push(userInputs);
		// console.log(highScoreArray);
		localStorage.setItem("scoreDetail", JSON.stringify(saveScores));
	
		endScreenEl.setAttribute('class', 'hide');
		feedbackEl.setAttribute('class', 'feedback show');
		feedbackEl.textContent = "Thanks!! Click 'View Highscores' on top left to see the highscore";
	} 
	
	});

startBtn.addEventListener('click', startQuiz);