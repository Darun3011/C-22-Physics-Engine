const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;

function setup() {
  createCanvas(600,600);
   
  engine = Engine.create();
  world = engine.world;

  var groundOptions = { 

   isStatic:true 
  
  }
  ground = Bodies.rectangle(300,500,600,20,groundOptions);

  World.add(world,ground);

  var balloptions = {

    restitution:1

  }

  ball = Bodies.circle(200,100,20,balloptions);

  World.add(world,ball);
}

function draw() {
  background(200,255,255);  

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);

  circle(ball.position.x,ball.position.y,20);

  

}