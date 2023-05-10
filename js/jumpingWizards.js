var c_width = 5;
var c_height = 5;
var canvas = document.getElementById("canvas");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var playerspeed = 0.5;
var playerMaxjump = 3.5;

gameover = 0;

x1 = 0;
y1 = 0;
vx1 = 0;
vy1 = 0;
vx1a = 0;
vx1d = 0;
jumpPower1 = 0;
jump1 = 0
firex1 = 0;
firey1 = 0;
fireball1Exist = 0;
fireball1 = 0;
direction1 = 0;
aboveLayer1 = [0, 0];
onGround1 = 0;
health1 = 100;

x2 = 96;
y2 = 0;
vx2 = 0;
vy2 = 0;
vx2a = 0;
vx2d = 0;
jumpPower2 = 0;
jump2 = 0
firex2 = 0;
firey2 = 0;
fireball2Exist = 0;
fireball2 = 0;
direction2 = 0;
aboveLayer2 = [0, 0];
onGround2 = 0;
health2 = 100;


function frame () { if (gameover == 0) {
    vx1 = vx1d - vx1a ;
    x1 = x1 + vx1;
    y1 = y1 + vy1;
    vx2 = vx2d - vx2a ;
    x2 = x2 + vx2;
    y2 = y2 + vy2;

    if (onGround1 == 0) {
        vy1 = vy1 - 9.8 * 0.02;
    }
    if (onGround2 == 0) {
        vy2 = vy2 - 9.8 * 0.02;
    }

    if (y1 < 0) {
        y1 = 0;
    }
    if (y2 < 0) {
        y2 = 0;
    }

    if (y1 == 0 && aboveLayer1[0] == 0 && aboveLayer1[1] == 0) {
        onGround1 = 1;
    }
    else {
        onGround1 = 0;
    }
    if (y2 == 0 && aboveLayer2[0] == 0 && aboveLayer2[1] == 0) {
        onGround2 = 1;
    }
    else {
        onGround2 = 0;
    }
    
    //check canvas box
    if (x1 < 0) {
        x1 = 0;
    }
    if (x1 > 96) {
        x1 = 96;
    }
    if (y1 > 92) {
        y1 = 92;
        vy1 = -vy1;
    }
    if (x2 < 0) {
        x2 = 0;
    }
    if (x2 > 96) {
        x2 = 96;
    }
    if (y2 > 92) {
        y2 = 92;
        vy2 = -vy2;
    }

    //jumping and platforms
    if(onGround1 == 1) {
        vy1 = 0; 
    }
    if (jump1 == 1 && jumpPower1 < playerMaxjump) {
        jumpPower1 += 0.5;
    }
    if(y1 > 30 && (x1 > 16 || x1 < 80)) {
        aboveLayer1[0] = 1;
    }
    if (aboveLayer1[0] == 1) {
        if (x1 < 16 || x1 > 80) {
            aboveLayer1[0] = 0;
        }
        if (y1 < 30) {
            y1 = 30;
            onGround1 = 1;
        }
        if (y1 == 30) {
            onGround1 = 1;
            vy1 = 0;
        }
        else {
            onGround1 = 0;
            
        }
    }
    if(y1 > 60 && (x1 < 24 || x1 > 72)) {
        aboveLayer1[1] = 2;
    }
    if (aboveLayer1[1] == 2) {
        if (x1 > 24 && x1 < 72) {
            aboveLayer1[1] = 0;
        }
        if (y1 < 60) {
            y1 = 60;
            onGround1 = 1;
        }
        if (y1 == 60) {
            onGround1 = 1;
            vy1 = 0;
        }
        else {
            onGround1 = 0;
            
        }
    }
    if(onGround2 == 1) {
        vy2 = 0; 
    }
    if (jump2 == 1 && jumpPower2 < playerMaxjump) {
        jumpPower2 += 0.5;
    }
    if(y2 > 30 && (x2 > 16 || x2 < 80)) {
        aboveLayer2[0] = 1;
    }
    if (aboveLayer2[0] == 1) {
        if (x2 < 16 || x2 > 80) {
            aboveLayer2[0] = 0;
        }
        if (y2 < 30) {
            y2 = 30;
            onGround2 = 1;
        }
        if (y2 == 30) {
            onGround2 = 1;
            vy2 = 0;
        }
        else {
            onGround2 = 0;
            
        }
    }
    if(y2 > 60 && (x2 < 24 || x2 > 72)) {
        aboveLayer2[1] = 2;
    }
    if (aboveLayer2[1] == 2) {
        if (x2 > 24 && x2 < 72) {
            aboveLayer2[1] = 0;
        }
        if (y2 < 60) {
            y2 = 60;
            onGround2 = 1;
        }
        if (y2 == 60) {
            onGround2 = 1;
            vy2 = 0;
        }
        else {
            onGround2 = 0;
            
        }
    }

    

    document.getElementById("player1").style.height = ((3 - jumpPower1 * 0.3)).toString(10) + "vw";
    document.getElementById("player1").style.left = (x1).toString(10) + "%";
    document.getElementById("player1").style.bottom = (y1).toString(10) + "%";

    document.getElementById("player2").style.height = ((3 - jumpPower2 * 0.3)).toString(10) + "vw";
    document.getElementById("player2").style.left = (x2).toString(10) + "%";
    document.getElementById("player2").style.bottom = (y2).toString(10) + "%";
    if (health1 > 0) {
        document.getElementById("health1").style.width = health1.toString(10) + "%";
    }
    else {
        alert("Player 2 wins!")
        document.getElementById("health1").style.width = "0%";
        gameover = 1;
    }
    if (health2 > 0) {
        document.getElementById("health2").style.width = health2.toString(10) + "%";
    }
    else {
        alert("Player 1 wins!")
        document.getElementById("health2").style.width = "0%";
        gameover = 1;
    }
    

    if (fireball1Exist == 1) {
        firex1 += direction1 * 2;
        fireball1.style.left = (firex1 + 1).toString(10) + "%";
        fireball1.style.bottom = (firey1 + 1.5).toString(10) + "%";
        if (firex1 > 97.5 || firex1 < - 1) {
            fireball1.remove();
            fireball1Exist = 0;
        }
    }

    if (fireball2Exist == 1) {
        firex2 += direction2 * 2;
        fireball2.style.left = (firex2 + 1).toString(10) + "%";
        fireball2.style.bottom = (firey2 + 1.5).toString(10) + "%";
        if (firex2 > 97.5 || firex2 < - 1) {
            fireball2.remove();
            fireball2Exist = 0;
        }
    }

    //check for fireballs
    if ((firex1 - firex2) < 2.5 && (firex1 - firex2) > -2.5 && (fireball1Exist) && (fireball2Exist) && (firey1 - firey2) < 5 && (firey2 - firey1) < 5) {
        fireball2.remove();
        fireball1.remove();
        fireball1Exist = 0;
        fireball2Exist = 0;
    }
    if ((x1 - firex2) < 2.5 && (x1 - firex2) > -2.5 && (fireball2Exist) && (y1 - firey2) < 5 && (firey2 - y1) < 5) {
        fireball2.remove();
        health1 -= 10;
        fireball2Exist = 0;
    }
    if ((x2 - firex1) < 2.5 && (x2 - firex1) > -2.5 && (fireball1Exist) && (y2 - firey1) < 5 && (y2 - firey1) > -5) {
        fireball1.remove();
        health2 -= 10;
        fireball1Exist = 0;
    }
    if ((x1 - x2) < 4 && (x1 - x2) > -4 && (y1 - y2) < 4 && (y1 - y2) > -4) {
        if (y1 > y2 && vy1 < 0) {
            health2 -= 20;
            vy1 = playerMaxjump;
        }
        if (y2 > y1 && vy2 < 0) {
            health1 -= 20;
            vy2 = playerMaxjump;
        }
    }
    console.log((firey2-y1))
    
    requestAnimationFrame(frame);
}}
window.onload = function() {
    frame();
};
window.addEventListener('keydown', function (e) {
        if (gameover == 0) {
        if (e.code == 'KeyW') {
            jump1 = 1;  
        }
        if (e.code == 'KeyA') {
            vx1a = playerspeed;
        }
        if (e.code == 'KeyD') {
            vx1d = playerspeed;
        }
        if ((e.code == 'KeyE' || e.code == 'KeyQ') && fireball1Exist == 0) {
            fireball1 = this.document.createElement("div");
            this.document.getElementById("canvas").appendChild(fireball1);
            fireball1.classList.add("magic");
            fireball1.classList.add("bluefire");
            fireball1Exist = 1;
            firex1 = x1;
            firey1 = y1;
            fireball1.style.left = (firex1 + 1).toString(10) + "%";
            fireball1.style.bottom = (firey1 + 1.5).toString(10) + "%";
            if (e.code == 'KeyE') {
                direction1 = 1;
            } else if (e.code == 'KeyQ') {
                direction1 = -1;
            }
        }

        if (e.code == 'KeyI') {
            jump2 = 1;  
        }
        if (e.code == 'KeyJ') {
            vx2a = playerspeed;
        }
        if (e.code == 'KeyL') {
            vx2d = playerspeed;
        }
        if ((e.code == 'KeyO' || e.code == 'KeyU') && fireball2Exist == 0) {
            fireball2 = this.document.createElement("div");
            this.document.getElementById("canvas").appendChild(fireball2);
            fireball2.classList.add("magic");
            fireball2Exist = 1;
            firex2 = x2;
            firey2 = y2;
            fireball2.style.left = (firex2 + 1).toString(10) + "%";
            fireball2.style.bottom = (firey2 + 1.5).toString(10) + "%";
            if (e.code == 'KeyO') {
                direction2 = 1;
            } else if (e.code == 'KeyU') {
                direction2 = -1;
            }
        }
    }
});

window.addEventListener('keyup', function (e) {
    if (gameover == 0) {
        if (e.code == 'KeyW' && onGround1 == 1) {
            jump1 = 0;
            vy1 = jumpPower1; 
            jumpPower1 = 0;       
        }
        else if (e.code == 'KeyW') {
            jump1 = 0;
            jumpPower1 = 0;         
        }
        if (e.code == 'KeyA') {
            vx1a = 0;
        }
        if (e.code == 'KeyD') {
            vx1d = 0;
        }

        if (e.code == 'KeyI' && onGround2 == 1) {
            jump2 = 0;
            vy2 = jumpPower2; 
            jumpPower2 = 0;       
        }
        else if (e.code == 'KeyI') {
            jump2 = 0;
            jumpPower2 = 0;         
        }
        if (e.code == 'KeyJ') {
            vx2a = 0;
        }
        if (e.code == 'KeyL') {
            vx2d = 0;
        }
    }
});

function reset() {
    gameover = 0;

    x1 = 0;
    y1 = 0;
    vx1 = 0;
    vy1 = 0;
    vx1a = 0;
    vx1d = 0;
    jumpPower1 = 0;
    jump1 = 0
    firex1 = 0;
    firey1 = 0;
    fireball1Exist = 0;
    fireball1 = 0;
    direction1 = 0;
    aboveLayer1 = [0, 0];
    onGround1 = 0;
    health1 = 100;

    x2 = 96;
    y2 = 0;
    vx2 = 0;
    vy2 = 0;
    vx2a = 0;
    vx2d = 0;
    jumpPower2 = 0;
    jump2 = 0
    firex2 = 0;
    firey2 = 0;
    fireball2Exist = 0;
    fireball2 = 0;
    direction2 = 0;
    aboveLayer2 = [0, 0];
    onGround2 = 0;
    health2 = 100;

    frame();
}
