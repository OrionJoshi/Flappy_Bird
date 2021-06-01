// some variables and consts
const canvasWidth = 800;
const canvasHeight = 600;
const minGap = 50;
const maxGap = 130;
const minHeight = 40;
const maxHeight = 300;
// images
const LowerPipe = "../Images/LowerPipe.png";
const UpperPipe = "../Images/UpperPipe.png";
const zero = "../Images/0.png";
const one = "../Images/1.png";
const two = "../Images/2.png";
const three = "../Images/3.png";
const four = "../Images/4.png";
const five = "../Images/5.png";
const six = "../Images/6.png";
const seven = "../Images/7.png";
const eight = "../Images/8.png";
const nine = "../Images/9.png";
const gameOverImg = "../Images/gameover.png";

const number = [zero, one, two, three, four, five, six, seven, eight, nine];
const gameMenu = document.getElementById("menu");
const countDown = document.getElementById("count-down");
let birdImage = "../Images/redbird-midflap.png";
let Obstacle = [];
let score = 0;

// start game
function startGame() {
  myGameArea.start();
}

// timer function
function timer() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      countDown.style.backgroundImage = "url('" + number[i] + "')";
      if (i == 10) {
        cleanUp();
      }
    }, 1000 * i);
  }
}

// function to clean up the start menu

function cleanUp() {
  document.getElementById("main-container-wrapper").style.display = "none";
  document.getElementById("count-down-wrapper").style.display = "none";
  document.getElementById("score").style.display = "block";
  startGame();
}

// function to display game over window
function displayGameover() {
  const canvas = document.getElementById("canvas");
  const score = document.getElementById("score");
  canvas.style.display = "none";
  score.style.top = "70%";
  score.style.color = "white";

  document.getElementById("main-container-wrapper").style.display = "";
  gameMenu.style.backgroundImage = "url('" + gameOverImg + "')";
  countDown.style.zIndex = "-10";
  gameMenu.style.opacity = "1";
}

// event listener for starting the timer
gameMenu.addEventListener("click", (e) => {
  countDown.style.zIndex = "10";
  gameMenu.style.opacity = "0.5";
  timer();
});
