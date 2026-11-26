    const stenoBriefs = [
        ["the", "-T"],
        ["of", "F"],
        ["to", "TO"],
        ["in", "TPH"],
        ["a", "AEU"],
        ["is", "S-"],
        ["that", "THA"],
        ["with", "W"],
        ["be", "B"],
        ["by", "PWEU"],
        ["he", "E"],
        ["I", "EU"],
        ["this", "TH"],
        ["are", "R-"],
        ["which", "WEU"],
        ["have", "SR"],
        ["they", "THE"],
        ["you", "U"],
        ["you'd", "UD"],
        ["you'll", "UL"],
        ["you're", "UR"],
        ["you've", "UF"],
        ["were", "WR"],
        ["can", "K"],
        ["there", "THR"],
        ["been", "PWPB"],
        ["if", "TP"],
        ["would", "WO"],
        ["who", "WHO"],
        ["other", "OER"],
        ["what", "WHA"],
        ["only", "OEPBL"],
        ["do", "TKO"],
        ["new", "TPHU"],
        ["about", "PW"],
        ["two", "TWO"],
        ["any", "TPHEU"],
        ["could", "KO"],
        ["after", "AF"],
        ["said", "SAEUD"],
        ["very", "SRE"],
        ["many", "PHAEPB"],
        ["even", "AOEPB"],
        ["where", "W-R"],
        ["through", "THRU"],
        ["being", "-BG"],
        ["because", "PWAUS"],
        ["before", "PW-F"],
        ["upon", "POPB"],
        ["without", "WOUT"],
        ["another", "TPHOER"],
        ["against", "TKPWEPBS"],
        ["every", "EFR"],
        ["within", "W-PB"],
        ["example", "KP-PL"],
        ["others", "OERS"],
        ["therefore", "THR-FR"],
        ["having", "SR-G"],
        ["become", "PW-BG"],
        ["whether", "WHR"],
        ["somebody", "S-B"],
        ["somehow", "SPHOU"],
        ["someone", "SPH-PB"],
        ["someplace", "SPHRAEUS"],
        ["something", "S-G"],
        ["sometimes", "STAOEUPLS"],
        ["somewhere", "SWR or SW-R"],
        ["question", "KWE"],
        ["almost", "HR-PL"],
        ["interest", "T-R or TR"],
        ["ever", "-FR"],
        ["became", "PWAEUPL"],
        ["probably", "PROBL"],
        ["include", "KHRU"],
        ["includes", "KHRUS"],
        ["included", "KHRUD"],
        ["including", "KHRUG"],
        ["amount", "APLT"],
        ["receive", "SAOEF"],
        ["received", "SAOEFD"],
        ["describe", "SKREU"],
        ["described", "SKREUD"],
        ["anything", "TPHEUG"],
        ["continue", "T-PB"],
        ["continued", "T-PBD"],
        ["beginning", "TKPWEUPBG"],
        ["understand", "URPBD"],
        ["understanding", "URPBGD"],
        ["today", "TOED"],
        ["opinion", "P-PB"],
        ["becomes", "PW-BGS"],
        ["yes", "KWRE"],
        ["idea", "KWR-D"],
        ["ideas", "KWR-DZ"],
        ["actually", "TWAEUL"],
        ["move", "PHOF"],
        ["ask", "SK"],
        ["unless", "TPH-LS"],
        ["easy", "EZ"],
        ["otherwise", "O*ERZ"]
    ];

const stenoPunctuations = [
    [".", "TP-PL"],
    [".", "P-P"],
    [",", "KW-BG"],
    ["' open", "AE"],
    ["' close", "A*E"],
    ["\" open", "KW-GS"],
    ["\" close", "KR-GS"],
    ["?", "H-F"],
    ["-", "H-PB"],
    [":", "STPH-FPLT"],
    [":", "KHR-PB"],
    [";", "SKWR*RBGS"],
    ["!", "SKHRAPL"],
    ["(", "PREPB"],
    [")", "PR*EPB"],
    ["--", "TK-RB"],
    ["...", "SKWR-RBGS"],
    ["/", "OEU"],
    ["$", "TK-PL"],
    ["&", "SP-PBD"],
    ["%", "PERS"],
    ["@", "KWRAT"],
    ["#", "HAERB"],
    ["+", "PHR*US"],
    ["=", "KWA*LS"],
    ["*", "STA*R"],
    ["[", "PWR-BGT"],
    ["]", "PWR*BGT"],
    ["{", "TPR-BGT"],
    ["}", "TPR*BGT"],
    ["_", "R*UPBD"],
    ["<", "AEPBGT"],
    [">", "A*EPBGT"],
    ["\\", "SPWHRAERB"],
    ["|", "PAO*EUP"],
    ["~", "T*LD"],
    ["`", "KH-FG"],
    ["^", "KR-RT"]
];

    progress = 10;
    current = 1;
    last = 1;
    gaveUp = 0;
    correct = 0;
    page = 0;

    init();

    // w3schools function
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + String(cvalue) + ";" + expires + ";path=/";
    }
 
    // w3schools function
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                // append string to be outputted
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                // return the cookie value
                return parseInt(c.substring(name.length, c.length));
            }
        }
        return 0;
    }

    function progressReset() {
        let cookieDelete = confirm("Are you sure you want to delete your progress");

        if (cookieDelete) {
            // clear cookies - progress
            setCookie("progress", 0, -1);

            // clear word array
            for (let i = 0; i < 100; i++) {
                setCookie("word" + String(i), 0, -1);
            }

            // clear punc array
            for (let i = 0; i < 38; i++) {
                setCookie("punc" + String(i), 0, -1);
            }

            // alert user
            alert("Progress deleted");
        } else {
            alert("Action cancelled");
        }
    }

    function setPage(select) {
        switch (select) {
            case 0:
                page = 0;
                break;
            case 1:
                page = 1;
                break;
            case 2:
                page = 2;
                break;
            case 3:
                page = 3;
                break;
            default:
                page = 0;
        }
    }

    function wrongWord() {
        if (gaveUp == 0) {
            textbox.textContent = "";
            document.getElementById("answer").innerHTML = stenoBriefs[current][1];
            
            value = getCookie("word" + String(current));
            console.log("current value is " + String(value));
            if (value <= 0) value = 0;
            else value--;

            console.log("updating " + stenoBriefs[current][0] + " to " + String(value));
            setCookie("word" + String(current), value, 365);
            
            gaveUp = 1;
        }
    }

    function init() {
        console.log("Hello, World!");
        document.getElementById("displayWord").innerHTML = stenoBriefs[current][0];
        progress = getCookie("progress");
        setCookie("progress", progress, 365);
        
        document.getElementById("progressBar").style.width = progress.toString(10) + "%";
    }

    // event listeners
    document.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event.key, "Code:", event.code);
        const textbox = document.getElementById("textbox");
        if (event.key.length === 1) {
            correct = 0; // correct = 1 will happen after the nextline
            textbox.textContent += event.key;
            if (gaveUp == 0 && correct == 0) {
                setTimeout(() => {
                    if (correct == 0) {
                        wrongWord();
                    }
                }, 100);
            }
        }
        if (event.key === "Backspace") {
            textbox.textContent = textbox.textContent.slice(0, -1);
        }

        // correct answer is typed
        if (textbox.textContent.trimStart() === stenoBriefs[current][0])  {
            // flush the textbox that user typed
            textbox.textContent = "";
            correct = 1;

            // update the value - read modify write
            if (gaveUp == 0) {
                value = getCookie("word" + String(current));
                if (value >= 3) value = 3;
                else value++;
                setCookie("word" + String(current), value, 365);
            }
            gaveUp = 0;

            // get a new random value
            last = current;
            while(last == current) current = Math.floor(Math.random() * progress);

            // display the new word
            document.getElementById("answer").innerHTML = "";
            document.getElementById("displayWord").innerHTML = stenoBriefs[current][0];

            pass = 1;
            for (let i = 0; i < progress; i++) {
                value = getCookie("word" + String(i));
                if (value < 3) pass = 0;
            }
            if (pass == 1) {
                progress = getCookie("progress");
                if (progress < 100) progress++;
                else progress = 100;
                setCookie("progress", progress, 365);
                console.log("progress is " + String(progress));
            }
        }

        // if gave up
        if (event.key === "Enter")  {
            wrongWord();
        }

        // always update progress bar
        document.getElementById("progressBar").style.width = progress.toString(10) + "%";
    });