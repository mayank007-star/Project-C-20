var tom1,tom2,tom3,tom4;
var jerry1,jerry2,jerry3,jerry4;
var gardenImg;

function preload() {
    //load the images here
    jerry1 = loadImage("images/mouse1.png");
    jerry2 = loadImage("images/mouse2.png");
    jerry3 = loadImage("images/mouse3.png");
    jerry4 = loadImage("images/mouse4.png");
    tom1 = loadImage("images/cat1.png");
    tom2 = loadImage("images/cat2.png");
    tom3 = loadImage("images/cat3.png");
    tom4 = loadImage("images/cat4.png");
    gardenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addAnimation("t1",tom1);
    tom.scale = 0.3;

    jerry = createSprite(200,600);
    jerry.addAnimation("j1",jerry1);
    jerry.scale = 0.10;

}
function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX = 0;
       tom.addAnimation("t4",tom4);
       tom.changeAnimation("t4");
       tom.x = 300;
       jerry.addAnimation("j3",jerry3);
       jerry.changeAnimation("j3");
   }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("t2",tom2);
      tom.changeAnimation("t2");

      jerry.addAnimation("j2",jerry2);
      jerry.changeAnimation("j2");
  }


 }
