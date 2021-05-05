class Box{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.4,
            'friction':0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30,30, options);
        //this.body.image = 0.5;
        this.Visibility = 255;
        this.image = loadImage("polygonImg.jpg");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        imageMode(CENTER);
        fill("red");
        if(this.body.speed<3){
          //rect(this.body.position.x,this.body.position.y,30,30);
          image(this.image,this.body.position.x,this.body.position.y,30,30);
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,30,30);
          pop();
        }
        
      }
}