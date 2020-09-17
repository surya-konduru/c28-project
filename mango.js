class Mango {
    constructor(x, y, radius) {
      var options = {
        isStatic: true,
        restitution: 0,
        friction: 1,
        density: 1.2
      };
  
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("assets/mango.png");
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*2, this.radius*2);
      pop();
    } 
  }