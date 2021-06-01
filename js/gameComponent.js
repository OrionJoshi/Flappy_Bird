// creating canvas and clearing it
let myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.canvas.setAttribute("id", "canvas");
    this.frameNo = 199;
    this.score = document.getElementById("score");
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

// create a component

function gameComponent(x, y, width, height, color, imageFlag, src) {
  this.imageFlag = imageFlag;
  // check if it is image or not
  if (imageFlag) {
    this.image = new Image();
    this.image.src = src;
  }
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.speedX = 0;
  this.speedY = 0;
  // drawing component
  this.drawComponent = function () {
    var context = myGameArea.canvas.getContext("2d");

    // if image then draw the images
    if (this.imageFlag) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  // changing position
  this.changePos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };

  // check if bird hits the pipe
  this.crashWith = function (wallObj) {
    let myleft = this.x;
    let myright = this.x + this.width;
    let mytop = this.y;
    let mybottom = this.y + this.height;
    let wallLeft = wallObj.x;
    let wallRight = wallObj.x + wallObj.width;
    let wallTop = wallObj.y;
    let wallBottom = wallObj.y + wallObj.height;
    let crash = true;
    if (
      mybottom < wallTop ||
      mytop > wallBottom ||
      myright < wallLeft ||
      myleft > wallRight
    ) {
      crash = false;
    }
    return crash;
  };

  // for incrementing the position of obstacle

  this.changePosOfPipe = function (speed) {
    this.x += speed;
  };
}

// create Pipe obstacle

function CreateObstacle() {
  myGameArea.frameNo += 1;
  if (everyinterval(200)) {
    // for height of obstacle

    let height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );

    // generating random gap

    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    // getting canvas
    let canvasWidth = myGameArea.canvas.width;

    Obstacle.push(
      new gameComponent(canvasWidth, 0, 30, height, "green", true, UpperPipe)
    ); // upper pipe
    Obstacle.push(
      new gameComponent(
        canvasWidth,
        height + gap,
        30,
        canvasWidth - height - gap,
        "green",
        true,
        LowerPipe
      )
    ); // lower pipe
  }
}

// check if the pipe is allowed to create on frame or not
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  } else {
    false;
  }
}

// function to create a componenet
function createComponenet() {
  myGameComponent.drawComponent();
  CreateObstacle();
  // draw the abstacle
  for (let i = 0; i < Obstacle.length; i++) {
    Obstacle[i].drawComponent();
  }
}

// function to clear the componenet
function clearComponent() {
  myGameArea.clear();
}

// creating a bird

let myGameComponent = new gameComponent(
  30,
  60,
  30,
  30,
  "blue",
  true,
  birdImage
);
