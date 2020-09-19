var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(30, 200, 50, 50);
  car.shapeColor = color("black");
  car.velocityX = speed;
  car.weight = weight;
  speed = random(55, 90)
  weight = random(400, 1500)
  wall = createSprite(1600, 200, 50, 200);
  fill(80, 80, 80);
}

function draw() {
  background("white");
  if(wall.x * car.x < (wall.width + car.width)/2){
    car.velocityX = 0;

    if((0.5*car.speed*car.speed*car.weight/22500) > 180) {
      car.shapeColor = color(255, 0, 0);
   }
   
   if((0.5*car.speed*car.speed*car.weight/22500) < 180 && (0.5*car.speed*car.speed*car.weight/22500) > 100) {
      car.shapeColor = color(230, 230, 0);
   }
 
   if((0.5*car.speed*car.speed*car.weight/22500) < 100) {
      car.shapeColor = color(0, 255, 0);
   }
  }
  drawSprites();
}