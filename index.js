const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");


ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
// console.log(ctx);


const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);


let hue = 0;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function draw(options) {
    hue += 1;
// ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.strokeStyle = `hsl(${Math.random()*100}, 100%, 50%)`;


console.log(options);
ctx.beginPath();
ctx.moveTo(x, y);
if(options.key === "ArrowLeft") {
    x = x - 10;
    y = y;
}
else if(options.key === "ArrowRight") {
    x = x + 10;
    y = y;
}
else if(options.key === "ArrowDown") {
    x = x;
    y = y + 10;
}
else {
    x = x;
    y = y - 10;
}


ctx.lineTo(x, y);
ctx.stroke();

}


function handleKey(e) {
    if(e.key.includes("Arrow")) {
    e.preventDefault();
    draw({key: e.key});
    // console.log(e.key);
        
    }
}

function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function() {
        canvas.classList.remove("shake");
    }, {once: true});
}


window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);
