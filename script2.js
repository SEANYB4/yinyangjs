const ctx = myCanvas.getContext("2d");


const centerX = myCanvas.width / 2;
const centerY = myCanvas.height / 2;
const radius = 50;
const left = centerX - radius;
const rectTop = centerY - radius;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.clip();



// left rectangle

ctx.fillStyle = "white";
ctx.fillRect(
    left,
    rectTop,
    radius,
    radius * 2
);


// right rectangle

ctx.fillStyle = "black";
ctx.fillRect(
    centerX, 
    rectTop,
    radius,
    radius * 2
)


// top circle
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(centerX, centerY-(radius/2), radius/2, 0, Math.PI*2);
ctx.fill();

// black dot
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(centerX, centerY-(radius/2), 10, 0, Math.PI*2);
ctx.fill();


// bottom circle
ctx.beginPath();
ctx.arc(centerX, centerY+(radius/2), radius/2, 0, Math.PI*2);
ctx.fill();


// white dot
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(centerX, centerY+(radius/2), 10, 0, Math.PI*2);
ctx.fill();