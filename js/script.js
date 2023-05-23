
function opensidenav () {
    document.getElementById("sidenav").style.width = "50vw";
}
function closesidenav() {
    document.getElementById("sidenav").style.width = "0";
}


window.onload = function() {
    document.getElementById("ext1").style.display = "none";
}
function toggle_extension1() {
    if (document.getElementById("ext1").style.display != "none") {
        document.getElementById("ext1").style.display = "none";
        document.getElementById("aboutbtn").classList.remove("magentabtn");
        
    }
    else {
        document.getElementById("ext1").style.display = "flex";
        document.getElementById("aboutbtn").classList.add("magentabtn");
        document.getElementById("craftbtn").classList.add("fadebtn");
        document.getElementById("musicbtn").classList.add("fadebtn");
        document.getElementById("foodbtn").classList.add("fadebtn");
        document.getElementById("friendsbtn").classList.add("fadebtn");
        document.getElementById("tradebtn").classList.add("fadebtn");
        document.getElementById("aboutbtn2").classList.add("slidebtn")
    }
}



function discordUsername() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("joeli418#9115");
    // Alert the copied text
    alert("Copied discord username: " + "joeli418#9115");
}
