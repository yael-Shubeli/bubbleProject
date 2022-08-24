var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
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

for (var i = 0; i < 15; i++) {
    var radius = 50;
    var x = Math.random() * (innerWidth - radius);
    var y = Math.random() * (innerHeight - radius);
    var xSpd = (Math.random() - 0.5) * 3;
    var ySpd = (Math.random() - 0.5) * 3;
    circleArray.push(new Circle(x, y, xSpd, ySpd, radius, ""));
}

//Animation

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].animation();
    }
}

 const myTimeout = setTimeout(function(){window.location.href = 'game2-number-bubbles-level-one.html';}, 5000);

animate();