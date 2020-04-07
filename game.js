class Game {
      constructor() {
          this.enemy = [];
      }

    init() {
       this.backgroundImage = new Background();
       this.player = new Player(300, 300);
       //why is this not called? 
       //this.enemy = new Enemy(0,300,2); 
    }
    draw() {
        this.backgroundImage.draw();
        this.player.draw(); 
        //this.player.measureDistance();
         
        //what is going on here?
        if (frameCount % 100 === 0) {
            this.enemy.push(new Enemy());
        }
        this.enemy.forEach((enemy)=> {
             enemy.move();
        });
        
        
    }
}
