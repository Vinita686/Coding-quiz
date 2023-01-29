//call the elements to interact with
var highScoreEl = document.getElementById("highscores");
var clearBtnEl = document.getElementById("clear");

//function to show saved highscores list
// function showHighscore(){
//get previously saved score from the local stoarge.
let preSavedScore = localStorage.getItem(JSON.parse("scoreDetail"));
console.log(preSavedScore);
//create list of saved highscores
preSavedScore.forEach(function(score) {
    let listEl = document.createElement('li');
    listEl.textContent = preSavedScore;
    highScoreEl.appendChild(listEl);
}); 
// }
// showHighscore(s);