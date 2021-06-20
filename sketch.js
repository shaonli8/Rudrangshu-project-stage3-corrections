const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balloon,balloonImage1,balloonImage2;
var bird1 , bird1Image ;


function preload(){
  bgImg =loadImage("skyee.png");
  balloonImage1=loadImage("Balloon.png");

  platformImage = loadImage("base.png");
  sling1 = loadImage("sling1.png");
  sling2 = loadImage("sling2.png");
  sling3 = loadImage("sling3.png");
  bird1Image = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
  stoneImg = loadImage("stone.png")   
}
  

//Function to set initial environment
function setup() {
 
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;


  bg = createSprite(850,150);  
  bg.addImage(bgImg);
  bg.scale = 4;
  bg.velocityX = -2;

  balloon=createSprite(150,250,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.4;

  stone = new Stone(balloon.x+60,balloon.y+50,10);

  sling= new Sling(stone.body,{x:balloon.x+65,y:balloon.y+40})
  bgroup = new Group();

  Engine.run(engine);
}

// function to display UI
function draw() {
  background("#C3E6F5");

  if(bg.x<-1250){
    bg.x = -420
  }

  sling.pointB.x=balloon.x+65;
  sling.pointB.y=balloon.y+40
   
  if(keyDown("w")){
    balloon.y -= 10 ;
  }
  if(keyDown("s")){
    balloon.y += 10;
  }
  spawnObstacles();

  drawSprites();
  image(platformImage,balloon.x+22,balloon.y+90,80,8);
  image(sling1,balloon.x+60,balloon.y+40,20,50); 
  stone.display()
  image(sling2,balloon.x+50,balloon.y+40,20,30);
  sling.display();
}

  function spawnObstacles(){
    if(frameCount%150===0){
      bird1 = createSprite(850,Math.round(random(100,400)),50,50);
      bird1.addAnimation("bird",bird1Image);
      bird1.velocityX = -5 ;
      bird1.lifetime =  190;
      bird1.depth=balloon.depth-1;
      bgroup.add(bird1);
    }


  }

  