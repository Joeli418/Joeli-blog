
function opensidenav () {
    document.getElementById("sidenav").style.width = "50vw";
}
function closesidenav() {
    document.getElementById("sidenav").style.width = "0";
}

function discordUsername() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("joeli418#9115");
    // Alert the copied text
    alert("Copied discord username: " + "joeli418#9115");
  }