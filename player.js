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
    console.log(this.y);
}

  moveUp() {
    this.y = this.y -10;
    this.img = loadImage("assets/oben.png");
    console.log(this.y);
  }

  moveRight() {
    this.x = this.x +10;
    this.img = loadImage("assets/rechts.png");
    console.log(this.x);
  }

  moveLeft() {
    this.x = this.x -10;
    this.img = loadImage("assets/links.jpeg");
    console.log(this.x);
  }

  giveCurrentPosition() {
    console.log(this.x);
    console.log(this.y);
  }

  // measureDistance() {
  //   console.log(dist(this.x, this.y, 10,10));
  //   console.log(dist);
  // }
}
