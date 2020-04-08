class Background {
    constructor(x, y, backgroundImage) {
        this.x = x;
        this.y = y;
        this.backgroundImage = loadImage("assets/bild.jpg");
    }
    draw() {
        image(this.backgroundImage,0,0,800,800);
    }
}