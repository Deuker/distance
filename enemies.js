//https://www.youtube.com/watch?v=GnhVUdMgS4Y

class Enemy {
    constructor(x = 0, y = 300, speed = 2, picture ) {
        this.x = x;
        this.y = y; 
        this.speed = speed;
        this.picture = loadImage("assets/oben.png");
    }
    
    move() {
        image(this.picture, this.x, this.y, 50, 50);
        this.x = this.x + 10;
    }
    changeDirection() {

    }
}


//Bike exceeds class Enemy