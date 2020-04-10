// Here we define the Player

class Player {
  constructor(x, y, img) {
    this.x = 300;
    this.y = 300;
    this.width = 30;
    this.heigth = 30;
    this.speed = 3;  
    this.img = loadImage("assets/unten.png");
    this.score = 100;  
  }

  draw() {

    ellipseMode(RADIUS); // Set ellipseMode to RADIUS
    fill('#00ff88'); // Set fill to white
    ellipse(this.x, this.y, this.heigth, this.width); // Draw white ellipse using RADIUS mode

    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill('black'); // Set fill to gray
    ellipse(this.x, this.y, 45, 45); // Draw gray ellipse using CENTER mode
   
    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill('#00ff88'); // Set fill to gray
    ellipse(this.x, this.y, 8, 8); // Draw gray ellipse using CENTER mode
    //image(this.img, this.x, this.y, 50, 50);
  }
  moveDown() {
    this.y = this.y +this.speed;
    //this.img = loadImage("assets/unten.png");
  }
  moveUp() {
    this.y = this.y -this.speed;
    //this.img = loadImage("assets/oben.png");
  }
  moveRight() {
    this.x = this.x +this.speed;
    //this.img = loadImage("assets/rechts.png");
  }
  moveLeft() {
    this.x = this.x -this.speed;
    //this.img = loadImage("assets/links.jpeg");
  }
  moveRightUp() {
    this.y = this.x + this.speed;
  }
  moveLefttUp() {
    this.y = this.x + this.speed;
  }
  moveLeftDown() {
    this.x = this.y - this.speed;
  }
  moveRightDown() {
    this.x = this.y + this.speed;
  }
  //This should not be used for now
  giveCurrentPosition() {
  }
}
