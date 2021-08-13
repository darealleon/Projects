var ship, ship_moving;
var seaImg, sea;
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  ship = createSprite(150,200,100,75);
  ship.addAnimation("movingShip", ship_moving);

  ship.scale = 0.3;

  sea = createSprite(400,200);
  sea = addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.4;
}

function draw() {
background(0);
  sea.velocityX = -4;
  if (sea.x < 0){
    sea.x = sea.width/8;
  }
 drawSprites();
}