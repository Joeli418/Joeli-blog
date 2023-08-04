n = [
    document.getElementById("piano_C3"),
    document.getElementById("piano_Cs3"),
    document.getElementById("piano_D3"),
    document.getElementById("piano_Ds3"),
    document.getElementById("piano_E3"),
    document.getElementById("piano_F3"),
    document.getElementById("piano_Fs3"),
    document.getElementById("piano_G3"),
    document.getElementById("piano_Gs3"),
    document.getElementById("piano_A3"),
    document.getElementById("piano_As3"),
    document.getElementById("piano_B3"),
    document.getElementById("piano_C4"),
    document.getElementById("piano_Cs4"),
    document.getElementById("piano_D4"),
    document.getElementById("piano_Ds4"),
    document.getElementById("piano_E4"),
    document.getElementById("piano_F4"),
    document.getElementById("piano_Fs4"),
    document.getElementById("piano_G4"),
    document.getElementById("piano_Gs4"),
    document.getElementById("piano_A4"),
    document.getElementById("piano_As4"),
    document.getElementById("piano_B4"),
    document.getElementById("piano_C5"),
    document.getElementById("piano_Cs5"),
    document.getElementById("piano_D5"),
    document.getElementById("piano_Ds5"),
    document.getElementById("piano_E5"),
    document.getElementById("piano_F5"),
    document.getElementById("piano_Fs5"),
    document.getElementById("piano_G5"),
    document.getElementById("piano_Gs5"),
    document.getElementById("piano_A5"),
    document.getElementById("piano_As5"),
    document.getElementById("piano_B5"),
    document.getElementById("piano_C6"),
    document.getElementById("piano_Cs6"),
    document.getElementById("piano_D6"),
    document.getElementById("piano_Ds6"),
    document.getElementById("piano_E6"),
    document.getElementById("piano_F6"),
    document.getElementById("piano_Fs6"),
    document.getElementById("piano_G6"),
    document.getElementById("piano_Gs6"),
    document.getElementById("piano_A6"),
    document.getElementById("piano_As6"),
    document.getElementById("piano_B6"),
    document.getElementById("piano_C7"),
    document.getElementById("piano_Cs7"),
    document.getElementById("piano_D7"),
    document.getElementById("piano_Ds7"),
    document.getElementById("piano_E7")]

note_name = [
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
    "C6",
    "C#6",
    "D6",
    "D#6",
    "E6",
    "F6",
    "F#6",
    "G6",
    "G#6",
    "A6",
    "A#6",
    "B6",
    "C7",
    "C#7",
    "D7",
    "D#7",
    "E7"]

var rt = 0;
var lt = 0;
var shifter = 0;
var display_color_left = "cyan";
var display_color_right = "cyan";

window.onkeydown = function(e) {
    return e.keyCode !== 32;
};

window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyZ') {
        n[0 + lt * 12 + shifter].pause(); 
        n[0 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonZ").style.color = "#c0c0c0";
        document.getElementById("letterZ").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyX') {
        n[1 + lt * 12 + shifter].pause(); 
        n[1 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonX").style.color = "#c0c0c0";
        document.getElementById("letterX").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyC') {
        n[2 + lt * 12 + shifter].pause(); 
        n[2 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonC").style.color = "#c0c0c0";
        document.getElementById("letterC").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyV') {
        n[3 + lt * 12 + shifter].pause(); 
        n[3 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonV").style.color = "#c0c0c0";
        document.getElementById("letterV").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyB') {
        n[4 + lt * 12 + shifter].pause(); 
        n[4 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonB").style.color = "#c0c0c0";
        document.getElementById("letterB").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyA') {
        n[4 + lt * 12 + shifter].pause(); 
        n[4 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonA").style.color = "#c0c0c0";
        document.getElementById("letterA").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyS') {
        n[5 + lt * 12 + shifter].pause(); 
        n[5 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonS").style.color = "#c0c0c0";
        document.getElementById("letterS").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyD') {
        n[6 + lt * 12 + shifter].pause(); 
        n[6 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonD").style.color = "#c0c0c0";
        document.getElementById("letterD").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyF') {
        n[7 + lt * 12 + shifter].pause(); 
        n[7 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonF").style.color = "#c0c0c0";
        document.getElementById("letterF").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyG') {
        n[8 + lt * 12 + shifter].pause(); 
        n[8 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonG").style.color = "#c0c0c0";
        document.getElementById("letterG").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyQ') {
        n[8 + lt * 12 + shifter].pause(); 
        n[8 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonQ").style.color = "#c0c0c0";
        document.getElementById("letterQ").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyW') {
        n[9 + lt * 12 + shifter].pause(); 
        n[9 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonW").style.color = "#c0c0c0";
        document.getElementById("letterW").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyE') {
        n[10 + lt * 12 + shifter].pause(); 
        n[10 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonE").style.color = "#c0c0c0";
        document.getElementById("letterE").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyR') {
        n[11 + lt * 12 + shifter].pause(); 
        n[11 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonR").style.color = "#c0c0c0";
        document.getElementById("letterR").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyT') {
        n[12 + lt * 12 + shifter].pause(); 
        n[12 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonT").style.color = "#c0c0c0";
        document.getElementById("letterT").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit1') {
        n[12 + lt * 12 + shifter].pause(); 
        n[12 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("button1").style.color = "#c0c0c0";
        document.getElementById("letter1").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit2') {
        n[13 + lt * 12 + shifter].pause(); 
        n[13 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("button2").style.color = "#c0c0c0";
        document.getElementById("letter2").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit3') {
        n[14 + lt * 12 + shifter].pause(); 
        n[14 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("button3").style.color = "#c0c0c0";
        document.getElementById("letter3").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit4') {
        n[15 + lt * 12 + shifter].pause(); 
        n[15 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("button4").style.color = "#c0c0c0";
        document.getElementById("letter4").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit5') {
        n[16 + lt * 12 + shifter].pause(); 
        n[16 + lt * 12 + shifter].currentTime = 0;
        document.getElementById("button5").style.color = "#c0c0c0";
        document.getElementById("letter5").style.color = "#c0c0c0";
    }
    //---------------------------------------right side
    if (e.code == 'KeyN') {
        n[12 + rt * 12 + shifter].pause(); 
        n[12 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonN").style.color = "#c0c0c0";
        document.getElementById("letterN").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyM') {
        n[13 + rt * 12 + shifter].pause(); 
        n[13 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonM").style.color = "#c0c0c0";
        document.getElementById("letterM").style.color = "#c0c0c0";
    }
    if (e.code == 'Comma') {
        n[14 + rt * 12 + shifter].pause(); 
        n[14 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonCom").style.color = "#c0c0c0";
        document.getElementById("letterCom").style.color = "#c0c0c0";
    }
    if (e.code == 'Period') {
        n[15 + rt * 12 + shifter].pause(); 
        n[15 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonPer").style.color = "#c0c0c0";
        document.getElementById("letterPer").style.color = "#c0c0c0";
    }
    if (e.code == 'Slash') {
        n[16 + rt * 12 + shifter].pause(); 
        n[16 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonSlas").style.color = "#c0c0c0";
        document.getElementById("letterSlas").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyH') {
        n[16 + rt * 12 + shifter].pause(); 
        n[16 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonH").style.color = "#c0c0c0";
        document.getElementById("letterH").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyJ') {
        n[17 + rt * 12 + shifter].pause(); 
        n[17 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonJ").style.color = "#c0c0c0";
        document.getElementById("letterJ").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyK') {
        n[18 + rt * 12 + shifter].pause(); 
        n[18 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonK").style.color = "#c0c0c0";
        document.getElementById("letterK").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyL') {
        n[19 + rt * 12 + shifter].pause(); 
        n[19 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonL").style.color = "#c0c0c0";
        document.getElementById("letterL").style.color = "#c0c0c0";
    }
    if (e.code == 'Semicolon') {
        n[20 + rt * 12 + shifter].pause(); 
        n[20 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonSemi").style.color = "#c0c0c0";
        document.getElementById("letterSemi").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyY') {
        n[20 + rt * 12 + shifter].pause(); 
        n[20 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonY").style.color = "#c0c0c0";
        document.getElementById("letterY").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyU') {
        n[21 + rt * 12 + shifter].pause(); 
        n[21 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonU").style.color = "#c0c0c0";
        document.getElementById("letterU").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyI') {
        n[22 + rt * 12 + shifter].pause(); 
        n[22 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonI").style.color = "#c0c0c0";
        document.getElementById("letterI").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyO') {
        n[23 + rt * 12 + shifter].pause(); 
        n[23 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonO").style.color = "#c0c0c0";
        document.getElementById("letterO").style.color = "#c0c0c0";
    }
    if (e.code == 'KeyP') {
        n[24 + rt * 12 + shifter].pause(); 
        n[24 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("buttonP").style.color = "#c0c0c0";
        document.getElementById("letterP").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit6') {
        n[24 + rt * 12 + shifter].pause(); 
        n[24 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("button6").style.color = "#c0c0c0";
        document.getElementById("letter6").style.color = "#c0c0c0";
    }

    if (e.code == 'Digit7') {
        n[25 + rt * 12 + shifter].pause(); 
        n[25 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("button7").style.color = "#c0c0c0";
        document.getElementById("letter7").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit8') {
        n[26 + rt * 12 + shifter].pause(); 
        n[26 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("button8").style.color = "#c0c0c0";
        document.getElementById("letter8").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit9') {
        n[27 + rt * 12 + shifter].pause(); 
        n[27 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("button9").style.color = "#c0c0c0";
        document.getElementById("letter9").style.color = "#c0c0c0";
    }
    if (e.code == 'Digit0') {
        n[28 + rt * 12 + shifter].pause(); 
        n[28 + rt * 12 + shifter].currentTime = 0;
        document.getElementById("button0").style.color = "#c0c0c0";
        document.getElementById("letter0").style.color = "#c0c0c0";
    }
    //-------------------- mischellanious
    if (e.code == 'Space') {
        if (rt == 1) {
            rt = 0;
            document.getElementById("space").style.backgroundColor = "#0442c7";
            display_color_right = "cyan";
        }
        else {
            rt = 1;
            document.getElementById("space").style.backgroundColor = "rgb(202, 0, 88)";
            display_color_right = "rgb(202, 0, 88)";
        }
        screen_update();
        return false;
    }
    if (e.code == 'Backquote') {
        if (lt == 1) {
            lt = 0;
            document.getElementById("backslash").style.backgroundColor = "#0442c7";
            display_color_left = "cyan";
        }
        else {
            lt = 1;
            document.getElementById("backslash").style.backgroundColor = "rgb(202, 0, 88)";
            display_color_left = "rgb(202, 0, 88)";
        }
        screen_update();
    }
    if (e.code == 'BracketLeft') {
        if (shifter > 0) {
            shifter--;
        }
        screen_update();
    }
    if (e.code == 'BracketRight') {
        if (shifter < 12) {
            shifter++;
        }
        screen_update();
    }
});

window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyZ') {
        n[0 + lt * 12 + shifter].play(); 
        document.getElementById("buttonZ").style.color = display_color_left;
        document.getElementById("letterZ").style.color = display_color_left; 
    }
    if (e.code == 'KeyX') {
        n[1 + lt * 12 + shifter].play(); 
        document.getElementById("buttonX").style.color = display_color_left;
        document.getElementById("letterX").style.color = display_color_left; 
    }
    if (e.code == 'KeyC') {
        n[2 + lt * 12 + shifter].play(); 
        document.getElementById("buttonC").style.color = display_color_left;
        document.getElementById("letterC").style.color = display_color_left; 
    }
    if (e.code == 'KeyV') {
        n[3 + lt * 12 + shifter].play(); 
        document.getElementById("buttonV").style.color = display_color_left;
        document.getElementById("letterV").style.color = display_color_left; 
    }
    if (e.code == 'KeyB') {
        n[4 + lt * 12 + shifter].play(); 
        document.getElementById("buttonB").style.color = display_color_left;
        document.getElementById("letterB").style.color = display_color_left; 
    }
    if (e.code == 'KeyA') {
        n[4 + lt * 12 + shifter].play(); 
        document.getElementById("buttonA").style.color = display_color_left;
        document.getElementById("letterA").style.color = display_color_left; 
    }
    if (e.code == 'KeyS') {
        n[5 + lt * 12 + shifter].play(); 
        document.getElementById("buttonS").style.color = display_color_left;
        document.getElementById("letterS").style.color = display_color_left; 
    }
    if (e.code == 'KeyD') {
        n[6 + lt * 12 + shifter].play(); 
        document.getElementById("buttonD").style.color = display_color_left;
        document.getElementById("letterD").style.color = display_color_left; 
    }
    if (e.code == 'KeyF') {
        n[7 + lt * 12 + shifter].play(); 
        document.getElementById("buttonF").style.color = display_color_left;
        document.getElementById("letterF").style.color = display_color_left; 
    }
    if (e.code == 'KeyG') {
        n[8 + lt * 12 + shifter].play(); 
        document.getElementById("buttonG").style.color = display_color_left;
        document.getElementById("letterG").style.color = display_color_left; 
    }
    if (e.code == 'KeyQ') {
        n[8 + lt * 12 + shifter].play(); 
        document.getElementById("buttonQ").style.color = display_color_left;
        document.getElementById("letterQ").style.color = display_color_left; 
    }
    if (e.code == 'KeyW') {
        n[9 + lt * 12 + shifter].play(); 
        document.getElementById("buttonW").style.color = display_color_left;
        document.getElementById("letterW").style.color = display_color_left; 
    }
    if (e.code == 'KeyE') {
        n[10 + lt * 12 + shifter].play(); 
        document.getElementById("buttonE").style.color = display_color_left;
        document.getElementById("letterE").style.color = display_color_left; 
    }
    if (e.code == 'KeyR') {
        n[11 + lt * 12 + shifter].play(); 
        document.getElementById("buttonR").style.color = display_color_left;
        document.getElementById("letterR").style.color = display_color_left; 
    }
    if (e.code == 'KeyT') {
        n[12 + lt * 12 + shifter].play(); 
        document.getElementById("buttonT").style.color = display_color_left;
        document.getElementById("letterT").style.color = display_color_left; 
    }
    if (e.code == 'Digit1') {
        n[12 + lt * 12 + shifter].play(); 
        document.getElementById("button1").style.color = display_color_left;
        document.getElementById("letter1").style.color = display_color_left; 
    }
    if (e.code == 'Digit2') {
        n[13 + lt * 12 + shifter].play(); 
        document.getElementById("button2").style.color = display_color_left;
        document.getElementById("letter2").style.color = display_color_left; 
    }
    if (e.code == 'Digit3') {
        n[14 + lt * 12 + shifter].play(); 
        document.getElementById("button3").style.color = display_color_left;
        document.getElementById("letter3").style.color = display_color_left; 
    }
    if (e.code == 'Digit4') {
        n[15 + lt * 12 + shifter].play(); 
        document.getElementById("button4").style.color = display_color_left;
        document.getElementById("letter4").style.color = display_color_left; 
    }
    if (e.code == 'Digit5') {
        n[16 + lt * 12 + shifter].play(); 
        document.getElementById("button5").style.color = display_color_left;
        document.getElementById("letter5").style.color = display_color_left; 
    }
    //-------------------------------------rightside
    if (e.code == 'KeyN') {
        n[12 + rt * 12 + shifter].play(); 
        document.getElementById("buttonN").style.color = display_color_right;
        document.getElementById("letterN").style.color = display_color_right; 
    }
    if (e.code == 'KeyM') {
        n[13 + rt * 12 + shifter].play(); 
        document.getElementById("buttonM").style.color = display_color_right;
        document.getElementById("letterM").style.color = display_color_right; 
    }
    if (e.code == 'Comma') {
        n[14 + rt * 12 + shifter].play(); 
        document.getElementById("buttonCom").style.color = display_color_right;
        document.getElementById("letterCom").style.color = display_color_right; 
    }
    if (e.code == 'Period') {
        n[15 + rt * 12 + shifter].play(); 
        document.getElementById("buttonPer").style.color = display_color_right;
        document.getElementById("letterPer").style.color = display_color_right; 
    }
    if (e.code == 'Slash') {
        n[16 + rt * 12 + shifter].play(); 
        document.getElementById("buttonSlas").style.color = display_color_right;
        document.getElementById("letterSlas").style.color = display_color_right; 
    }
    if (e.code == 'KeyH') {
        n[16 + rt * 12 + shifter].play(); 
        document.getElementById("buttonH").style.color = display_color_right;
        document.getElementById("letterH").style.color = display_color_right; 
    }
    if (e.code == 'KeyJ') {
        n[17 + rt * 12 + shifter].play(); 
        document.getElementById("buttonJ").style.color = display_color_right;
        document.getElementById("letterJ").style.color = display_color_right; 
    }
    if (e.code == 'KeyK') {
        n[18 + rt * 12 + shifter].play(); 
        document.getElementById("buttonK").style.color = display_color_right;
        document.getElementById("letterK").style.color = display_color_right; 
    }
    if (e.code == 'KeyL') {
        n[19 + rt * 12 + shifter].play(); 
        document.getElementById("buttonL").style.color = display_color_right;
        document.getElementById("letterL").style.color = display_color_right; 
    }
    if (e.code == 'Semicolon') {
        n[20 + rt * 12 + shifter].play(); 
        document.getElementById("buttonSemi").style.color = display_color_right;
        document.getElementById("letterSemi").style.color = display_color_right; 
    }
    if (e.code == 'KeyY') {
        n[20 + rt * 12 + shifter].play(); 
        document.getElementById("buttonY").style.color = display_color_right;
        document.getElementById("letterY").style.color = display_color_right; 
    }
    if (e.code == 'KeyU') {
        n[21 + rt * 12 + shifter].play(); 
        document.getElementById("buttonU").style.color = display_color_right;
        document.getElementById("letterU").style.color = display_color_right; 
    }
    if (e.code == 'KeyI') {
        n[22 + rt * 12 + shifter].play(); 
        document.getElementById("buttonI").style.color = display_color_right;
        document.getElementById("letterI").style.color = display_color_right; 
    }
    if (e.code == 'KeyO') {
        n[23 + rt * 12 + shifter].play(); 
        document.getElementById("buttonO").style.color = display_color_right;
        document.getElementById("letterO").style.color = display_color_right; 
    }
    if (e.code == 'KeyP') {
        n[24 + rt * 12 + shifter].play(); 
        document.getElementById("buttonP").style.color = display_color_right;
        document.getElementById("letterP").style.color = display_color_right; 
    }
    if (e.code == 'Digit6') {
        n[24 + rt * 12 + shifter].play(); 
        document.getElementById("button6").style.color = display_color_right;
        document.getElementById("letter6").style.color = display_color_right; 
    }
    if (e.code == 'Digit7') {
        n[25 + rt * 12 + shifter].play(); 
        document.getElementById("button7").style.color = display_color_right;
        document.getElementById("letter7").style.color = display_color_right; 
    }
    if (e.code == 'Digit8') {
        n[26 + rt * 12 + shifter].play(); 
        document.getElementById("button8").style.color = display_color_right;
        document.getElementById("letter8").style.color = display_color_right;
    }
    if (e.code == 'Digit9') {
        n[27 + rt * 12 + shifter].play();
        document.getElementById("button9").style.color = display_color_right;
        document.getElementById("letter9").style.color = display_color_right; 
    }
    if (e.code == 'Digit0') {
        n[28 + rt * 12 + shifter].play(); 
        document.getElementById("button0").style.color = display_color_right;
        document.getElementById("letter0").style.color = display_color_right; 
    }
});

function screen_update () {
    document.getElementById("button1").innerHTML = note_name[12 + lt * 12 + shifter];
    document.getElementById("button2").innerHTML = note_name[13 + lt * 12 + shifter];
    document.getElementById("button3").innerHTML = note_name[14 + lt * 12 + shifter];
    document.getElementById("button4").innerHTML = note_name[15 + lt * 12 + shifter];
    document.getElementById("button5").innerHTML = note_name[16 + lt * 12 + shifter];

    document.getElementById("button6").innerHTML = note_name[24 + rt * 12 + shifter];
    document.getElementById("button7").innerHTML = note_name[25 + rt * 12 + shifter];
    document.getElementById("button8").innerHTML = note_name[26 + rt * 12 + shifter];
    document.getElementById("button9").innerHTML = note_name[27 + rt * 12 + shifter];
    document.getElementById("button0").innerHTML = note_name[28 + rt * 12 + shifter];

    document.getElementById("buttonQ").innerHTML = note_name[8 + lt * 12 + shifter];
    document.getElementById("buttonW").innerHTML = note_name[9 + lt * 12 + shifter];
    document.getElementById("buttonE").innerHTML = note_name[10 + lt * 12 + shifter];
    document.getElementById("buttonR").innerHTML = note_name[11 + lt * 12 + shifter];
    document.getElementById("buttonT").innerHTML = note_name[12 + lt * 12 + shifter];

    document.getElementById("buttonY").innerHTML = note_name[20 + rt * 12 + shifter];
    document.getElementById("buttonU").innerHTML = note_name[21 + rt * 12 + shifter];
    document.getElementById("buttonI").innerHTML = note_name[22 + rt * 12 + shifter];
    document.getElementById("buttonO").innerHTML = note_name[23 + rt * 12 + shifter];
    document.getElementById("buttonP").innerHTML = note_name[24 + rt * 12 + shifter];

    document.getElementById("buttonA").innerHTML = note_name[4 + lt * 12 + shifter];
    document.getElementById("buttonS").innerHTML = note_name[5 + lt * 12 + shifter];
    document.getElementById("buttonD").innerHTML = note_name[6 + lt * 12 + shifter];
    document.getElementById("buttonF").innerHTML = note_name[7 + lt * 12 + shifter];
    document.getElementById("buttonG").innerHTML = note_name[8 + lt * 12 + shifter];

    document.getElementById("buttonH").innerHTML = note_name[16 + rt * 12 + shifter];
    document.getElementById("buttonJ").innerHTML = note_name[17 + rt * 12 + shifter];
    document.getElementById("buttonK").innerHTML = note_name[18 + rt * 12 + shifter];
    document.getElementById("buttonL").innerHTML = note_name[19 + rt * 12 + shifter];
    document.getElementById("buttonSemi").innerHTML = note_name[20 + rt * 12 + shifter]

    document.getElementById("buttonZ").innerHTML = note_name[0 + lt * 12 + shifter];
    document.getElementById("buttonX").innerHTML = note_name[1 + lt * 12 + shifter];
    document.getElementById("buttonC").innerHTML = note_name[2 + lt * 12 + shifter];
    document.getElementById("buttonV").innerHTML = note_name[3 + lt * 12 + shifter];
    document.getElementById("buttonB").innerHTML = note_name[4 + lt * 12 + shifter];

    document.getElementById("buttonN").innerHTML = note_name[12 + rt * 12 + shifter];
    document.getElementById("buttonM").innerHTML = note_name[13 + rt * 12 + shifter];
    document.getElementById("buttonCom").innerHTML = note_name[14 + rt * 12 + shifter];
    document.getElementById("buttonPer").innerHTML = note_name[15 + rt * 12 + shifter];
    document.getElementById("buttonSlas").innerHTML = note_name[16 + rt * 12 + shifter];
}