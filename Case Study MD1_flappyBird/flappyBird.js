const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

//variables
let bX = 10;
let bY = 150;
let gravity = 1.5;
let score = 0;

//on key down
document.addEventListener("keydown", moveUp)

function moveUp() {
    fly.play()
    bY -= 25
}

//audio
let fly = new Audio();
let score1 = new Audio();

fly.src = "audio/fly.mp3"
score1.src = "audio/score.mp3"

// pipe
let pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

//load images
let bird = new Image();
const bg = new Image();
const fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

bird.src = "images/bird.png"
bg.src = "images/bg.png"
fg.src = "images/fg.png"
pipeNorth.src = "images/pipeNorth.png"
pipeSouth.src = "images/pipeSouth.png"

//draw
function draw() {
    ctx.drawImage(bg, 0, 0)


    for (let i = 0; i < pipe.length; i++) {
        const gap = 150;
        let constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
        pipe[i].x--;

        if (pipe[i].x === 0) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
        }

        //detect collision
        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width
            && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) ||
            bY + bird.height >= cvs.height - fg.height) {
            location.reload(); //reload the page
        }

        //score
        if (pipe[i].x === 5) {
            score++;
            score1.play()
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height)

    ctx.drawImage(bird, bX, bY)
    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20)

    requestAnimationFrame(draw);
}

draw();