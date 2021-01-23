class Hero{
    constructor(x,y) {
        /*var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }*/
        this.body = Bodies.circle(x, y,400, 200);
        this.image = loadImage("Superhero-01.png")
        this.width = 400;
        this.height = 200;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        imageMode(CENTER)
        fill("red");
        //rect(0, 0, this.width, this.height);
        image(this.image,0,0,this.width,this.height)
       // this.image.scale(5)
        pop();
      }
}