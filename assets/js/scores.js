//call the elements to interact with
var highScoreEl = document.getElementById("highscores");
var clearBtnEl = document.getElementById("clear");

//get previously saved score from the local stoarge.
let preSavedScore = JSON.parse(localStorage.getItem("score"))
console.log(preSavedScore);

//create list of saved highscores
preSavedScore.array.forEach((element) => {
  let liTags = document.createElement("li");
  liTags.textContent =
  
});