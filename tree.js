class Tree {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }

    this.tree = Bodies.rectangle(x, y, width, 10, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");

    World.add(world, this.tree);
  }


  display() {
    var pos = this.tree.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}