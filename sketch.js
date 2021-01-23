const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sling;
var block1;

function preload() {
//preload the images here
backImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1360, 600);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(660,402,1400,20)
  monstor = new Monstor(400,400,10)
  ground.x = ground.width/2
  hero = new Hero(210,150,50,50)
  sling1 = new SlingShot(hero.body,{x:200,y:0})
  //first set of blocks
  block1 = new Block(700,365,60,60)
  block2 = new Block(700,305,60,60)
  block3 = new Block(700,245,60,60)
  block4 = new Block(700,185,60,60)
  block5 = new Block(700,125,60,60)
  block6 = new Block(700,65,60,60)
  //second set of blocks
  box1 = new Block(800,360,60,60)
  box2 = new Block(800,300,60,60)
  box3 = new Block(800,240,60,60)
  box4 = new Block(800,180,60,60)
  //third set of blocks
  block7 = new Block(900,360,60,60)
  block8 = new Block(900,300,60,60)
  block9 = new Block(900,240,60,60)
  //fourth sset of blocks
  box5 = new Block(1000,360,60,60)
  box6 = new Block(1000,300,60,60)
  box7 = new Block(1000,240,60,60)
  box8 = new Block(1000,180,60,60)
  box9 = new Block(1000,120,60,60)
  box10 = new Block(1000,60,60,60)
}

function draw() {
  background(backImg);
  ground.display();
  monstor.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
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
  hero.display();
  sling1.display();
/*
  x = 700;
  i = 0;
    for (y = 120; y<380; y = y+60)
    {
      block1 = new Block(x,y,60,60)
      block1.display();
    }

    x = 800;
    i = 0;
      for (y = 180; y<380; y = y+60)
      {
        block1 = new Block(x,y,60,60)
        block1.display();
      }

    x = 900;
    i = 0;
      for (y = 60; y<380; y = y+60)
      {
        block1 = new Block(x,y,60,60)
        block1.display();
      }

      
    x = 1000;
    i = 0;
      for (y = 240; y<380; y = y+60)
      {
        block1 = new Block(x,y,60,60)
        block1.display();
      }*/
    

  }

function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x:mouseX ,y:mouseY});
  
}

function mouseReleased(){
  sling1.fly()
}




