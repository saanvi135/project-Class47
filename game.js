class Game{
    constructor(){
        //this.resetTitle = createElement("h2");
        //this.resetButton = createButton("");
    
        //this.leadeboardTitle = createElement("h2");
    
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        this.playerMoving = false;
        this.leftKeyActive=false
        this.blast=false
    }
    getState(){
        var gameStateRef= database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
        }
        update(state){
            database.ref("/").update({
                gameState:state
            })
        }
    start(){
        form=new Form()
        form.display()
        player=new Player()
        playerCount=player.getCount()

        bike1=createSprite(width/2-50,height-100)
        bike1.addImage("bike1", bike1_Img)
        bike1.scale=0.3

        bike2=createSprite(width/2+100,height-100)
        bike2.addImage("bike2",bike2_Img)
        bike2.scale=0.3

        bikes=[bike1,bike2]

        fuel=new Group()
        powerCoin=new Group

        obstacles = new Group()

        var obstaclesPositions = [
            { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
            { x: width / 2, y: height - 2800, image: obstacle2Image },
            { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
            { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
            { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
            { x: width / 2, y: height - 5300, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
          ];
          this.addSprites(fuels, 4, fuelImage, 0.02);
          this.addSprites(powerCoins, 18, powerCoinImage, 0.09);

          this.addSprites(
            obstacles,
            obstaclesPositions.length,
            obstacle1Image,
            0.04,
            obstaclesPositions
          );
    }
    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []){
        for (var i = 0; i < numberOfSprites; i++) {
            var x, y;
      
            
            if (positions.length > 0) {
              x = positions[i].x;
              y = positions[i].y;
              spriteImage = positions[i].image;
            } else {
              x = random(width / 2 + 150, width / 2 - 150);
              y = random(-height * 4.5, height - 400);
            }
            var sprite = createSprite(x, y);
            sprite.addImage("sprite", spriteImage);
      
            sprite.scale = scale;
            spriteGroup.add(sprite);
          }
    }

}