class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,

      }
      this.image = loadImage("block.png")
      
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      
      console.log(this.body.speed)
      if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop()
    }else{
      World.remove(world, this.body)
      push()
    this.Visibility = this.Visibility - 1;
    tint(255, this.Visibility);
    imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
    //rect(999,999,this.width, this.height)
      pop()
    }
    }
}