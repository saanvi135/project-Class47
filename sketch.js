var canvas
var background
var form
var player 
var playerCount

function preload(){
  bike1_Img=loadImage("./bike4.png")
  bike2_Img=loadImage("./bike4.png")
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup(){
canvas=createCanvas(windowWidth,windowHeight)
game=new Game()
game.start()
}

function draw(){
  background("white")
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}
function windowResize(){
  resizeCanvas(windowWidth,windowHeight)
  
}