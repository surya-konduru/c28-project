class Tree {
    constructor(x, y) {
      var options = {
        isStatic: true
      }
  
      this.tree = Bodies.rectangle(x, y, 10, 10, options);
      // this.width = width;
      // this.height = height;
      this.image = loadImage("tree.png");
  
      World.add(world, this.tree);
    }
  
  
    display() {
     var pos = this.tree.position;
      
      push();
      // translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 600, 600);    
      pop();     
    }
  }