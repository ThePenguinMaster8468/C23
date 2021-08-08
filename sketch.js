const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImg;



function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImg = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 380, 200, 400);
  cannon = new Cannon(180,110,100,50,angle);
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  
  tower.display();
  
 cannon.display();
}


