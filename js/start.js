// some variables and consts
const canvasWidth = 800;
const canvasHeight = 600;
const minGap = 50;
const maxGap = 130;
const minHeight = 40;
const maxHeight = 300;
const LowerPipe = "../Images/LowerPipe.png";
const UpperPipe = "../Images/UpperPipe.png";
let birdImage = "../Images/redbird-midflap.png";
let Obstacle = [];
let score = 0;

function startGame() {
  myGameArea.start();
}
