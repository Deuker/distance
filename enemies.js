//This is the Enemy Class

class Enemy {
  constructor() {
    this.id = game.enemy.length + 1;
    //Here we define the random start corner
    this.randomStart = random([0, 1]);
    this.x = this.randomStart === 0 ? random([0, 800]) : random((100, 500));
    this.y = this.randomStart === 0 ? random((100, 500)) : random([0, 800]);
    //Here we define the speed per Enemy
    this.speed = 1;
    this.picture = loadImage("assets/oben.png");
    //this.direction;
    this.xPositionPlayer = game.player.x;
    this.yPositionPlayer = game.player.y;

    if (this.x == 0) {
      this.direction = "right";
    } else if (this.x == 800) {
      this.direction = "left";
    } else if (this.y == 0) {
      this.direction = "down";
    } else if (this.y == 800) {
      this.direction = "up";
    }
    this.distance = [];
    
  }
  //Movement of the Enemy
  move() {
    if (this.direction == "right" && this.x < width) {
      this.x = this.x + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        this.measureDistance();
      }
    } 
    else if (this.direction == "left" && this.x > 0) {
      this.x = this.x - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        this.measureDistance();
      }
    } 
    else if (this.direction == "down" && this.y < height) {
      this.y = this.y + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        this.measureDistance();
      }
    } else if (this.direction == "up" && this.y > 0) {
      this.y = this.y - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        this.measureDistance();
      }
    }
  }
  // Here we measure the distance to the player and change the Score
  measureDistance() {
      if (game.player.score === 10) {
        game.finished = true; 
      } else {
      
      if(this.distance > 150) {
        game.player.score ++;
      } else if (this.distance < 150 && this.distance > 100) {
        game.player.score --;
      } else {
        game.player.score -= 10;
      }
    }
      console.log(game.player.score)
  }
}

