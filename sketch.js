var backgroundImage;
var player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,
player15,player16,player17,player18,player19,player20,player21,player22;
function preload(){
  backgroundImage=loadImage("football_pitch.webp");
}

function setup() {
  createCanvas(1200,600);
  player1=createSprite(75,300,10,10);
  player1.shapeColor="yellow";
  player2=createSprite(300,250,10,10);
  player2.shapeColor="yellow";
  player3=createSprite(300,375,10,10);
  player3.shapeColor="yellow";
  player4=createSprite(300,500,10,10);
  player4.shapeColor="yellow";
  player5=createSprite(300,125,10,10);
  player5.shapeColor="yellow";
  player6=createSprite(400,75,10,10);
  player6.shapeColor="yellow";
  player7=createSprite(400,200,10,10);
  player7.shapeColor="yellow";
  player8=createSprite(400,325,10,10);
  player8.shapeColor="yellow";
  player9=createSprite(400,450,10,10);
  player9.shapeColor="yellow";
  player10=createSprite(400,565,10,10);
  player10.shapeColor="yellow";
  player11=createSprite(550,300,10,10);
  player11.shapeColor="yellow";
  
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}