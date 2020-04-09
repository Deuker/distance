// This is the Class where we load and define the Game Background

class Background {
    constructor(x, y, backgroundImage) {
        this.x = x;
        this.y = y;
        this.backgroundImage = loadImage("assets/bild.jpg");
    }
    draw() {
        image(this.backgroundImage,0,0,600,600);
    }
}