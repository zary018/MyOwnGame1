const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var gstate = 0
function preload(){
EarthImg = loadImage("Earth.jpg");

SpaceImg = loadImage("Space.jpg");


Space1Img = loadImage("Space1.jpg");

}
function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(1200,800);

    ground = new Ground(600,650,1200,20);
    Rocket = new rocket(200,550,100,100);

    Space = createSprite(600,400,1200,800);
    Space.addImage(SpaceImg);
    Space.visible = false;

    //Earth = createSprite(600,400,1200,800);
    //Earth.addImage(EarthImg);
}
function draw(){
    background(EarthImg);
    Engine.update(engine);
    Rocket.display();
    ground.display();

    if(gstate == 0){
    //console.log(round(Rocket.body.position.x) + "x")
    //console.log(round(Rocket.body.position.y) + "y")
    
    if(Rocket.body.position.y<0 && Rocket.body.position.x > 1200){
        gstate = 1
         
    }
}
    if(gstate == 1){
        //EarthImg.destroy();
        //Space.visible = true;
        //Matter.Body.setPosition(Rocket.body, {X:200,y:500});
        Rocket.body.position.x = 200
        Rocket.body.position.y = 550
        Matter.Body.setStatic(Rocket.body, true)
       // background(Space1Img);
        console.log(round(Rocket.body.position.x) + "x")
        console.log(round(Rocket.body.position.y) + "y")
        
    }
    
}


function keyPressed() {
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(Rocket.body, Rocket.body.position,{x:300, y:-430});
        
        
    }

}

