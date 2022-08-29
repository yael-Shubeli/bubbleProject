
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

// // //Circle Object
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


const c1 = JSON.parse(localStorage.getItem('coordinate1'));
const c2 = JSON.parse(localStorage.getItem('coordinate2'));
const c3 = JSON.parse(localStorage.getItem('coordinate3'));
const c4 = JSON.parse(localStorage.getItem('coordinate4'));
const c5 = JSON.parse(localStorage.getItem('coordinate5'));


// document.getElementById('canvas').textContent = ppp.xC;

let circleArray1 = [];

circleArray1.push(new Circle(c1.x, c1.y, c1.xSpd, c1.ySpd, c1.radius, 'red', ""));
circleArray1.push(new Circle(c2.x1, c2.y1, c2.xSpd1, c2.ySpd1, c2.radius, 'blue', ""));
circleArray1.push(new Circle(c3.x2, c3.y2, c3.xSpd2, c3.ySpd2, c3.radius, 'green', ""));
circleArray1.push(new Circle(c4.x3, c4.y3, c4.xSpd3, c4.ySpd3, c4.radius, 'grey', ""));
circleArray1.push(new Circle(c5.x4, c5.y4, c5.xSpd4, c5.ySpd4, c5.radius, 'black', ""));

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray1.length; i++) {
        circleArray1[i].animation();
        // circleArray[i].style.animationPlayState = 'paused';
    }
}

animate();
