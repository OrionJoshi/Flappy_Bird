// Updating the position of the component

function updatePos() {
  myGameComponent.changePos();
  for (let i = 0; i < Obstacle.length; i++) {
    Obstacle[i].changePosOfPipe(-1); // changing the position of wall by 1 unit
  }
}

// moving up direction
function moveUp() {
  myGameComponent.speedY += -2;
}

// moving down direction

function moveDown() {
  myGameComponent.speedY += 2;
}

// Moving left direction

function moveLeft() {
  myGameComponent.speedX += -2;
}

// Moving right direction

function moveRight() {
  myGameComponent.speedX += 2;
}

// function to stop the movement

function stopMove() {
  myGameComponent.speedX = 0;
  myGameComponent.speedY = 0;
}
