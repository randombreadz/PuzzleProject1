var playButton, playImg, play2, play2Img, press, pressImg, welcome, welcomeImg;
var ground, cliff, ground2;
var bob, bob_Idle;

function preload(){
  bob_Idle = loadAnimation("bob.png")

  welcomeImg = loadImage("welcome.png");
  playImg = loadImage("play.png");
  play2Img = loadImage("play2.png");
  pressImg = loadImage("press.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-60);

  welcome = createSprite(780, 200, 50, 50)
  welcome.addImage("hello", welcomeImg);
  welcome.scale = 9.0

  playButton = createSprite(750, 650, 50, 50)
  playButton.addImage("play", playImg);
  playButton.scale = 12.0

  play2 = createSprite(1050, 353, 50, 50)
  play2.addImage("play2", play2Img);
  play2.scale = 12.0

  press = createSprite(700, 400, 50, 50)
  press.addImage("press", pressImg);
  press.scale = 12.0

  ground = createSprite(750, 780, 1700, 50)
  ground.shapeColor = "green"
  ground.visible = false;

  cliff = createSprite(1300, 600, 450, 500)
  cliff.shapeColor = "tan"
  cliff.visible = false;

  ground2 = createSprite(1300, 380, 450, 60)
  ground2.shapeColor = "green"
  ground2.visible = false;

  bob = createSprite(50, 700, 30, 50)
  bob.addAnimation("idle", bob_Idle);
  bob.visible = false;
}

function draw() {

  //collider
  //bob.debug = true
  bob.setCollider("rectangle", 0, 0, 30, 70, 0)
  play2.setCollider("rectangle", 0.7, -5.6, 27, 5, 0);

  background("orange");

  //bob move
  if(keyDown("space") && bob.y >= 700) {
    bob.velocityY = -12;
  }

  bob.velocityY = bob.velocityY + 0.8

  if(keyWentUp("space")) {
    bob.velocityY = +7;
  }

  if(keyDown(RIGHT_ARROW)) {
    bob.velocityX = +5;
  }

  if(keyWentUp(RIGHT_ARROW)) {
    bob.velocityX = 0;
  }

  if(keyDown(LEFT_ARROW)) {
    bob.velocityX = -5;
  }

  if(keyWentUp(LEFT_ARROW)) {
    bob.velocityX = 0;
  }

  bob.collide(ground);
  bob.collide(ground2);
  bob.collide(cliff);

  if(mousePressedOver(play2)){
    level2();
  }

  drawSprites();
    }

    function level2(){
      welcome.destroy();
      press.destroy();
      playButton.destroy();
      play2.destroy();

      bob.visible = true;
      cliff.visible = true;
      ground2.visible = true;
      ground.visible = true;
    }