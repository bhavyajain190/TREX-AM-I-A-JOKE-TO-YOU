var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup,cloudImage;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,
    obstacle6;
var score=0;
function preload(){
  trex_running = loadAnimation("Images/trex1.png","Images/trex3.png","Images/trex4.png");
  trex_collided = loadImage("Images/trex_collided.png");
  
  groundImage = loadImage("Images/ground.jpg")
  cloudImage=loadImage("Images/cloud.jpg");
  obstacle1 = loadImage("Images/opstacle.png");
  obstacle2 = loadImage("opstacle.png");
 
  obstacle3 = loadImage("Images/opstacle.png");
  obstacle4 = loadImage("Images/opstacle.png");
  obstacle5 = loadImage("Images/opstacle.png");
  obstacle6 = loadImage("Images/opstacle.png");
}
  


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
 // cloudImage = loadImage("cloud.png");
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background("black");
  score=score+Math.round(getFrameRate()/60);
   text("score"+score,500,50);                                   
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  cloudsGroup=new Group();
  obstaclesGroup=new Group();
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds 
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    //assign lifetime to the variable
    cloud.lifetime = 200;
    //adjust the depth 
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}
function spawnObstacles() {
  if(frameCount % 60 === 0) { 
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    //generate random obstacles 
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
        case 2: obstacle.addImage(obstacle2);
        break;
        case 3: obstacle.addImage(obstacle3);
        break;
        case 4: obstacle.addImage(obstacle4);
        break;
        case 5: obstacle.addImage(obstacle5);
        break;
        case 6: obstacle.addImage(obstacle6);
        break;
        default:
        break;
    } 
    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

    
    