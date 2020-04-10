const game = new Game();
// The following two lines help to save the local Highscore
// localStorage.setItem("gameScore", 0);
// let score = localStorage.getItem("gameScore");
let imgStart;
let imgEnd;
function preload() {
    imgStart = loadImage('assets/startscrren.png');
    imgEnd = loadImage('assets/endscreen.png');
    game.init();
    
    //let font = loadFont('assets/minimal.otf');
    //player = new Player(300, 300);
    //playerImage = loadImage("assets/run.gif");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    clear();

    let rightArrowCode = 39;
    let leftArrowCode = 37;
    let upArrowCode = 38;
    let downArrowCode = 40;

    if (keyIsDown(rightArrowCode)) {
        game.player.moveRight();
    }
    else if (keyIsDown(leftArrowCode)) {
        game.player.moveLeft();
    }
    else if (keyIsDown(downArrowCode)) {
        game.player.moveDown();
    }
    else if (keyIsDown(upArrowCode)) {
        game.player.moveUp();
    }
    else if(keyIsDown(upArrowCode) || keyIsDown(rightArrowCode)) {
        game.player.moveRightUp();
    }
    else if(keyIsDown(upArrowCode) || keyIsDown(leftArrowCode)) {
        game.player.moveLeftUp();
    }
    else if(keyIsDown(downArrowCode) || keyIsDown(leftArrowCode)) {
        game.player.moveLeftDown();
    }
    else if(keyIsDown(downArrowCode) || keyIsDown(rightArrowCode)) {
        game.player.moveRightDown();
    }
    //game.draw();
    // Here we draw the Game after enter gets pressed on the Mainscreen 
    if (game.start === true) {
        game.draw();
        // Here we define different colors of the score
                if (game.player.score < 1) {
                    fill('black');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30);
                }
                else if (game.player.score >=1 && game.player.score < 12) {
                    fill('#DE9B88');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=12 && game.player.score < 24) {
                    fill('#DE9B88');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=24 && game.player.score < 35) {
                    fill('#CFA191');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=35 && game.player.score < 46) {
                    fill('#C1A799');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=46 && game.player.score < 57) {
                    fill('#B2ADA2');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=57 && game.player.score < 68) {
                    fill('#A4B3AA');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=68 && game.player.score < 79) {
                    fill('#95B9B3');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=79 && game.player.score < 90) {
                    fill('#375B6A');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }
                else if (game.player.score >=90 && game.player.score < 100) {
                    fill('#216477');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }     
                else {
                fill('#216477');
                    textSize(30);
                    text( `${Math.floor(game.player.score)}` , 10, 30)
                }        
    }
    else {
        rect(0,0,800,800);
        fill("black");
        image(imgStart,-80,140);
        
        
        // fill("white");
        // textSize(30);
        // text("Press Space Bar to start", 10, 30);
        // textFont(font, 36);
        
        

    

    }

}
function keyPressed() {
    
    let spaceBarCode = 32;
    let EnterCode = 13;

    if (keyCode === spaceBarCode) {
        game.start = true;
    }
    else if (keyCode === EnterCode && game.finished===true) {
        window.location.reload();
    }
}