//call the elements to interact with
var highScoreEl = document.getElementById("highscores");
var clearBtnEl = document.getElementById("clear");

//function to show saved highscores list
// function showHighscore(){
//get previously saved score from the local stoarge.
let preSavedScore = JSON.parse(localStorage.getItem("scoreDetail"));
console.log(preSavedScore);
//create list of saved highscores
preSavedScore.forEach(function(ev) {
    let listEl = document.createElement('li');
    listEl.textContent = ev.Initials + "  = " + ev.Score;
    highScoreEl.appendChild(listEl);
}); 
//function to clear all saved scores
function clearAll() {
    highScoreEl.innerHTML = '';
    localStorage.removeItem('scoreDetail');
}
clearBtnEl.onclick = clearAll;