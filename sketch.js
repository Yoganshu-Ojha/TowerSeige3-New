const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, sling;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(900,200,400,20);
    platform = new Ground(500, 350, 200, 20);

    box2 = new Box1(760,180);

    box3 = new Box1(800,180);
    box4 = new Box1(840,180);

    box5 = new Box1(880,180);
    box6 = new Box1(920,180);

    box7 = new Box1(960,180);
    box8 = new Box1(1000,180);

    box9 = new Box1(1040,180);

    box12 = new Box1(800,140);
    box13 = new Box1(840,140);

    box14 = new Box1(880,140);
    box15 = new Box1(920,140);

    box16 = new Box1(960,140);
    box17 = new Box1(1000,140);

    box23 = new Box1(840,100);
    box24 = new Box1(880,100);

    box25 = new Box1(920,100);
    box26 = new Box1(960,100);

    box34 = new Box1(880,60);
    box35 = new Box1(920,60);

    box36 = new Box1(440,320);
    box37 = new Box1(480,320);

    box38 = new Box1(520,320);
    box39 = new Box1(560,320);

    box47 = new Box1(480,280);
    box48 = new Box1(520,280);
    bird = new Polygon(200,150,50,50);
    sling = new SlingShot(bird.body,{x:200,y: 150});
}

function draw(){
    background((210,105,30));
    Engine.update(engine);
    strokeWeight(4);
    box2.display();
    ground.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();

    box7.display();
    box8.display();
    
    box12.display();
    box13.display();
    
    box14.display();
    box15.display();
    
    box16.display();
    box17.display();

    box23.display();
    box24.display();

    box25.display();
    box26.display();

    box34.display();
    box35.display();

    box36.display();
    box37.display();

    box38.display();
    box39.display();

    box47.display();
    box48.display();

    box9.display();

    bird.display();
    platform.display();
    sling.display();  
    
    textSize(20);
    fill(255);
    text("Score : "+ score,1100,25);

    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box47.score();
    box48.score();

    keyPressed();
}
function mouseDragged() {

    Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});

}

function mouseReleased() {

    sling.fly();

}

function keyPressed(){
    if(keyCode === 32){
      sling.attach(bird.body);
    }
}