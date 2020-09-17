const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, boy, stone, ground, slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload(){
	boy = loadImage("assets/boy.png");
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(550, 280, 400, 450);
	boy.resize(100, 200);
	ground = new Ground(width/2, height, width, 20);
	mango1 = new Mango(500, 200, 20, 20);
	mango2 = new Mango(550, 200, 20, 20);
	mango3 = new Mango(600, 200, 20, 20);
	mango4 = new Mango(650, 200, 20, 20);
	mango5 = new Mango(700, 200, 20, 20);
	mango6 = new Mango(450, 200, 20, 20);
	stone = new Stone(80, 360, height/25);
	slingshot = new Slingshot(stone.body, {x:75, y:395});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightSkyBlue");
  image(boy, 50, 350);
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();
//   stone.pick({x:75, y:395});
   
  drawSprites();  		
 
}

function detectCollision(stone, mango){
	mangoPosition = mango.body.position
	stonePosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-mango1.r + stone.r){
			Matter.body.setStatic(mango1.body, false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();   
}

