class Enemy {
  constructor() {
    this.id = game.enemy.length + 1;
    this.randomStart = random([0, 1]);
    this.x = this.randomStart === 0 ? random([0, 600]) : random((100, 500));
    this.y = this.randomStart === 0 ? random((100, 500)) : random([0, 600]);
    this.speed = 2;
    this.picture = loadImage("assets/oben.png");
    this.direction;
    this.xPositionPlayer = game.player.x;
    this.yPositionPlayer = game.player.y;

    if (this.x == 0) {
      this.direction = "right";
    } else if (this.x == 600) {
      this.direction = "left";
    } else if (this.y == 0) {
      this.direction = "down";
    } else if (this.y == 600) {
      this.direction = "up";
    }
    // for laterconsole.log(game.player)
    // for laterconsole.log(game.enemy)
  }

  move() {
    if (this.direction == "right" && this.x < width) {
      this.x = this.x + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      this.distRight = dist(
        this.xPositionPlayer,
        this.yPositionPlayer,
        this.x,
        this.y
      );

      game.score -= distRight / 100;
      //console.log(distRight)
    } else if (this.direction == "left" && this.x > 0) {
      this.x = this.x - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      this.disLeft = dist(
        this.xPositionPlayer,
        this.yPositionPlayer,
        this.x,
        this.y
      );
      //console.log(disLeft);
    } else if (this.direction == "down" && this.y < height) {
      this.y = this.y + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      this.disDown = dist(
        this.xPositionPlayer,
        this.yPositionPlayer,
        this.x,
        this.y
      );
      //console.log(disDown);
    } else if (this.direction == "up" && this.y > 0) {
      this.y = this.y - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      this.disUp = dist(
        this.xPositionPlayer,
        this.yPositionPlayer,
        this.x,
        this.y
      );
      //console.log(disUp);
    }
  }

  measureDistance() {
    console.log("helloe");
    console.log(this.distRight, this.disLeft, this.disUp, this.disDown);
  }
}
