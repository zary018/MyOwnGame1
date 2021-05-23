class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true,
        visibility: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.body.visibility = false;
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
