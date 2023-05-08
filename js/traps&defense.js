var c_width = 5;
var c_height = 5;

x1 = 0;
y1 = 0;
x2 = 10;
y2 = 10;
vx1 = 0;
vy1 = 0;

function frame () {
    if ((x2 - x1) < c_width) {
        document.createElement(player)
    }
    x1 = x1 + vx1;
    y1 = y1 + vy1;
    requestAnimationFrame(frame);
    console.log("x: " + x1 + " y: " + y1)
}
window.onload = function() {
    frame();
};
window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW') {
        vy1 = 1;
    }
    if (e.code == 'KeyA') {
        vx1 = - 1;
    }
    if (e.code == 'KeyS') {
        vy1 = - 1;
    }
    if (e.code == 'KeyD') {
        vx1 = 1;
    }
});

window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyW') {
        vy1 = 0;
    }
    if (e.code == 'KeyA') {
        vx1 = 0;
    }
    if (e.code == 'KeyS') {
        vy1 = 0;
    }
    if (e.code == 'KeyD') {
        vx1 = 0;
    }
});


