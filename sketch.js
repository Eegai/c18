//Global Variables

var monkey,stG,baG,reset,invi,bG,rand,score,surviva

function preload(){
  bana = loadImage("Banana.png");
  stone = loadImage("stone.png");
  jun = loadImage("jungle.jpg");
  mon = loadImage("Monkey_03.png")
}


function setup() {
  createCanvas(550,300);
  monkey = createSprite(100,242 ,20,20);
  monkey.addImage("m",mon);
  invi = createSprite(300,255,600,5);
  rand = random(60,175);
  score = 0
  surviva = 0
  invi.velocityX = -3
  baG = createGroup();
  stG = createGroup();
  bG = createSprite(300,150)
  bG.addImage("j",jun)
  bG.scale=0.5
  monkey.depth = bG.depth+1
  monkey.scale =0.16
  
}


function draw(){
 background(0,200,0); 
  invi.x = invi.width/2
  monkey.collide(invi);  
  invi.visible = false
  bananas();
  obstacles();
  if(bG.x<300){
  bG.x =  bG.width/2
  }
   if(frameCount%20===0){
       surviva = surviva+1;
     }
  if(keyDown("up")&&monkey.y>200){
  monkey.velocityY = -15
  }
  text("survival time :"+surviva)
   if(keyDown("space")&&monkey.y>200){
  monkey.velocityY = -10
  }
  if(monkey.isTouching(baG)&&monkey.scale >0.10){
  monkey.scale = monkey.scale-0.02
    score = score+1
  }
  
   if(monkey.isTouching(stG)&&(monkey.scale < 0.16))   {
  monkey.scale = monkey.scale+0.02
    score = score-1
  }
  
   if(monkey.isTouching(stG)&&(monkey.scale < 0.1  ))   {
  monkey.scale = monkey.scale+0.02
    score = score-1
  }
  if(surviva ===15 && monkey.scale===0.1){
  te();
  }
  monkey.velocityY = monkey.velocityY+1
  
  drawSprites();
}
function te(){
text("YOU WIN YO",100,100)
}
function obstacles(){
if (frameCount %  80=== 0) {
  ban = createSprite(700,230,12,45)
ban.velocityX = -5
  ban.lifeTime = 100
  ban.addImage("ba",stone);
  stG.add(ban);
  ban.scale=0.1
}


}


function bananas(){
if (frameCount %  200=== 0) {
  banana = createSprite(700,random(150,230),12,45)
banana.velocityX = -5
  banana.shapeColor = "yellow"
  banana.addImage("b",bana);
  baG.add(banana);
  banana.lifeTime = 100
  banana.scale=0.04
}
  else if (frameCount %  150=== 0) {
  banana = createSprite(700,random(150,230),12,45)
banana.velocityX = -5
  banana.shapeColor = "yellow"
  banana.addImage("b",bana);
    banana.lifeTime = 100
  baG.add(banana);
  banana.scale=0.04
}
}
function loose(){

monkey.destroy();
  baG.destroyEach();
  stG.destroyEach();
  bG.destroyEach();
  text("YOU LOSE Pft",100,100)
  

}