var C3 = document.getElementById("piano_C3");
var Cs3 = document.getElementById("piano_Cs3");
var D3 = document.getElementById("piano_D3");
var Ds3 = document.getElementById("piano_Ds3");
var E3 = document.getElementById("piano_E3");
var F3 = document.getElementById("piano_F3");
var Fs3 = document.getElementById("piano_Fs3");
var G3 = document.getElementById("piano_G3");
var Gs3 = document.getElementById("piano_Gs3");
var A3 = document.getElementById("piano_A3");
var As3 = document.getElementById("piano_As3");
var B3 = document.getElementById("piano_B3");
var C4 = document.getElementById("piano_C4");

var C4 = document.getElementById("piano_C4");
var Cs4 = document.getElementById("piano_Cs4");
var D4 = document.getElementById("piano_D4");
var Ds4 = document.getElementById("piano_Ds4");
var E4 = document.getElementById("piano_E4");
var F4 = document.getElementById("piano_F4");
var Fs4 = document.getElementById("piano_Fs4");
var G4 = document.getElementById("piano_G4");
var Gs4 = document.getElementById("piano_Gs4");
var A4 = document.getElementById("piano_A4");
var As4 = document.getElementById("piano_As4");
var B4 = document.getElementById("piano_B4");
var C5 = document.getElementById("piano_C5");

window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyZ') {
        C3.pause(); 
        C3.currentTime = 0;
    }
    if (e.code == 'KeyX') {
        Cs3.pause(); 
        Cs3.currentTime = 0;
    }
    if (e.code == 'KeyC') {
        D3.pause(); 
        D3.currentTime = 0;
    }
    if (e.code == 'KeyV') {
        Ds3.pause(); 
        Ds3.currentTime = 0;
    }
    if (e.code == 'KeyB') {
        E3.pause(); 
        E3.currentTime = 0;
    }
    if (e.code == 'KeyA') {
        E3.pause(); 
        E3.currentTime = 0;
    }
    if (e.code == 'KeyS') {
        F3.pause(); 
        F3.currentTime = 0;
    }
    if (e.code == 'KeyD') {
        Fs3.pause(); 
        Fs3.currentTime = 0;
    }
    if (e.code == 'KeyF') {
        G3.pause(); 
        G3.currentTime = 0;
    }
    if (e.code == 'KeyG') {
        Gs3.pause(); 
        Gs3.currentTime = 0;
    }
    if (e.code == 'KeyQ') {
        Gs3.pause(); 
        Gs3.currentTime = 0;
    }
    if (e.code == 'KeyW') {
        A3.pause(); 
        A3.currentTime = 0;
    }
    if (e.code == 'KeyE') {
        As3.pause(); 
        As3.currentTime = 0;
    }
    if (e.code == 'KeyR') {
        B3.pause(); 
        B3.currentTime = 0;
    }
    if (e.code == 'KeyT') {
        C4.pause(); 
        C4.currentTime = 0;
    }
    if (e.code == 'Digit1') {
        C4.pause(); 
        C4.currentTime = 0;
    }
    if (e.code == 'Digit2') {
        Cs4.pause(); 
        Cs4.currentTime = 0;
    }
    if (e.code == 'Digit3') {
        D4.pause(); 
        D4.currentTime = 0;
    }
    if (e.code == 'Digit4') {
        Ds4.pause(); 
        Ds4.currentTime = 0;
    }
    if (e.code == 'Digit5') {
        E4.pause(); 
        E4.currentTime = 0;
    }
    //---------------------------------------
    if (e.code == 'KeyN') {
        C4.pause(); 
        C4.currentTime = 0;
    }
    if (e.code == 'KeyM') {
        Cs4.pause(); 
        Cs4.currentTime = 0;
    }
    if (e.code == 'Comma') {
        D4.pause(); 
        D4.currentTime = 0;
    }
    if (e.code == 'Period') {
        Ds4.pause(); 
        Ds4.currentTime = 0;
    }
    if (e.code == 'Slash') {
        E4.pause(); 
        E4.currentTime = 0;
    }
    if (e.code == 'KeyH') {
        E4.pause(); 
        E4.currentTime = 0;
    }
    if (e.code == 'KeyJ') {
        F4.pause(); 
        F4.currentTime = 0;
    }
    if (e.code == 'KeyK') {
        Fs4.pause(); 
        Fs4.currentTime = 0;
    }
    if (e.code == 'KeyL') {
        G4.pause(); 
        G4.currentTime = 0;
    }
    if (e.code == 'Semicolon') {
        Gs4.pause(); 
        Gs4.currentTime = 0;
    }
    if (e.code == 'KeyY') {
        Gs4.pause(); 
        Gs4.currentTime = 0;
    }
    if (e.code == 'KeyU') {
        A4.pause(); 
        A4.currentTime = 0;
    }
    if (e.code == 'KeyI') {
        As4.pause(); 
        As4.currentTime = 0;
    }
    if (e.code == 'KeyO') {
        B4.pause(); 
        B4.currentTime = 0;
    }
    if (e.code == 'KeyP') {
        C5.pause(); 
        C5.currentTime = 0;
    }
    if (e.code == 'Digit6') {
        C5.pause(); 
        C5.currentTime = 0;
    }
});

window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyZ') {
        C3.play(); 
    }
    if (e.code == 'KeyX') {
        Cs3.play(); 
    }
    if (e.code == 'KeyC') {
        D3.play(); 
    }
    if (e.code == 'KeyV') {
        Ds3.play(); 
    }
    if (e.code == 'KeyB') {
        E3.play(); 
    }
    if (e.code == 'KeyA') {
        E3.play(); 
    }
    if (e.code == 'KeyS') {
        F3.play(); 
    }
    if (e.code == 'KeyD') {
        Fs3.play(); 
    }
    if (e.code == 'KeyF') {
        G3.play(); 
    }
    if (e.code == 'KeyG') {
        Gs3.play(); 
    }
    if (e.code == 'KeyQ') {
        Gs3.play(); 
    }
    if (e.code == 'KeyW') {
        A3.play(); 
    }
    if (e.code == 'KeyE') {
        As3.play(); 
    }
    if (e.code == 'KeyR') {
        B3.play(); 
    }
    if (e.code == 'KeyT') {
        C4.play(); 
    }
    if (e.code == 'Digit1') {
        C4.play(); 
    }
    if (e.code == 'Digit2') {
        Cs4.play(); 
    }
    if (e.code == 'Digit3') {
        D4.play(); 
    }
    if (e.code == 'Digit4') {
        Ds4.play(); 
    }
    if (e.code == 'Digit5') {
        E4.play(); 
    }
    //-------------------------------------
    if (e.code == 'KeyN') {
        C4.play(); 
    }
    if (e.code == 'KeyM') {
        Cs4.play(); 
    }
    if (e.code == 'Comma') {
        D4.play(); 
    }
    if (e.code == 'Period') {
        Ds4.play(); 
    }
    if (e.code == 'Slash') {
        E4.play(); 
    }
    if (e.code == 'KeyH') {
        E4.play(); 
    }
    if (e.code == 'KeyJ') {
        F4.play(); 
    }
    if (e.code == 'KeyK') {
        Fs4.play(); 
    }
    if (e.code == 'KeyL') {
        G4.play(); 
    }
    if (e.code == 'Semicolon') {
        Gs4.play(); 
    }
    if (e.code == 'KeyY') {
        Gs4.play(); 
    }
    if (e.code == 'KeyU') {
        A4.play(); 
    }
    if (e.code == 'KeyI') {
        As4.play(); 
    }
    if (e.code == 'KeyO') {
        B4.play(); 
    }
    if (e.code == 'KeyP') {
        C5.play(); 
    }
    if (e.code == 'Digit6') {
        C5.play(); 
    }
});
