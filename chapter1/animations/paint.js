
const canvas= document.getElementById('can1');
const ctx = canvas.getContext("2d");
ctx.font("30px Helvetica");
ctx.fillText("paint here", 10, 50);
function myfunc (event) {
    document.body.appendChild(canvas);
    console.log(event.clientX);
var x = event.offsetX;
var y = event.offsetY;
console.log("x: " + x + " y: " + y);
ctx.beginPath();
ctx.arc(x, y, 10, 0, 2 * Math.PI);
ctx.stroke();
var i = Math.floor((Math.random() * 3) + 1);
console.log(i)
if(i==3){
    ctx.fillStyle=('#000000');
}
if(i==2){
    ctx.fillStyle=('#2A656E');
}
if(i==1){
    ctx.fillStyle=('#FF0035');
}
ctx.fill();
}
canvas.addEventListener("mousemove",myfunc);
canvas.addEventListener("ontouchmove",myfunc);



