var player, playerImg
var path, pathImg
var boundary_left, boundary_right

function preload(){
  //pre-load images
playerImg = loadAnimation("Runner-1.png","Runner-2.png");

pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  player = createSprite(180,340,100,50);
  player.addAnimation("Jakerunning", playerImg);
  player.scale = 0.1;

  boundary_left = createSprite(0,0,100,800);
  boundary_left.visible = false;

  boundary_right = createSprite(410,0,100,800);
  boundary_right.visible = false;
}

function draw() {
  background(0);
path.velocityY = 3;

player.x = World.mouseX;

edges = createEdgeSprites();

player.collide(edges[3]);
player.collide(boundary_left);
player.collide(boundary_right);

  if(path.y > 400){
    path.y = height/2;
  }


drawSprites();
}
