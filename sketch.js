
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var ground;
var stone;
var launcher;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  boy = new Boy(210,610,200,300);
  tree = new Tree(770,480,500,400);

	mango1 = new Mango(760,400,50);
	mango2 = new Mango(790,340,50);
	mango3 = new Mango(850,310,50);
	mango4 = new Mango(920,380,50);
	mango5 = new Mango(700,350,50);
	mango6 = new Mango(870,380,50);
	

	ground = new Ground(500,685,1000,30);
	
	stone = new Stone(140,530,30);

	launcher = new Launcher(stone.body,{x:140,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  boy.display();
  tree.display();

  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  textSize(24)
;  text("Press Space to get a second chance to play!!",50,200);
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
if (keyCode === 32) {
	Matter.Body.setPosition(stone.body,{x:140, y:530});
    launcher.attach(stone.body);
  }
}
function detectCollision(lstone, lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}





