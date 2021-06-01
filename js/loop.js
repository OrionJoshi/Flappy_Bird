// looping for creating and clearing
function gameLoop() {
  clearComponent();
  createComponenet();
  updatePos();
  stopMove();
}

timeResult = setInterval(function () {
  for (let i = 0; i < Obstacle.length; i++) {
    if (myGameComponent.crashWith(Obstacle[i])) {
      displayGameover();
      clearInterval(timeResult);
    }
  }
  gameLoop();
  updateScore();
}, 20);

// Event listner for movement of bird

window.addEventListener("keydown", (e) => {
  // console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      birdImage = "../Images/redbird-upflap.png";
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;

    default:
      break;
  }
});
