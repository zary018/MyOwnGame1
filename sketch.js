const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var gstate = 0
function preload(){
EarthImg = loadImage("Earth.jpg");

SpaceImg = loadImage("Space.jpg");

RocketImg = loadImage("rocket.png");
Space1Img = loadImage("Space1.jpg");



ship1 = loadImage("ship1.png");
ship2 = loadImage("ship2.png");
ship3 = loadImage("ship3.png");
ship4 = loadImage("ship4.png");



}
function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(1200,800);
   

    


    ground = createSprite(600,650,1200,20);
    ground.visible = false;
    Rocket = createSprite(200,550,100,100);
    Rocket.addImage(RocketImg);
    Rocket.scale = 0.35;
    
    

    ROCKET = createSprite(400,550,100,100);
    ROCKET.addImage(RocketImg)
    ROCKET.visible = false;
    ROCKET.scale = 0.35;
    
    Space = createSprite(600,400,1200,800);
    Space.addImage(SpaceImg);
    Space.visible = false;

    //Earth = createSprite(600,400,1200,800);
    //Earth.addImage(EarthImg);
}
function draw(){
    background(EarthImg);
   

    if(gstate == 0){

    
    if(Rocket.y<0 && Rocket.x > 1000){
        gstate = 1
         
    }
}
    if(gstate == 1){
        //EarthImg.destroy();
        //Space.visible = true;
       
        ROCKET.visible = true
        
        background(Space1Img);
        spaceShips();
        ROCKET.rotation = -50;
        
        /*if(keyDown("left")){
            // Rocket.velocityX = -10;
            Rocket.x -= 50 //r.x = r.x - 10
        }
        

        if(keyDown("right")){
            Rocket.x += 50
        }*/


        if(keyDown("LEFT_ARROW")){
            ROCKET.velocityX = -5; 
        }
        if(keyDown("RIGHT_ARROW")){
            ROCKET.velocityX = +5;   
        }
    }
    drawSprites();

}


function keyPressed() {
    if(keyCode === UP_ARROW){
        Rocket.velocityY = -5;
        Rocket.velocityX = +5;   
    }

    

}


function spaceShips()   {
    if(frameCount % 80 == 0){
        ships = createSprite(round(random(100,1200)), -100)
        ships.velocityY = +5;
        ships.scale = 1.2;
       
        
        var rand = round(random(1,4))

        switch(rand){
            case 1: ships.addImage(ship1)
                break;

            case 2: ships.addImage(ship2)
                break;

            case 3: ships.addImage(ship3)
                break;

             case 4: ships.addImage(ship4)
                break;    
            

        }
        ships.lifetime = 200;

    
    }


}