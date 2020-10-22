
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxPosition=width/2-100;
	boxY=610;
	leftBox=createSprite(boxPosition+100, boxY, 20, 100);
	leftBox.shapeColor="red";
	bottomBox=createSprite(boxPosition+200, boxY+40, 200, 20);
	bottomBox.shapeColor="red";
	rightBox=createSprite(boxPosition+400, boxY, 20, 100);
	rightBox.shapeColor="red";
	Engine.run(engine);
  
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body.position, {x:85,y:-85});
	}
}



