
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	paper = new Paper(100,600,50)

	ground = new Ground(400,680,800,20)

	dustbin1 = new Dustbin(550,620,20,100)
	dustbin2 = new Dustbin(610,660,100,20)
	dustbin3 = new Dustbin(670,620,20,100)



  
}


function draw() {
  
  background("cyan");

  Engine.update(engine);

  
  image(dustbinImg,520,510,200,150)
  paper.display();

ground.display();

dustbin1.display();
dustbin2.display();
dustbin3.display();
  
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:340,y:-450})
	}
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	Slingshot.fly();

}

