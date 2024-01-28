
const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');




myCanvas.width = 500;
myCanvas.height = 500;


const centerX = myCanvas.width/2;
const centerY = myCanvas.height/2;


// Draw main circle

context.fillStyle = 'white';

context.beginPath();
context.arc(centerX, centerY, 250, 0, 2*Math.PI);
context.fill();


// Draw little circles

context.fillStyle = 'black';
context.beginPath();
context.arc((myCanvas.width/4)*3, myCanvas.height/4, 50, 0, 2*Math.PI);
context.fill();

context.beginPath();
context.arc((myCanvas.width/4), (myCanvas.height/4)*3, 50, 0, 2*Math.PI);
context.stroke();

// Draw curves

context.beginPath();
context.moveTo(centerX, 0);
context.quadraticCurveTo(50, 150, myCanvas.width/2, myCanvas.height/2);
context.lineWidth = 3;
context.stroke();


context.beginPath();
context.moveTo(centerX, myCanvas.height/2);
context.quadraticCurveTo(500, 360, myCanvas.width/2, myCanvas.height);
context.stroke();