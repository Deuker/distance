// This is the Game Class

class Game {
      constructor() {
          this.enemy = [];
          this.start = false;
          this.finished = false; 
          
      }

    init() {
       this.backgroundImage = new Background();
       this.player = new Player();
       this.scoreboard = new Scoreboard ();

    }
    draw() {
        this.backgroundImage.draw();
        this.player.draw(); 
        
        this.scoreboard.addNewEnemy();
        // Here we create new Enemies based on FrameCount and store them in the Array this.enemy
        if (frameCount % 1000 === 0) {
            this.enemy.push(new Enemy());
        }
        else if(frameCount % 500 === 0) {
                this.enemy.push(new Enemy());
        }
        else if(frameCount > 2500) {
            if(frameCount % 100 === 0) {
                this.enemy.push(new Enemy());
        }
        }



            // this.enemy.forEach((enemy)=> {
            //  enemy.move(); 
            // });
            for(let i = 0; i < this.enemy.length; i++) {
            this.enemy[i].move();
            }
        // Here we define the End Screen
        if(this.finished ===  true) {
            noLoop();
            fill("black");
            rect(0,0,800,800);
            fill("white");
            textSize(30);
            text("Game Over, press Enter to restart", 10, 30);
        }   
    }
    // This should be not used so far
    measureDistance() {   
    }
}
