var seaImg;
var shipImg1;
var sea;
var ship;

function preload(){

  seaImg = loadImage("assets/sea.png");
shipImg1 = loadAnimation("assets/ship-1.png", "assets/ship-2.png","assets/ship-3.png", "assets/ship-4.png");



}

function setup(){
  createCanvas(400,400);

sea = createSprite(50,50,400,400);
sea.scale = 0.5
ship = createSprite(200,150,50,50);
ship.scale = 0.25
sea.addImage(seaImg);
ship.addAnimation("ship" , shipImg1);

  
  
}

function draw() {
  background("blue");
  sea.velocityX = -2
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 drawSprites()
}