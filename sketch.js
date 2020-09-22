var fixedRect, movingRect, block1, block2;

function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,80,50);
  movingRect.shapeColor="green";
  block1=createSprite(200,15,50,60);
  block1.velocityY=5;
  block2=createSprite(200,375,50,60);
  block2.velocityY=-5;

}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

 bounceOff(block1, block2);  

  drawSprites();
}

