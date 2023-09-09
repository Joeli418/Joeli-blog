
var amplitude;
var ampRect;
var ampX;
var ampY;
var amp;
var ctxA;

window.addEventListener("load", LoadNResize);

window.addEventListener("resize", LoadNResize);

function LoadNResize () {
    amp = document.querySelector("#amplitude");
    ctxA = amp.getContext("2d");

    amp.height = 2 * window.innerHeight / 3;
    amp.width = 2 * window.innerWidth / 3;

    amplitude = document.getElementById("amplitudeAxis")
    ampRect = amplitude.getBoundingClientRect();
    ampX = (ampRect.right + ampRect.left) / 2;
    ampY = (ampRect.top + ampRect.bottom) / 2;
}

//i forgot how to get mouse position, had to google again.
//https://codingbeautydev.com/blog/javascript-get-mouse-position/#google_vignette
window.addEventListener('mousemove', getCord)

//getting position of an element
//https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
function getCord (e) {
    
    console.log("Xaxis: " + ampX + " Yaxis: " + ampY);
    console.log("x: " + e.clientX + " y: " + e.clientY);

}

/*
function graph(color) {
    const graph = document.querySelector("#graph1");
    const ctx = graph.getContext("2d");

    graph.height = 2 * window.innerHeight / 3;
    graph.width = 2 * window.innerWidth / 3;  
    //ctx.fillRect(0,0,300,150)
    

    ctx.beginPath();
    ctx.beginPath();
    ctx.moveTo(0, graph.height / 2 - func(- graph.width / 2));
    
    for (i = 1; i < graph.width; i++) {

        if(func(i - graph.width / 2) - func(i - 1 - graph.width / 2) > - graph.height &&
        func(i - graph.width / 2) - func(i - 1 - graph.width / 2) < graph.height){
            ctx.strokeStyle = color;
            ctx.lineWidth = 5;
        }
        else{
            ctx.strokeStyle = "cyan";
            ctx.lineWidth = 1;
        }
        x = graph.height / 2 - func(i - graph.width / 2);
        if (x == - Infinity) {
            x = -9999;
        }
        if (x == Infinity) {
            x = 9999
        }
        ctx.lineTo(i, x);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(i, x);
        
        //ctx.lineTo(i, graph.height / 2 - func(i - graph.width / 2));
        //ctx.stroke();
    }
    
    //axis
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, graph.height / 2);
    ctx.lineTo(graph.width, graph.height / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(graph.width / 2, 0);
    ctx.lineTo(graph.width / 2, graph.height);
    ctx.stroke();
}

function func(x) {
    return 100 * Math.sin(0.03 * (x));
}
*/