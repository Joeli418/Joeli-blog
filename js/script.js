
function opensidenav () {
    document.getElementById("sidenav").style.width = "50vw";
}
function closesidenav() {
    document.getElementById("sidenav").style.width = "0";
}

function toggle_extension1() {
    if (document.getElementById("ext1").style.display != "none") {
        document.getElementById("ext1").style.display = "none";
        document.getElementById("aboutbtn").classList.remove("magentabtn");
        
    }
    else {
        if(document.getElementById("ext2").style.display != "none") {
            document.getElementById("ext2").style.display = "none";
            document.getElementById("otherbtn").classList.remove("magentabtn");
        }
        document.getElementById("ext1").style.display = "flex";
        document.getElementById("aboutbtn").classList.add("magentabtn");
        document.getElementById("craftbtn").classList.add("fadebtn");
        document.getElementById("musicbtn").classList.add("fadebtn");
        document.getElementById("foodbtn").classList.add("fadebtn");
        document.getElementById("friendsbtn").classList.add("fadebtn");
        document.getElementById("tradebtn").classList.add("fadebtn");
        document.getElementById("aboutbtn2").classList.add("slidebtn");
    }
}

function toggle_extension2() {
    if (document.getElementById("ext2").style.display != "none") {
        document.getElementById("ext2").style.display = "none";
        document.getElementById("otherbtn").classList.remove("magentabtn");
        
    }
    else {
        if (document.getElementById("ext1").style.display != "none") {
            document.getElementById("ext1").style.display = "none";
            document.getElementById("aboutbtn").classList.remove("magentabtn");
            
        }
        document.getElementById("ext2").style.display = "flex";
        document.getElementById("otherbtn").classList.add("magentabtn");
        document.getElementById("contactbtn").classList.add("fadebtn");
        document.getElementById("referencebtn").classList.add("fadebtn");
        document.getElementById("otherbtn2").classList.add("slidebtn");
    }
}

function toggleDropdown(buttonID) {
    const content = buttonID.parentElement.nextElementSibling.nextElementSibling;
    if (content.style.display == "none") {
        content.style.display = "block";
        buttonID.classList.add("showBtn")
        buttonID.innerHTML = "Hide"
    } else {
        content.style.display = "none"
        buttonID.classList.remove("showBtn")
        buttonID.innerHTML = "Show"
    }
}

function discordUsername() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("joe_li");
    // Alert the copied text
    alert("Copied discord username: " + "joe_li");
}