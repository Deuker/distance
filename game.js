class Game {
   init() {
       this.backgroundImage = new Background();
       this.player = new Player(300, 300);
       this.class = new Enemies();
   }
   draw() {
        this.backgroundImage.draw();
        this.player.draw(); 
   }
}