var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(700, 200, 50, 50);
  movingRect.shapeColor = "red";

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  {movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}
else{movingRect.shapeColor="red";
fixedRect.shapeColor="blue";

}
  drawSprites();
}
