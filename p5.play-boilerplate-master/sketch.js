//variables
var car1,car2,car3,car4,car5,car6,car7,wall;
var speed1,speed2,speed3,speed4,speed5,speed6,speed7,weight;
var dv1,dv2,dv3,dv4,dv5,dv6;
function setup() {
  //creating canvas
  createCanvas(1300,600);
  //setting speed and weight
  speed1=random(100,110)
  speed2=random(40,50)
  speed3=random(80,90)
  speed4=random(20,30)
  speed5=random(5,15)
  speed6=random(10,20)
  speed7=random(70,80)
  weight=random(80,90)
  //creating dividers
  dv1=createSprite(10,60,2600,5);
  dv1.shapeColor=color("yellow");
  dv2=createSprite(10,140,2600,5);
  dv2.shapeColor=color("white");
  dv3=createSprite(10,240,2600,5);
  dv3.shapeColor=color("blue");
  dv4=createSprite(10,340,2600,5);
  dv4.shapeColor=color("pink");
  dv5=createSprite(10,440,2600,5);
  dv5.shapeColor=color("green");
  dv6=createSprite(10,530,2600,5);
  dv6.shapeColor=color("violet");

  //creating sprites
  car1= createSprite(50,200,50,50);
  car2= createSprite(50,300,50,50);
  car3= createSprite(50,400,50,50);
  car4= createSprite(50,490,50,50);
  car5= createSprite(50,30,50,50);
  car6= createSprite(50,100,50,50);
  car7= createSprite(50,560,50,50);

  wall=createSprite(1300,200,60,800);
  wall.shapeColor=color("green");
  //setting velocity
  car1.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;
  car5.velocityX=speed5;
  car6.velocityX=speed6;
  car7.velocityX=speed7;
}

function draw() {
  //background colour
  background("black"); 
  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed1*speed1/22500;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car2.x < (car2.width+wall.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5*weight*speed2*speed2/22500;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car3.x < (car3.width+wall.width)/2)
  {
    car3.velocityX=0;
    var deformation=0.5*weight*speed3*speed3/22500;
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car3.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car4.x < (car4.width+wall.width)/2)
  {
    car4.velocityX=0;
    var deformation=0.5*weight*speed4*speed4/22500;
    if(deformation>180)
    {
      car4.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car4.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car5.x < (car5.width+wall.width)/2)
  {
    car5.velocityX=0;
    var deformation=0.5*weight*speed5*speed5/22500;
    if(deformation>180)
    {
      car5.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car5.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car5.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car6.x < (car6.width+wall.width)/2)
  {
    car6.velocityX=0;
    var deformation=0.5*weight*speed6*speed6/22500;
    if(deformation>180)
    {
      car6.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car6.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car6.shapeColor=color(0,255,0);
    }
  }
  if(wall.x-car7.x < (car7.width+wall.width)/2)
  {
    car7.velocityX=0;
    var deformation=0.5*weight*speed7*speed7/22500;
    if(deformation>180)
    {
      car7.shapeColor=color(255,0,0);
    }
    if(deformation>100&&deformation<180)
    {
      car7.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car7.shapeColor=color(0,255,0);
    }
  }


  drawSprites();

}