// Here we define the Player

class Player {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = loadImage("assets/unten.png");
    this.score = 0;  
  }

  draw() {
    image(this.img, this.x, this.y, 50, 50);
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
  //This should not be used for now
  giveCurrentPosition() {
  }
}
