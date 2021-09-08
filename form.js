class Form{
    constructor(){
    this.input=createInput("").attribute("placeholder","Enter Your Name")
    this.playButton=createButton("PLAY")
    //this.titleImg=createImg("./assets/title1.jpg","gameTitle")
    this.greeting=createElement("h2")
    }
    setElementPositions(){
        this.input.position(width/2-110,height/2-80)
        this.playButton.position(width/2-90,height/2-20)
        //this.titleImg.position(120,50)
        this.greeting.position(width/2-300,heigt/2-100)
    }
    setElementStyle(){
        this.input.class("customInput")
        this.playButton.class("customButton")
       //this.titleImg.class("gameTitle")
        this.greeting.class("greeting")
    }
    hide(){
        this.input.hide()
        this.playButton.hide()
        this.greeting.hide()
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide()
            this.playButton.hide()
            var message=`Hello! ${this.input.value()}
            </br>
            Wait For Anthor Player To Join...`
            this.greeting.html(message)
            playerCount +=1
            player.name = this.input.value()
            player.addPlayer()
            player.updateCount(playerCount)
            player.getDistance()
        })
    }
    display(){
       this.setElementPositions() 
       this.setElementStyle()
       this.handleMousePressed()
    }
}