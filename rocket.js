class rocket {
    constructor(x,y,width,height){
        var options ={
            friction: 1,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.image = loadImage("rocket.png");
        this.width = width;
        this.height = height;

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

        

    }   




}