
var canvas= document.getElementById('can');
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
ctx.font="30px century";
ctx.fillText("Paint Here!", 10, 50);
function painting(event){
    var x = event.offsetX;
    var y = event.offsetY;
    console.log("x:" + x + "y:" + y);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    //ctx.stroke();
    var i = Math.floor((Math.random() * 3) + 1);
    console.log(i);
    if(i==3){
        ctx.fillStyle=('#000000');
    }
    if(i==2){
        ctx.fillStyle=('#03deff');
    }
    if(i==1){
        ctx.fillStyle=('#FFFFFF');
    }
    ctx.fill();
}
canvas.addEventListener("mousemove",painting);
canvas.addEventListener("touchmove",painting);