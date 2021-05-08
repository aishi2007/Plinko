var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2 , 10, divisionHeight));

  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
  if(frameCount%60===0){
    for (var l = 50; l <=width-10; l=l+50) 
    {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    particles.velocityY = 6;
  }
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  textSize(20)
  fill("white")
  text("Score: "+score,50,50)
 
  text("500",30,500)
  text("500",100,500)
  text("500",180,500)
  text("500",260,500)
  text("100",340,500)
  text("100",430,500)
  text("100",500,500)
  text("200",580,500)
  text("200",660,500)
  text("200",740,500)
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  

  //display the paricles 
  for (var m = 0; m< particles.length; m++) {
    particles[m].display();
  }
}