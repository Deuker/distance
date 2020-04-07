class Player {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = loadImage("assets/unten.png");
  }

  draw() {
    image(this.img, this.x, this.y, 100, 100);
  }

  moveDown() {
    this.y = this.y +10;
    this.img = loadImage("assets/unten.png");
}

  moveUp() {
    this.y = this.y -10;
    this.img = loadImage("assets/oben.png");
  }

  moveRight() {
    this.x = this.x +10;
    this.img = loadImage("assets/rechts.png");
  }

  moveLeft() {
    this.x = this.x -10;
    this.img = loadImage("assets/links.jpeg");
  }

  measureDistance() {
    console.log(dist(this.x, this.y, 10,10));
    console.log(dist);
  }
}
