const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(580, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new roof(290,400,50,5)
	bobObject1 = new bob(200,550,30,30)
	bobObject2 = new bob(260,550,30,30)
	bobObject3 = new bob(320,550,30,30)
	bobObject4 = new bob(380,550,30,30)

	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  drawSprites();
 
}



