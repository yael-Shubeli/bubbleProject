
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function drawCircle(PosX, PosY, radio, colorCirc, text) {
    c.beginPath();
    c.arc(PosX, PosY, radio, 0, Math.PI * 2, true);
    c.font = "25px Ariel";
    c.strokeStyle = colorCirc;
    c.strokeText(text, PosX, PosY);
    c.stroke();
}

// //Circle Object
function Circle(x, y, dx, dy, radius, color, text) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function () {
        drawCircle(this.x, this.y, this.radius, color, text);
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
circleArray.push(new Circle(x, y, xSpd, ySpd, radius, 'red', Math.floor(Math.random() * 6)));
// }

// var radius = 50;
var x1 = Math.random() * (innerWidth - radius);
var y1 = Math.random() * (innerHeight - radius);
var xSpd1 = (Math.random() - 0.5) * 3;
var ySpd1 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x1, y1, xSpd1, ySpd1, radius, 'blue', Math.floor(Math.random() * 6)));

// var radius = 50;
var x2 = Math.random() * (innerWidth - radius);
var y2 = Math.random() * (innerHeight - radius);
var xSpd2 = (Math.random() - 0.5) * 3;
var ySpd2 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x2, y2, xSpd2, ySpd2, radius, 'green', Math.floor(Math.random() * 6)));

// var radius = 50;
var x3 = Math.random() * (innerWidth - radius);
var y3 = Math.random() * (innerHeight - radius);
var xSpd3 = (Math.random() - 0.5) * 3;
var ySpd3 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x3, y3, xSpd3, ySpd3, radius, 'grey', Math.floor(Math.random() * 6)));

// var radius = 50;
var x4 = Math.random() * (innerWidth - radius);
var y4 = Math.random() * (innerHeight - radius);
var xSpd4 = (Math.random() - 0.5) * 3;
var ySpd4 = (Math.random() - 0.5) * 3;
circleArray.push(new Circle(x4, y4, xSpd4, ySpd4, radius, 'black', Math.floor(Math.random() * 6)));

localStorage.setItem('coordinate1', JSON.stringify({ xC: circleArray[0].x, yC: circleArray[0].y, xSpdC: circleArray[0].dx, ySpdC: circleArray[0].dy, radiusC: 50, colorC: 'red', textC: " " }));
localStorage.setItem('coordinate2', JSON.stringify({ xC: circleArray[1].x, yC: circleArray[1].y, xSpdC: circleArray[1].dx, ySpdC: circleArray[1].dy, radiusC: 50, colorC: 'blue', textC: " " }));
localStorage.setItem('coordinate3', JSON.stringify({ xC: circleArray[2].x, yC: circleArray[2].y, xSpdC: circleArray[2].dx, ySpdC: circleArray[2].dy, radiusC: 50, colorC: 'green', textC: " " }));
localStorage.setItem('coordinate4', JSON.stringify({ xC: circleArray[3].x, yC: circleArray[3].y, xSpdC: circleArray[3].dx, ySpdC: circleArray[3].dy, radiusC: 50, colorC: 'grey', textC: " " }));
localStorage.setItem('coordinate5', JSON.stringify({ xC: circleArray[4].x, yC: circleArray[4].y, xSpdC: circleArray[4].dx, ySpdC: circleArray[4].dy, radiusC: 50, colorC: 'black', textC: " " }));

// localStorage.setItem('coordi', JSON.stringify({ name: "yyyyyyy", age: 7}));


// let coordinate1 = {xC : circleArray[0].x, yC : circleArray[0].y, xSpdC : circleArray[0].dx, ySpdC : circleArray[0].dy, radiusC : 50, colorC : 'red', textC : " "};
// let coordinate2 = {xC : circleArray[1].x, yC : circleArray[1].y, xSpdC : circleArray[1].dx, ySpdC : circleArray[1].dy, radiusC : 50, colorC : 'blue', textC : " "};
// let coordinate3 = { xC: circleArray[2].x, yC: circleArray[2].y, xSpdC: circleArray[2].dx, ySpdC: circleArray[2].dy, radiusC: 50, colorC: 'green', textC: " " };
// let coordinate4 = { xC: circleArray[3].x, yC: circleArray[3].y, xSpdC: circleArray[3].dx, ySpdC: circleArray[3].dy, radiusC: 50, colorC: 'grey', textC: " " };
// let coordinate5 = { xC: circleArray[4].x, yC: circleArray[4].y, xSpdC: circleArray[4].dx, ySpdC: circleArray[4].dy, radiusC: 50, colorC: 'black', textC: " " };
// let poop = localStorage.setItem('coodinate1', JSON.stringify(coordinate1));
// let poop = JSON.stringify(coordinate1);

let timeout = setTimeout(function(){window.location.href = 'index.html';}, 4000);

// function change() {
//     c.clearRect(0, 0, 0, 0);
//     circleArray.push(new Circle(x, y, xSpd, ySpd, radius, 'red', ""));
//     circleArray.push(new Circle(x1, y1, xSpd1, ySpd1, radius, 'blue', ""));
//     circleArray.push(new Circle(x2, y2, xSpd2, ySpd2, radius, 'green', ""));
//     circleArray.push(new Circle(x3, y3, xSpd3, ySpd3, radius, 'grey', ""));
//     circleArray.push(new Circle(x4, y4, xSpd4, ySpd4, radius, 'black', ""));
// }



//Animation

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].animation();
        // circleArray[i].style.animationPlayState = 'paused';
    }
}

animate();
//sleep 5 sec
//call function to set current location

// element.style.animationPlayState = 'paused';
// circleArray[0].style.animationPlayState = 'paused';








