const game = new Game();
// The following two lines help to save the local Highscore
// localStorage.setItem("gameScore", 0);
// let score = localStorage.getItem("gameScore");

function preload() {
    game.init();
    //player = new Player(300, 300);
    //playerImage = loadImage("assets/run.gif");
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    clear();
    game.draw();
    // Here we draw the Game after enter gets pressed on the Mainscreen 
    if (game.start === true) {
        game.draw();
        // Here we define different colors of the score
            if (game.player.score < 2) {
                fill("blue");
                textSize(20);
                text( `The score is ${game.player.score}` , 10, 30);
                }
            else if (game.player.score >=2 && game.player.score < 10) {
                fill("red");
                textSize(20);
                text( `The score is ${game.player.score}` , 10, 30)
        } 
    }
    else {
        fill("black");
        rect(0,0,600,600);
        fill("white");
        textSize(30);
        text("Press Space Bar to start", 10, 30);



    }
}
function keyPressed() {
    let rightArrowCode = 39;
    let leftArrowCode = 37;
    let upArrowCode = 38;
    let downArrowCode = 40;
    let spaceBarCode = 32;
    let EnterCode = 13;

    if (keyCode === rightArrowCode) {
        game.player.moveRight();
    } 
    else if (keyCode === leftArrowCode) {
        game.player.moveLeft();
    }
    else if (keyCode === upArrowCode) {
        game.player.moveUp();
    }
    else if (keyCode === downArrowCode) {
        game.player.moveDown();
    }
    else if (keyCode === spaceBarCode) {
        game.start = true;
    }
    else if (keyCode === EnterCode && game.finished===true) {
        window.location.reload();
    } 

}

