const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var base;
var polygon;
function preload()
{}

function setup() {
	createCanvas(1000, 1200);


	engine = Engine.create();
	world = engine.world;
	
	base=new Ground(500,1195,1000,10)

	//1st floor
	box1=new Box(560,1194,40,40,4)
	box2=new Box(600,1194,40,40,4)
	box3=new Box(640,1194,40,40,4)
	box4=new Box(680,1194,40,40,4)
	box5=new Box(720,1194,40,40,4)
	//2nd floor
	box6=new Box(580,1154,40,40,4)
	box7=new Box(620,1154,40,40,4)
	box8=new Box(660,1154,40,40,4)
	box9=new Box(700,1154,40,40,4)
	//3rd floor
	box10=new Box(600,1114,40,40,4)
	box11=new Box(640,1114,40,40,4)
	box12=new Box(680,1114,40,40,4)
	//4th floor
	box13=new Box(620,1074,40,40,4)
	box14=new Box(660,1074,40,40,4)
	//top floor
	box15=new Box(640,1034,40,40,4)

	polygon=Bodies.circle(50,200,200)
	World.add(world,polygon);
	sling=new Slingshot(this.polygon,{x:150,y:500})

	
}



function draw() {
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  sling.display();
  polygon.display();
}