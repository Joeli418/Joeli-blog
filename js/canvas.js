//The following code is written heavily based on the video linked below
//https://www.youtube.com/watch?v=3GqUM4mEYKA&t=356s

//canvas setting/////////////////////////
canvas_list = ["#canvas1", "#canvas2"]
const NOC = 2;
inCan = [0, 0];
canvas = inCan;
/////////////////////////////////////////

width = 10;
const very_small_value = 0.01;

window.addEventListener("load", LoadNResize);

window.addEventListener("resize", LoadNResize);

function inCanvas(i) {
    document.body.classList.add("noPhoneScroll");
    inCan[i - 1] = 1;
}

function outCanvas(i) {
    document.body.classList.remove("noPhoneScroll");
    inCan[i - 1] = 0;
}

function LoadNResize () {
    for (i = 0; i < NOC; i++) {
        canvas = document.querySelector(canvas_list[i]);
        ctx = canvas.getContext('2d');

        //Resizing 
        canvas.height = 2 * window.innerHeight / 3;
        canvas.width = 2 * window.innerWidth / 3;  

        ctx.lineWidth = width;
        ctx.lineCap = "round";

    }    
}

//variables
let drawing = false;

function startPosition (e) {
    drawing = true;
    draw(e);

    //a very cheesy method to get over it
    //basically you need to have some offset for stroke to draw sth
    ctx.lineTo(e.offsetX, e.offsetY + very_small_value); 
    ctx.stroke();
    
}

function endPosition () {
    drawing = false;
    ctx.beginPath();
}

function draw (e) {
    for (let j = 0; j < NOC; j++) {
        console.log(j);
    if (drawing && inCan[j]) {
    
        ctx.lineWidth = width;
        ctx.lineCap = "round";

        //This is the video in which I've learnt i have to use e.offsetX
        //https://www.youtube.com/watch?v=y84tBZo8GFo&t=220s
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
    }
}

window.addEventListener("mousedown", startPosition);
window.addEventListener("mouseup", endPosition);
window.addEventListener("mousemove", draw);


window.addEventListener('keyup', function (e) {
    if (e.code == 'Digit1') {
        width = 1;
    }
    if (e.code == 'Digit2') {
        width = 2;
    }
    if (e.code == 'Digit3') {
        width = 3;
    }
    if (e.code == 'Digit4') {
        width = 4;
    }
    if (e.code == 'Digit5') {
        width = 5;
    }
    if (e.code == 'Digit6') {
        width = 6;
    }
    if (e.code == 'Digit7') {
        width = 7;
    }
    if (e.code == 'Digit8') {
        width = 8;
    }
    if (e.code == 'Digit9') {
        width = 9;
    }
    if (e.code == 'Digit0') {
        width = 10;
    }
})