const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var ball,ball1,ball2,ball3,ball4;
var chain, chain1 ,chain2, chain3 , chain4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bar = new Bar(300,50,450,20);


   ball = new Ball(220,150,15);
   ball1 = new Ball(250,150,15);
   ball2 = new Ball(280,150,15);
   ball3 = new Ball(310,150,15);
   ball4 = new Ball(340,150,15);

   chain = new SlingShot(ball1.body,{x:250,y:50});
   chain1 = new SlingShot(ball.body,{x:220,y:50});
   chain2 = new SlingShot(ball2.body,{x:280,y:50});
   chain3 = new SlingShot(ball3.body,{x:310,y:50});
   chain4 = new SlingShot(ball4.body,{x:340,y:50});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
 bar.display();

 ball.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();

 

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }

    
