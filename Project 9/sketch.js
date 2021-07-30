
function setup() {
  createCanvas(400,400);
}

function draw() {
  background("grey");
  if (keyIsDown(DOWN_ARROW)){
    background("blue");
  }
  if (keyIsDown(UP_ARROW)){
    background("red");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("green");
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("yellow");
  }
}




