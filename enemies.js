//This is the Enemy Class

class Enemy {
  constructor() {
    this.id = game.enemy.length + 1;
    this.width = 45;
    this.height = 45;
    //Here we define the random start corner
    this.randomStart = random([0, 1]);
    this.x = this.randomStart === 0 ? random([0, 800]) : random((100, 500));
    this.y = this.randomStart === 0 ? random((100, 500)) : random([0, 800]);
    //Here we define the speed per Enemy
    this.speed = random([1,1.2,0.9,0.7,1.3]);
    this.color = random(['#008888', '#102c54','#ac4034','ec7c25','red','blue','yellow'])
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

    ellipseMode(RADIUS); // Set ellipseMode to RADIUS
    fill(this.color); // Set fill to white
    ellipse(this.x, this.y, this.heigth, this.width); // Draw white ellipse using RADIUS mode

    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill('white'); // Set fill to gray
    ellipse(this.x, this.y, 30, 30); // Draw gray ellipse using CENTER mode
   
    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill(this.color); // Set fill to gray
    ellipse(this.x, this.y, 13, 13); // Draw gray ellipse using CENTER mode
    //image(this.img, this.x, this.y, 50, 50);

    if (this.direction == "right" && this.x < width + 0.5 * this.width) {
      this.x = this.x + this.speed;
      //image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 30 === 0) {
        console.log(this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5));
        this.measureDistance();
      }
    } 
    else if (this.direction == "left" && this.x > 0 - 0.5 * this.width) {
      this.x = this.x - this.speed;
      //image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 30 === 0) {
        console.log(this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5));
        this.measureDistance();
      }
    } 
    else if (this.direction == "down" && this.y < height + 0.5 * this.height) {
      this.y = this.y + this.speed;
      //image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 30 === 0) {
        console.log(this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5));
        this.measureDistance();
      }
    } else if (this.direction == "up" && this.y > 0 - 0.5 * this.height) {
      this.y = this.y - this.speed;
      //image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 30 === 0) {
        console.log(this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5));
        this.measureDistance();
      }
    }
  }
  // Here we measure the distance to the player and change the Score
  measureDistance() {
      if (game.player.score < 0) {
        game.finished = true; 
      } else {
      
      if(this.distance > 500 && this.distance < 700) {
        game.player.score = game.player.score + 0.5;
      } else if (this.distance < 500 && this.distance > 300) {
        game.player.score = game.player.score + 0.3;
      } else if (this.distance < 300 && this.distance > 225) {
        game.player.score = game.player.score - 0.5;  
      }
      else if (this.distance < 225 && this.distance > 175) {
        game.player.score = game.player.score - 0,7.;  
      }
      else if (this.distance < 175  && this.distance > 125) {
        game.player.score = game.player.score - 1,2;  
      }
      else if (this.distance < 125 && this.distance > 75) {
        game.player.score = game.player.score - 1,5;  
      }
      else {
        game.player.score = game.player.score - 5;
      }
    }
      console.log(game.player.score)
  }
}

