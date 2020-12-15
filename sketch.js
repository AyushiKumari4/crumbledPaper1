
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball;
var wall1,wall2,wall3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

  ballOption={
	  restitution:0.3,
	  density:1.2,
	  friction:0.5,
	  isStatic :false
	}
  ball =Bodies.circle(100,600,10,ballOption);
  World.add(world,ball)

	ground = new Ground(600,680,1200,20)
	wall1 = new wall(450,620,20,100);
	wall2 = new wall(590,620,20,100);
	wall3 = new wall(520,660,150,20);

	Engine.run(engine);
}

function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20)
  
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();  
  

}
function keyPressed() {
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85})
	}
}


