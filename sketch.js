var gamestate = "play" 

function preload() {
 bgImg = loadImage("images/bg.png")
  potImg = loadImage("images/pot.png");
  boyImg = loadImage("images/boy.png")
pot2Img = loadImage("images/pot 2.png")
  wonImg = loadImage("images/won.png")
boy2Img = loadImage("images/boy 2.png")
ruleImg = loadImage("images/notice.png")
}
function setup() {
  
  createCanvas(1366,657)
  bg = createSprite(683,329,1366,657)
  bg.addImage(bgImg)
  //bg.scale=1.3

   boy = createSprite(700,650,50,80)
   boy.addImage(boyImg)
   //boy.scale = 1.5

   rules = createSprite(190,400,50,50)
   rules.addImage(ruleImg)
   rules.scale=0.4
   invisibleGround = createSprite(695,650,1390,20);
   invisibleGround.visible = false
 
 won=createSprite(1000,500,10,40)
 won.addImage(wonImg)
 won.scale=0.2
won.visible=false
 

pg = createGroup ()  

}

function draw() {
  background(255);

if(gamestate == "play"){
  

  if(keyDown("space")&& boy.y > 160) {
    boy.velocityY = -13;
}
boy.velocityY = boy.velocityY + 0.8

  if(keyDown(LEFT_ARROW)){
    boy.velocityX=-3;
    boy.velocityY=0;
    boy.addImage(boyImg)
}
else if(keyDown(RIGHT_ARROW)){    
  boy.velocityX=3;
  boy.velocityY=0;
boy.addImage(boy2Img)
} 



boy.collide(invisibleGround);




pot()



}
   
  if(gamestate == "end" ){
    boy.velocityX = 700
    boy.velocityY = 650
    won.visible=true

}




drawSprites()


}
function pot(){
  if (frameCount % 100 === 0) {
    var a=random(600,1300)
    var b = random(70,100)
    p=createSprite(a,b,20,20);
    p.addImage(potImg)
    p.x = Math.round(random(100,1300))
    p.scale = 0.7

    p.lifetime=100
    pg.add(p)

    if (boy.isTouching(p)){
      p.addImage(pot2Img)
     p.scale = 1
      gamestate="end"
      }
    }
}


