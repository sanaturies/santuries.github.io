
const canvas= document.getElementById('can1');
const context= canvas.getContext("2d");
context.font = "30px century";
var firstupdate=Date(0,4,2021);
var newdate=Date();
var d = new Date();
d1=d.toDateString()
context.fillText(d1,10,50)

