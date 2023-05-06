var mineNo = 12;
field = [
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
];
mine = [
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
];
flag = [
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
];
currentLayer = 2;
bombdetector = 0;
flagMode = 0; //flag mode
flags = 0;
gameover = 0;

const land = {
    nothing: 0,
    mine: 1,
    cleared: 2
}

function always() {
    winningDetect();
    display();
    showLayer();
    showFlags();
    displayFlag();
    displayClear();
    if (bombdetector == 1) {
        displayBomb();
    }
}

window.onload = function() {
    randomize();
    fieldInfo();
    always();
};

function reset() {
    //remove any displayed red
    bombdetector = 0;
    gameover = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            buttonID(i, j).classList.remove("redMine");
        }
    } 
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            for (var k = 0; k < 5; k++){
                flag[i][j][k] = 0;
            }
        }
    }
    flags = 0;
    randomize();
    always();
    
}

window.addEventListener('keydown', 
    function (e) {
        keypressed = `${e.key}`;
        if (keypressed == 'q') {
            layerFoward();
        }
        else if (keypressed == 'w') {
            layerBackward();
        }
        else if (keypressed == 'f') {
            flagToggle();
        }
        else if (keypressed == 'r') {
            reset();
        }
    }
    , false);

function winningDetect() {
    win = 1;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            for (var k = 0; k < 5; k++){
                if (mine[i][j][k] == land.nothing) {
                    win = 0;
                }
            }
        }
    }
    if (win == 1 && gameover == 0) {
        alert("Congratulations! You have successfully Dissected Joe's landmine! You win!");
        gameover = 1;
    }
}

function clicked(x, y) {
    if (gameover == 0) {
        if (flagMode == 1) {
            if (flag[currentLayer][x][y] == 0) {
                flag[currentLayer][x][y] = 1;
                flags++;
            }
            else {
                flag[currentLayer][x][y] = 0;
                flags--;
            }
        }
        else if (flag[currentLayer][x][y] == 1) {
        }
        else if (mine[currentLayer][x][y] == land.mine) {
            alert("You got blown up by JOE'S LANDMINE! game over!");
            bombdetector = 1;
            gameover = 1;
        }
        else {
            splash(currentLayer, x, y);
            for(var i = 0; i < 12; i++) {
                spread();
            }
        }
    }
    always();
}

function splash(x, y, z) {
    mine[x][y][z] = land.cleared;
    
    if (field[x][y][z] == 0) {
        if (x > 0) {
            mine[x - 1][y][z] = land.cleared;
        }
        if (x < 4) {
            mine[x + 1][y][z] = land.cleared;
        }
        if (y > 0) {
            mine[x][y - 1][z] = land.cleared;
        }
        if (y < 4) {
            mine[x][y + 1][z] = land.cleared;
        }
        if (z > 0) {
            mine[x][y][z - 1] = land.cleared;
        }
        if (z < 4) {
            mine[x][y][z + 1] = land.cleared;
        }
    }
}

function spread() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            for (var k = 0; k < 5; k++){
                if(mine[i][j][k] == land.cleared) {
                    splash(i,j,k);
                }
            }
        }
    }
}

function flagToggle() {
    if (flagMode == 0) {
        flagMode = 1;
        flagbtn.classList.add("yellowFlag");

    } 
    else {
        flagMode = 0;
        flagbtn.classList.remove("yellowFlag");
    }
    always();
}

function show() {
    b11.classList.add("show");
}

function randomize() {
    //clear mines
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            for (var k = 0; k < 5; k++){
                //place mine when criterias met
                mine[i][j][k] = land.nothing;
            }
        }
    }
    //deploy mines
    for (var n = 0; n < mineNo; n++){
        let location = Math.floor(Math.random() * (125 - n))
        //checking through each cell in array
        for (var i = 0; i < 5; i++) {
            
            for (var j = 0; j < 5; j++){
                for (var k = 0; k < 5; k++){
                    //place mine when criterias met
                    if (mine[i][j][k] == land.nothing && location == 0) {
                        mine[i][j][k] = land.mine;
                        location--;
                    }
                    else if (mine[i][j][k] == land.mine) {
                    }
                    else {
                        location--;
                    }                    
                }
            }
            
        }
    } 
    fieldInfo(); 
}

function fieldInfo() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            for (var k = 0; k < 5; k++){
                field[i][j][k] = cellInfo(i, j, k);
            }
        }
    }
}

function cellInfo(x, y, z) {
    bombs = 0;
    for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++){
            for (var k = z - 1; k <= z + 1; k++){
                if (i >= 0 && i <= 4 && j >= 0 && j <= 4 && k >= 0 && k <= 4){
                    bombs += mine[i][j][k];
                }
            }
        }
    }
    return bombs;
}

function layerFoward() {
    if(currentLayer == 0) {
    }
    else {
        currentLayer--;
    }
    always();
}

function layerBackward() {
    if(currentLayer == 4) {
    }
    else {
        currentLayer++;
    }

    always();
}

//toggles bombdetector and diplays
function bombLight() {
    if (bombdetector == 0) {
        bombdetector = 1;
        displayBomb();
    }
    else {
        bombdetector = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                buttonID(i, j).classList.remove("redMine");
            }
        }  
    }
}
function displayClear() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            if (mine[currentLayer][i][j] == land.cleared) {buttonID(i, j).classList.add("blueReveal");}
            else {buttonID(i, j).classList.remove("blueReveal");}
        }
    } 
}
function displayFlag() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            if (flag[currentLayer][i][j] == 1) {buttonID(i, j).classList.add("yellowFlag");}
            else {buttonID(i, j).classList.remove("yellowFlag");}
        }
    }  
}
function displayBomb() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            if (mine[currentLayer][i][j] == 1) {buttonID(i, j).classList.add("redMine");}
            else {buttonID(i, j).classList.remove("redMine");}
        }
    }    
}
function buttonID(x, y) {
    if (x == 0) {
        switch (y) {
            case 0:
                return b11;
                break;
            case 1:
                return b12;
                break;
            case 2:
                return b13;
                break;
            case 3:
                return b14;
                break;
            case 4:
                return b15;
                break;
        }
    }
    if (x == 1) {
        switch (y) {
            case 0:
                return b21;
                break;
            case 1:
                return b22;
                break;
            case 2:
                return b23;
                break;
            case 3:
                return b24;
                break;
            case 4:
                return b25;
                break;
        }
    }
    if (x == 2) {
        switch (y) {
            case 0:
                return b31;
                break;
            case 1:
                return b32;
                break;
            case 2:
                return b33;
                break;
            case 3:
                return b34;
                break;
            case 4:
                return b35;
                break;
        }
    }
    if (x == 3) {
        switch (y) {
            case 0:
                return b41;
                break;
            case 1:
                return b42;
                break;
            case 2:
                return b43;
                break;
            case 3:
                return b44;
                break;
            case 4:
                return b45;
                break;
        }
    }
    if (x == 4) {
        switch (y) {
            case 0:
                return b51;
                break;
            case 1:
                return b52;
                break;
            case 2:
                return b53;
                break;
            case 3:
                return b54;
                break;
            case 4:
                return b55;
                break;
        }
    }
    else{
        return 0;
    }
}

function showFlags() {
    document.getElementById("flagCounter").innerHTML = "flags: " + (mineNo - flags).toString(10)
}
function showLayer() {
    document.getElementById("layer").innerHTML = "layer: " + (currentLayer + 1).toString(10)
}

//trust me, do not open this
function display() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++){
            if(field[currentLayer][i][j] == 0) {
                document.getElementById("b" + (i + 1).toString(10) + (j + 1).toString(10)).innerHTML = "";
            }
            else{
                document.getElementById("b" + (i + 1).toString(10) + (j + 1).toString(10)).innerHTML = field[currentLayer][i][j].toString(10);
            }
        }
    }
}