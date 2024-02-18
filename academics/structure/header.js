
var path = window.location.pathname;
var page = path.split("/").pop();

document.write("<header>")

document.write("<a href='../index.html'><img src= '../images/sig_tab_logo.png' class='navlogo' height=100px width=100px boarder=3px></a>")
document.write("<nav>")
document.write("    <ul>")
document.write("        <li><a href='home.html'><button class='btn2'>Home</button></a></li>")
document.write("        <li><a href='../index.html'><button class='btn2'>Main</button></a></li>")
document.write("    </ul>")
document.write("</nav>")

document.write("</header>")

document.write("<div class='sidenav'  id='sidenav'>")


document.write("<a href='home.html'>Home</a>")
document.write("<a href='../index.html'>Main</a>")

document.write("</div>")

document.write("<span class='sidenavlogo margpad' onclick='opensidenav()'>&#9776;</span>")
