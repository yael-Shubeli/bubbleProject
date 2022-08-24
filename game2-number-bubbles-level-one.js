
// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var ctx = canvas.getContext('2d');

// let radius = 60;

// for (var i = 0; i < 5; i++) {
//     let randNum = Math.floor(Math.random() * 5) + 1;
//     let x = Math.floor(Math.random() * 1000) + 100;
//     let y = Math.floor(Math.random() * 1000) + 100;
//     var xSpd = (Math.random() - 0.5) * 3;
//     var ySpd = (Math.random() - 0.5) * 3;
//     this.animation = function () {
//         if (x + radius > innerWidth || x - radius + 1 < 0) {
//         xSpd = -xSpd;
//     };
//     if (y + radius > innerHeight || y - radius < 0) {
//         ySpd = -ySpd;
//     };
//     x += xSpd;
//     y += ySpd;
// }
// ctx.beginPath();
//     ctx.arc(x, y, 60, 0, 2 * Math.PI);
//     ctx.strokeText(randNum, x, y);
//     ctx.stroke();
//     }





var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// //Initiate a canvas instance
//       var canvass = new fabric.Canvas("canvas", {
//          backgroundImage: "https://www.tutorialspoint.com/tools/images/logo.png",
//       });
//       canvass.setWidth(document.body.scrollWidth);
//       canvass.setHeight(250);


// var background = new Image();
// background.src = "https://images.ctfassets.net/j95d1p8hsuun/6clz3zM5N8vwE3onEbKbrz/51558d14fde4ea4e94b1213e66499d1f/NW-about-mob.png";

// // Make sure the image is loaded first otherwise nothing will draw.
// background.onload = function(){
//     c.drawImage(background,500,0);   
// }

function drawCircle(PosX, PosY, radio, colorCirc, text) {
    c.beginPath();
    c.arc(PosX, PosY, radio, 0, Math.PI * 2, true);
    c.strokeStyle = colorCirc;
    c.strokeText(text, PosX, PosY);
    c.stroke();
}

// //Circle Object
function Circle(x, y, dx, dy, radius, text) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function () {
        drawCircle(this.x, this.y, this.radius, 'green', text);
    }

    this.animation = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius + 1 < 0) {
            this.dx = -this.dx;
        };
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        };
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}


var circleArray = [];

// for (var i = 0; i < 5; i++) {
var radius = 50;
var x = Math.random() * (innerWidth - radius);
var y = Math.random() * (innerHeight - radius);
var xSpd = (Math.random() - 0.5) * 3;
var ySpd = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x, y, xSpd, ySpd, radius, Math.floor(Math.random() * 6)));
// }

// var radius = 50;
var x1 = Math.random() * (innerWidth - radius);
var y1 = Math.random() * (innerHeight - radius);
var xSpd1 = (Math.random() - 0.5) * 3;
var ySpd1 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x1, y1, xSpd1, ySpd1, radius, Math.floor(Math.random() * 6)));

// var radius = 50;
var x2 = Math.random() * (innerWidth - radius);
var y2 = Math.random() * (innerHeight - radius);
var xSpd2 = (Math.random() - 0.5) * 3;
var ySpd2 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x2, y2, xSpd2, ySpd2, radius, Math.floor(Math.random() * 6)));

// var radius = 50;
var x3 = Math.random() * (innerWidth - radius);
var y3 = Math.random() * (innerHeight - radius);
var xSpd3 = (Math.random() - 0.5) * 3;
var ySpd3 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x3, y3, xSpd3, ySpd3, radius, Math.floor(Math.random() * 6)));

// var radius = 50;
var x4 = Math.random() * (innerWidth - radius);
var y4 = Math.random() * (innerHeight - radius);
var xSpd4 = (Math.random() - 0.5) * 3;
var ySpd4 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x4, y4, xSpd4, ySpd4, radius, Math.floor(Math.random() * 6)));

let timeout;

for(let y = 0; y < 4; y ++){
    timeout = setTimeout(function(){window.location.href = 'game2-number-bubbles-level-one.html';}, 7000);
}

//Animation

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].animation();
    }
}

animate();










