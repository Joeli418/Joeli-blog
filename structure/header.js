
var path = window.location.pathname;
var page = path.split("/").pop();

document.write("<header>")

document.write("<img src= 'images/signiture.jpg' class='navlogo' height=100px width=100px boarder=3px>")
document.write("<nav>")
document.write("    <ul>")
document.write("        <li><a href='index.html'><button class='btn2'>Home</button></a></li>")
document.write("        <li><a onclick='toggle_extension1()'><button class='btn2' id='aboutbtn'>About</button></a></li>")
document.write("        <li><a href='games.html'><button class='btn2'>Games</button></a></li>")
document.write("        <li><a onclick='toggle_extension2()'><button class='btn2' id='otherbtn'>Others</button></a></li>")
document.write("    </ul>")
document.write("</nav>")

document.write("<xheader id='ext1'>")
document.write("    <nav>")
document.write("        <ul>")
if (page == "about.html") {
    document.write("            <li><a onclick='domain_chance()'><button class='btn6' id='aboutbtn2'>About</button></a></li>")
    
}
else {
    document.write("            <li><a href='about.html'><button class='abtn' id='aboutbtn2' >About</button></a></li>")
}
document.write("            <li><a href='magicCraft.html'><button class='btn6' id='craftbtn'>Projects</button></a></li>")
document.write("            <li><a href='musicMagic.html'><button class='btn6' id='musicbtn'>Music</button></a></li>")
document.write("            <li><a href='friendshipMagic.html'><button class='btn6' id='friendsbtn'>Friends</button></a></li>")
document.write("            <li><a href='menu.html'><button class='btn6' id='foodbtn'>Food</button></a></li>")
document.write("            <li><a href='trash_trade.html'><button class='btn6' id='tradebtn'>Trades</button></a></li>")
document.write("        </ul>")
document.write("    </nav>")	
document.write("</xheader>")

document.write("<xheader id='ext2'>")
document.write("    <nav>")
document.write("        <ul>")
document.write("            <li><a><button class='abtn' id='otherbtn2' >Others</button></a></li>")
document.write("            <li><a href='contact.html'><button class='btn6' id='contactbtn'>Contact</button></a></li>")
document.write("            <li><a href='reference.html'><button class='btn6' id='referencebtn'>Ref</button></a></li>")
document.write("        </ul>")
document.write("    </nav>")	
document.write("</xheader>")

document.write("</header>")

document.write("<div class='sidenav'  id='sidenav'>")
document.write("<a class='closebtn' onclick='closesidenav()'>&times;</a>")
document.write("<a href='index.html'>Home</a>")
if (page == "about.html") {
    document.write("<a onclick='domain_chance()'><div id = 'sabout2'>About</div></a>")    
}
else {
    document.write("<a href='about.html'>About</a>")
}


document.write("<a href='magicCraft.html'>Projects</a>")
document.write("<a href='musicMagic.html'>Music</a>")
document.write("<a href='friendshipMagic.html'>Friends</a>")
document.write("<a href='menu.html'>Food</a>")
document.write("<a href='trash_trade.html'>Trades</a>")
document.write("<a href='games.html'>Games</a>")
document.write("<a href='contact.html'>Contact</a>")
document.write("<a href='reference.html'>Reference</a>")

document.write("</div>")

document.write("<span class='sidenavlogo margpad' onclick='opensidenav()'>&#9776;</span>")
