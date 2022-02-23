var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,orangeImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png");
  orangeImg = loadImage ("orangeLeaf.png");
  leafImg = loadImage ("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
  }
  else if(select_sprites==2){
    createOranges();
  }
  else{
    createLeaves();
  }
}

  drawSprites();
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage (leafImg);
  leaf.scale = 0.1
  leaf.velocityY = (4);
  leaf.lifetime=150;

}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage (appleImg);
  apple.scale = 0.1
  apple.velocityY = (4);
  apple.lifetime=150;
   }

   function createOranges(){
    orange = createSprite(random(50,350),40,10,10);
    orange.addImage (orangeImg);
    orange.scale = 0.08
    orange.velocityY = (3);
    orange.lifetime=150;
     }