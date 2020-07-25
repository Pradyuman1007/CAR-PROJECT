var car, wall;

var speed, weight;





function setup() {
  createCanvas(1600,400);

  speed=random(55,100);
  weight=random(1000,2000);
  

   car=createSprite(50, 200, 50, 50);

   wall=createSprite(1500,200,60,height/2)


car.velocityX=speed;

}

function draw() {
  background(255,255,255);  

if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var Deformation = 0.5 * weight * speed* speed/22509;
if(Deformation>180){

  car.shapeColor=color(255,0,0);

}

if(Deformation>180 && Deformation>100){
  car.shapeColor=color(230,230,0);

}
if(Deformation<100){
car.shapeColor=color(0,255,0);
}





}

  drawSprites();
}