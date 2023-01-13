let sizeIncrease = document.querySelector('.button__size_up');
let sizeDecrease = document.querySelector('.button__size_down');
let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let ballRadius = 30;
let x = canvas.width/ 2;
let y = canvas.height - ballRadius;
let dx = 2;
let dy = 2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    ctx.fillStyle = "black";
    }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    ctx.fillStyle = "orange"
  }

  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;    
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);

sizeDecrease.addEventListener('click', function () {
  ballRadius = ballRadius - 5;
});
sizeIncrease.addEventListener('click', function () {
  ballRadius = ballRadius + 5; 
});