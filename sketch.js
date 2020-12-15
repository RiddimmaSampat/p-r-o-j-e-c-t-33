var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState=start;
  var score=0;
var particle, Ground;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score=0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  Ground=new ground(width/2,height,width,20);

   for (var k = 0; k <=width; k=k+80) 
   {
 divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
 text("Score : "+score,400,30);

text('500',75,600);
text('500',150,600);
text('500',225,600);
text('500',300,600);

text("100",400,600);
text('100',500,600);
text("100",600,600);

text("200",700,600);
text("200",750,600);

 

  if(particle.collide(line) && particle.x<300){
    score=score+500
  }
    if (particle.collide(line) && particle.x>300 && particle.x<600){
    score=score+100
    }
    if (particle.collide(line)&& particle.x>600){
    score=score+200;
    }
  

 
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   line(0,700,800,700)
   stroke("pink");
 
  for (var j = 0; j < particles.length; j++) { 
     particles[j].display();
   }


   for (var k = 0; k < divisions.length; k++) {
     
     Divisions[k].display();
     particle.display;
   }

  }

function mousePressed(){
  if(gameState==="end"){
    count++;
    particle=new particle(mouseX,10,10,10);
  }
}