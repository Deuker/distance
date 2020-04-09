class Enemy {
  constructor() {
    this.id = game.enemy.length + 1;
    this.randomStart = random([0, 1]);
    this.x = this.randomStart === 0 ? random([0, 800]) : random((100, 500));
    this.y = this.randomStart === 0 ? random((100, 500)) : random([0, 800]);
    this.speed = 1;
    this.picture = loadImage("assets/oben.png");
    this.direction;
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
    //this.avgDistanceTotal = 0;
  }

  move() {
    //console.log(this.distance);
    if (this.direction == "right" && this.x < width) {
      this.x = this.x + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        //console.log(this.x, this.y, this.xPositionPlayer, this.yPositionPlayer)
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        
        // dist(
        //   this.x,
        //   this.y,
        //   this.xPositionPlayer,
        //   this.yPositionPlayer,
        // );
        console.log(this.disRight);
        //this.distance = this.disRight;
        this.measureDistance();
      }

      //console.log(this.disRight)
    } else if (this.direction == "left" && this.x > 0) {
      this.x = this.x - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        //console.log(this.x, this.y, this.xPositionPlayer, this.yPositionPlayer)
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        
        // dist(
        //   this.x,
        //   this.y,
        //   this.xPositionPlayer,
        //   this.yPositionPlayer,
        // );
        console.log(this.disLeft);
        //this.distance = this.disLeft;
        this.measureDistance();
      }

      //console.log(this.disLeft);
    } else if (this.direction == "down" && this.y < height) {
      this.y = this.y + this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        //console.log(this.x, this.y, this.xPositionPlayer, this.yPositionPlayer)
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        // dist(
        //   this.x,
        //   this.y,
        //   this.xPositionPlayer,
        //   this.yPositionPlayer
    
        // );
        // console.log(this.disDown);
        //this.distance = this.disDown;
        this.measureDistance();
      }

      //console.log(this.disDown);

      //console.log(disDown);
    } else if (this.direction == "up" && this.y > 0) {
      this.y = this.y - this.speed;
      image(this.picture, this.x, this.y, 50, 50);
      if (frameCount % 100 === 0) {
        //console.log(this.x, this.y, this.xPositionPlayer, this.yPositionPlayer)
        this.distance = Math.pow(Math.pow(this.x-this.xPositionPlayer, 2) + Math.pow(this.y-this.yPositionPlayer,2),0.5);
        // dist(
        //   this.x,
        //   this.y,
        //   this.xPositionPlayer,
        //   this.yPositionPlayer,
    
        // );
        //console.log(this.disUp);
        //this.distance = this.disUp;
        this.measureDistance();
      }

      //console.log(this.disUp);

      //console.log(disUp);
    }
  }
  measureDistance() {
      // this.avgDistanceTotal = 0;
      // for (let i = 0; i < this.distance.length; i++) {
      //   this.avgDistanceTotal =
      //     (this.avgDistanceTotal + this.distance[i]) / this.distance.length;
      //   }
      //   console.log("AVG", this.avgDistanceTotal);
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

//   //this.distRight, this.disLeft, this.disUp, this.disDown);
//   }
//}
