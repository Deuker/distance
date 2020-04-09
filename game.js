class Game {
      constructor() {
          this.enemy = [];
          this.start = false;
          this.finished = false; 
          
      }

    init() {
       this.backgroundImage = new Background();
       this.player = new Player(300, 300);
       this.scoreboard = new Scoreboard ();

       //console.log(this.player.x);
       //console.log(this.enemy.x);
    }
    draw() {
        this.backgroundImage.draw();
        this.player.draw(); 
        
        this.scoreboard.addNewEnemy();
        
         
        //what is going on here?
        if (frameCount % 1000 === 0) {
            this.enemy.push(new Enemy());
            //console.log(this.enemy);
            //In row 22 we call the current postion on player1
            // how to implement id
            // clear enemy when leaving playgrounde
            //console.log(this.enemy.id);
            //console.log(this.enemy.length);
        }
        
        //this.enemy.forEach((enemy)=> {
        //    enemy.draw();
        
       //});
        this.enemy.forEach((enemy)=> {
             enemy.move();
             //enemy.measureDistance();
             
        
        });

        for(let i = 0; i < this.enemy.length; i++) {
           this.enemy[i].move();
        }
        
        if(this.finished ===  true) {
            noLoop();
            fill("black");
            rect(0,0,600,600);
            fill("white");
            textSize(30);
            text("Game Over, press Enter to restart", 10, 30);
        } 
        
    }

    measureDistance() {
        
             
             //console.log(this.player.x);
             //console.log(this.player.y);
            //dist(this.player.x, this.player.y, this.enemy.x, this.enemy.y);
        //console.log(dist);
    }
}
