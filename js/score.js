// function to style score

function Score() {
  let score = document.getElementById("score");
  score.style.position = "absolute";
  score.style.top = "10%";
  score.style.left = "45%";
  score.style.transform = "translate(-20px, -50%)";
  score.style.fontSize = "30px";
  score.style.fontWeight = "bold";
}
// function for updating the score

function updateScore() {
  score += 1;
  myGameArea.score.innerHTML = "Score: " + score;
}

Score();
