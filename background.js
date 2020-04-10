// This is the Class where we load and define the Game Background

class Background {
    constructor(x, y, backgroundImage) {
        this.x = x;
        this.y = y;
        this.backgroundImage = loadImage("assets/timer.gif");
    }
    draw() {
        image(this.backgroundImage,0,0,800,800);
    }
}