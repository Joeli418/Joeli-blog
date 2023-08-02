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

var rt = 0;
var lt = 0;
var shifter = 0

window.onkeydown = function(e) {
    return e.keyCode !== 32;
};

window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyZ') {
        n[0 + lt * 12 + shifter].pause(); 
        n[0 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyX') {
        n[1 + lt * 12 + shifter].pause(); 
        n[1 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyC') {
        n[2 + lt * 12 + shifter].pause(); 
        n[2 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyV') {
        n[3 + lt * 12 + shifter].pause(); 
        n[3 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyB') {
        n[4 + lt * 12 + shifter].pause(); 
        n[4 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyA') {
        n[4 + lt * 12 + shifter].pause(); 
        n[4 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyS') {
        n[5 + lt * 12 + shifter].pause(); 
        n[5 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyD') {
        n[6 + lt * 12 + shifter].pause(); 
        n[6 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyF') {
        n[7 + lt * 12 + shifter].pause(); 
        n[7 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyG') {
        n[8 + lt * 12 + shifter].pause(); 
        n[8 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyQ') {
        n[8 + lt * 12 + shifter].pause(); 
        n[8 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyW') {
        n[9 + lt * 12 + shifter].pause(); 
        n[9 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyE') {
        n[10 + lt * 12 + shifter].pause(); 
        n[10 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyR') {
        n[11 + lt * 12 + shifter].pause(); 
        n[11 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyT') {
        n[12 + lt * 12 + shifter].pause(); 
        n[12 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit1') {
        n[12 + lt * 12 + shifter].pause(); 
        n[12 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit2') {
        n[13 + lt * 12 + shifter].pause(); 
        n[13 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit3') {
        n[14 + lt * 12 + shifter].pause(); 
        n[14 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit4') {
        n[15 + lt * 12 + shifter].pause(); 
        n[15 + lt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit5') {
        n[16 + lt * 12 + shifter].pause(); 
        n[16 + lt * 12 + shifter].currentTime = 0;
    }
    //---------------------------------------right side
    if (e.code == 'KeyN') {
        n[12 + rt * 12 + shifter].pause(); 
        n[12 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyM') {
        n[13 + rt * 12 + shifter].pause(); 
        n[13 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Comma') {
        n[14 + rt * 12 + shifter].pause(); 
        n[14 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Period') {
        n[15 + rt * 12 + shifter].pause(); 
        n[15 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Slash') {
        n[16 + rt * 12 + shifter].pause(); 
        n[16 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyH') {
        n[16 + rt * 12 + shifter].pause(); 
        n[16 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyJ') {
        n[17 + rt * 12 + shifter].pause(); 
        n[17 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyK') {
        n[18 + rt * 12 + shifter].pause(); 
        n[18 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyL') {
        n[19 + rt * 12 + shifter].pause(); 
        n[19 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Semicolon') {
        n[20 + rt * 12 + shifter].pause(); 
        n[20 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyY') {
        n[20 + rt * 12 + shifter].pause(); 
        n[20 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyU') {
        n[21 + rt * 12 + shifter].pause(); 
        n[21 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyI') {
        n[22 + rt * 12 + shifter].pause(); 
        n[22 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyO') {
        n[23 + rt * 12 + shifter].pause(); 
        n[23 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'KeyP') {
        n[24 + rt * 12 + shifter].pause(); 
        n[24 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit6') {
        n[24 + rt * 12 + shifter].pause(); 
        n[24 + rt * 12 + shifter].currentTime = 0;
    }

    if (e.code == 'Digit7') {
        n[25 + rt * 12 + shifter].pause(); 
        n[25 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit8') {
        n[26 + rt * 12 + shifter].pause(); 
        n[26 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit9') {
        n[27 + rt * 12 + shifter].pause(); 
        n[27 + rt * 12 + shifter].currentTime = 0;
    }
    if (e.code == 'Digit0') {
        n[28 + rt * 12 + shifter].pause(); 
        n[28 + rt * 12 + shifter].currentTime = 0;
    }
    //-------------------- mischellanious
    if (e.code == 'Space') {
        if (rt == 1) {
            rt = 0;
        }
        else {
            rt = 1;
        }
        return false;
    }
    if (e.code == 'Backquote') {
        if (lt == 1) {
            lt = 0;
        }
        else {
            lt = 1;
        }
    }
    if (e.code == 'BracketLeft') {
        if (shifter > 0) {
            shifter--;
        }
    }
    if (e.code == 'BracketRight') {
        if (shifter < 12) {
            shifter++;
        }
    }
});

window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyZ') {
        n[0 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyX') {
        n[1 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyC') {
        n[2 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyV') {
        n[3 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyB') {
        n[4 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyA') {
        n[4 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyS') {
        n[5 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyD') {
        n[6 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyF') {
        n[7 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyG') {
        n[8 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyQ') {
        n[8 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyW') {
        n[9 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyE') {
        n[10 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyR') {
        n[11 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyT') {
        n[12 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit1') {
        n[12 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit2') {
        n[13 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit3') {
        n[14 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit4') {
        n[15 + lt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit5') {
        n[16 + lt * 12 + shifter].play(); 
    }
    //-------------------------------------rightside
    if (e.code == 'KeyN') {
        n[12 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyM') {
        n[13 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Comma') {
        n[14 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Period') {
        n[15 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Slash') {
        n[16 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyH') {
        n[16 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyJ') {
        n[17 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyK') {
        n[18 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyL') {
        n[19 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Semicolon') {
        n[20 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyY') {
        n[20 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyU') {
        n[21 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyI') {
        n[22 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyO') {
        n[23 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'KeyP') {
        n[24 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit6') {
        n[24 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit7') {
        n[25 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit8') {
        n[26 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit9') {
        n[27 + rt * 12 + shifter].play(); 
    }
    if (e.code == 'Digit0') {
        n[28 + rt * 12 + shifter].play(); 
    }
});
