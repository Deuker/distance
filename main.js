const game = new Game();


function preload() {
    game.init();
    //player = new Player(300, 300);
    //playerImage = loadImage("assets/run.gif");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    clear();
    game.draw();
    game.measureDistance();
    // if (game.start) {
    //     game.draw();
    // }
    // else {
    //     fill("green");
    //     rect(0,0,600,600);
    //     text('"Press enter to start"');


    // }
    //background.draw();
    //image(playerImage, 300, 300, 50, 50);
}

function keyPressed() {
    let rightArrowCode = 39;
    let leftArrowCode = 37;
    let upArrowCode = 38;
    let downArrowCode = 40;
    if (keyCode === rightArrowCode) {
        game.player.moveRight();
        //console.log("move right");
    } 
    else if (keyCode === leftArrowCode) {
        game.player.moveLeft();
        //console.log("move left");
    }
    else if (keyCode === upArrowCode) {
        game.player.moveUp();
        //console.log("move up");
    }
    else if (keyCode === downArrowCode) {
        game.player.moveDown();
        //console.log("move down");
    }
}

