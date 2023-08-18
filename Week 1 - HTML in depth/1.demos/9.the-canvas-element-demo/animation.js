let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 40;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if (position + radius > 640) {
        moveSpeed = -speed;
    } else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 1640, 480); // clear canvas before drawing, attributes: x, y, width, height

    context.fillStyle = "#62687f"; // set fill color to blue
    context.beginPath(); // start drawing
    context.arc(position, 105, radius, 0, 2 * Math.PI); // draw circle , attributes: x, y, radius, start angle, end angle
    context.fill(); // fill circle
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);