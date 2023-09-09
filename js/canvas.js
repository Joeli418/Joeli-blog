//The following code is written heavily based on the video linked below
//https://www.youtube.com/watch?v=3GqUM4mEYKA&t=356s

//canvas setting/////////////////////////
canvas_list = ["#canvas1", "#canvas2", "#canvas3"]
const NOC = 3;
inCan = new Array(NOC);
canvas = new Array(NOC);
ctx = new Array(NOC);
/////////////////////////////////////////
//below is the website I learnt about new Array
//https://www.freecodecamp.org/news/how-to-create-an-array-in-javascript/#:~:text=
//Moby%20Dick%22%5D%3B-,Another%20way%20to%20create%20an%20array%20is%20to%20use%20
//the,length%20of%203%20empty%20slots.

mobile = true;
width = 10;
color = 10;
sidebars = false;
eraser = false;

const very_small_value = 0.01;


window.addEventListener("load", LoadNResize);

window.addEventListener("resize", LoadNResize);

function stopScroll() {
    //document.body.classList.add("noPhoneScroll");
}

function inCanvas(i) {
    //document.body.classList.add("noPhoneScroll");
    inCan[i - 1] = 1;
}

function outCanvas(i) {
    //document.body.classList.remove("noPhoneScroll");
    inCan[i - 1] = 0;
}

function LoadNResize () {
    for (i = 0; i < NOC; i++) {
        canvas = document.querySelector(canvas_list[i]);
        (ctx[i]) = canvas.getContext('2d');

        //Resizing 
        canvas.height = 2 * window.innerHeight / 3;
        canvas.width = 2 * window.innerWidth / 3;  
        if (eraser ==  true) {
            (ctx[i]).strokeStyle = "white"
        }
        else {
            (ctx[i]).strokeStyle = colorString(color);
        }
        (ctx[i]).lineWidth = width;
        (ctx[i]).lineCap = "round";

    }    
    setWidth(width);
    setColor(color);
}

//variables
let drawing = false;

function startPosition (e) {
    document.getElementById("draw").classList.add('btnuActive');
    drawing = true;
    draw(e);

    //a very cheesy method to get over it
    //basically you need to have some offset for stroke to draw sth
    /*
    if(!mobile){
        for (i = 0; i < NOC; i++) {
            (ctx[i]).lineTo(e.offsetX, e.offsetY + very_small_value); 
            (ctx[i]).stroke();
        }
    }
    */
   
    
    
}

function endPosition () {
    drawing = false;
    for (i = 0; i < NOC; i++) {
        (ctx[i]).beginPath();
    }
    document.getElementById("draw").classList.remove('btnuActive');
}

function draw (e) {
    for (let j = 0; j < NOC; j++) {
    if (drawing && mobile && inCan[j]) {
        if (eraser ==  true) {
            (ctx[j]).strokeStyle = "white";
            (ctx[j]).lineWidth = width * width;
        }
        else {
            (ctx[j]).strokeStyle = colorString(color);
            (ctx[j]).lineWidth = width;
        }
        
        (ctx[j]).lineCap = "round";

        //This is the video in which I've learnt i have to use e.offsetX
        //https://www.youtube.com/watch?v=y84tBZo8GFo&t=220s
        (ctx[j]).lineTo(e.offsetX, e.offsetY);
        (ctx[j]).stroke();
        (ctx[j]).beginPath();
        (ctx[j]).moveTo(e.offsetX, e.offsetY);
        
    }
    }
}

window.addEventListener("mousedown", startPosition);
window.addEventListener("mouseup", endPosition);
window.addEventListener("mousemove", draw);


window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyD') {
        endPosition();
    }
    if (e.code == 'KeyC') {
        LoadNResize();
    }
    
})

window.addEventListener('keydown', function (e) {
    if (e.code == 'Digit1') {
        setWidth(1);
    }
    if (e.code == 'Digit2') {
        setWidth(2);
    }
    if (e.code == 'Digit3') {
        setWidth(3);
    }
    if (e.code == 'Digit4') {
        setWidth(4);
    }
    if (e.code == 'Digit5') {
        setWidth(5);
    }
    if (e.code == 'Digit6') {
        setWidth(6);
    }
    if (e.code == 'Digit7') {
        setWidth(7);
    }
    if (e.code == 'Digit8') {
        setWidth(8);
    }
    if (e.code == 'Digit9') {
        setWidth(9);
    }
    if (e.code == 'Digit0') {
        setWidth(10);
    }

    if (e.code == 'KeyQ') {
        setColor(1);
    }
    if (e.code == 'KeyW') {
        setColor(2);
    }
    if (e.code == 'KeyE') {
        setColor(3);
    }
    if (e.code == 'KeyR') {
        setColor(4);
    }
    if (e.code == 'KeyT') {
        setColor(5);
    }
    if (e.code == 'KeyY') {
        setColor(6);
    }
    if (e.code == 'KeyU') {
        setColor(7);
    }
    if (e.code == 'KeyI') {
        setColor(8);
    }
    if (e.code == 'KeyO') {
        setColor(9);
    }
    if (e.code == 'KeyP') {
        setColor(10);
    }

    //universal buttons
    if (e.code == 'KeyD') {
        startPosition();
    }
    if (e.code == 'KeyA') {
        showToolbar();
    }
    if (e.code == 'KeyS') {
        eraserToggle();
    }
})

//https://www.w3schools.com/cssref/pr_class_display.php
function showToolbar() {
    if (sidebars == true) {
        document.getElementById("toolBar").style.display = "none";
        sidebars = false;
    }
    else {
        document.getElementById("toolBar").style.display = "inline-block";
        sidebars = true;
    }
}

function eraserToggle() {
    if (eraser == true) {
        eraser = false;
        document.getElementById("eraser").classList.remove('btnuActive');
    }
    else {
        eraser = true;
        document.getElementById("eraser").classList.add('btnuActive');
    }
}

//https://www.w3schools.com/jsref/prop_element_classlist.asp
function setWidth(i) {
    document.getElementById(btnW(width)).classList.remove('btncActive');
    width = i;
    document.getElementById(btnW(i)).classList.add('btncActive');
}

function setColor(i) {
    document.getElementById(btnC(color)).classList.remove('btncColorActive');
    color = i;
    document.getElementById(btnC(i)).classList.add('btncColorActive');
}

function btnW(i) {
    switch (i) {
        case 1: return "btn1"; break;
        case 2: return "btn2"; break;
        case 3: return "btn3"; break;
        case 4: return "btn4"; break;
        case 5: return "btn5"; break;
        case 6: return "btn6"; break;
        case 7: return "btn7"; break;
        case 8: return "btn8"; break;
        case 9: return "btn9"; break;
        case 10: return "btn10"; break;
    }
}

function btnC(i) {
    switch (i) {
        case 1: return "col1"; break;
        case 2: return "col2"; break;
        case 3: return "col3"; break;
        case 4: return "col4"; break;
        case 5: return "col5"; break;
        case 6: return "col6"; break;
        case 7: return "col7"; break;
        case 8: return "col8"; break;
        case 9: return "col9"; break;
        case 10: return "col10"; break;
    }
}

function colorString(i) {
    switch (i) {
        case 1: return "red"; break;
        case 2: return "orange"; break;
        case 3: return "yellow"; break;
        case 4: return "green"; break;
        case 5: return "lime"; break;
        case 6: return "cyan"; break;
        case 7: return "blue"; break;
        case 8: return "purple"; break;
        case 9: return "magenta"; break;
        case 10: return "black"; break;
    }
}
