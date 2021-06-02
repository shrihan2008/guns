var thickness
var wall
var speed
var weight
var bullet
function setup()
{
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  bullet.shapeColor="white"

  wall=createSprite(1200,200,thickness,height/2)
  
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
}

function draw() {
  background("blue");  
  if(bullet.x-wall.x<bullet.width/2+wall.width/2&&wall.x-bullet.x<bullet.width/2+wall.width/2&&damage<4)
  {
    bullet.shapeColor="green"

  }

  if(bullet.x-wall.x<bullet.width/2+wall.width/2&&wall.x-bullet.x<bullet.width/2+wall.width/2&&damage>5)
  {
    bullet.shapeColor="red"

  }

  
  
  drawSprites();
}