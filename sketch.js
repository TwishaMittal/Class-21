var fixedRect, movingRect;
var o1,o2, v1, v2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 
  o1 = createSprite(100, 100, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o1.velocityX=2
 
  o2 = createSprite(1100, 100, 50, 80);
  o2.shapeColor = "blue";
  o2.debug = true;
  o2.velocityX=-2

  v1 = createSprite(500, 100, 50, 80);
  v1.shapeColor = "pink";
  v1.debug = true;
  v1.velocityY=2
 
  v2 = createSprite(500, 700, 50, 80);
  v2.shapeColor = "blue";
  v2.debug = true;
  v2.velocityY=-2

}

function draw() {
  background(0,0,0);  
  bounceOff(o1,o2);
  bounceOff(v1,v2);
  drawSprites();
}

