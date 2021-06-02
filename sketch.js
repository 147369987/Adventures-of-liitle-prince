var form;
var database;
var wood , woodImg;
var ground , groundImg;
var tele , teleImg;
var boy, boyImg;

function preload(){
  bgImg = loadImage("bg.jpg");
  woodImg = loadImage("wood.jpg");
  groundImg = loadImage("ground 1.png");
  teleImg = loadImage("tele.png");
  boyImg = loadImage("prince1.png")
  boyImg2 = loadImage("prince2.png");
  boyCollide = loadImage("collided.png")
  tele3Img = loadImage("tele3.png");
  gameoverImg = loadImage("gameover.jpg")
}

function setup() {
  createCanvas(750,750);
  

  wood= createSprite(400,500,20,50);
  wood.addImage(woodImg);
  wood.scale = 1;

  
  wood2= createSprite(400,250,20,50);
  wood2.addImage(woodImg);
  wood2.scale = 1;

  ground= createSprite(400,730,20,10);
  ground.addImage(groundImg);
  ground.scale = 1;
  
  tele= createSprite(700,650,20,50);
  tele.addImage(teleImg);
  tele.scale = 0.3;

  tele2= createSprite(60,420,20,50);
  tele2.addImage(teleImg);
  tele2.scale = 0.3;

  tele3= createSprite(700,420,20,50);
  tele3.addImage(tele3Img);
  tele3.scale = 0.3;

  
  tele4= createSprite(60,170,20,50);
  tele4.addImage(tele3Img);
  tele4.scale = 0.3;

  boy = createSprite(50,660,500,500);
  boy.addImage("boy",boyImg);
  boy.addImage("boy2",boyImg2);
  boy.addImage("boy3",boyCollide);
  boy.scale=0.3;
 
 
  laser = createSprite(300,660,250,5);
  laser.shapeColor="red";
  laser.velocityY = 5;

  invisibleGround = createSprite(300,720,400,20);
  invisibleGround.visible = false;
 
  gameover = createSprite(370,250,20,20);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.5;
  gameover.visible = false;
  
}

function draw() {
  background(bgImg);
  
  edges= createEdgeSprites();

 boy.bounceOff(edges);
 laser.bounceOff(invisibleGround);
 laser.bounceOff(wood);

 if (keyDown(RIGHT_ARROW)) {
  boy.x = boy.x + 10;
  boy.changeAnimation("boy",boyImg);
  
}
if(keyDown(LEFT_ARROW)){
  boy.x = boy.x - 10;
  boy.changeAnimation("boy2",boyImg2)
 
}

if(boy.isTouching(tele)){
  boy.x = 80;
 boy.y = 430;
 
}

if(boy.isTouching(tele3)){
  boy.x = 60;
 boy.y = 180;
 
}

if(boy.isTouching(laser)){
 end();
 //gameover.visible = true;
 }

drawSprites();


  
}


 
function end(){
 
  
 
background("black")
gameover.visible = true;
  laser.velocityY = 0;
  wood.hide();
  wood2.hide();
  tele.hide();
  tele2.hide();
  tele3.hide();
  tele4.hide();
  boy.hide();


  
}