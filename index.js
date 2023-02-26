/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArrays = [];

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// function drawCircle() {
//   ctx.fillStyle = 'blue';
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    // this.x = mouse.x
    // this.y = mouse.y
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  // 2D Vector movement
  update() {
    this.x += this.speedX
    this.y += this.speedY
  }
  draw() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for(let i = 0; i < 100; i++) {
    particleArrays.push(new Particle())
  }
}

init()

function handleParticle() {
  for(let i = 0; i < particleArrays.length; i++) {
    particleArrays[i].update();
    particleArrays[i].draw();
  }
}

console.log(particleArrays);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  handleParticle()
  requestAnimationFrame(animate)
  // ctx.filter = "blur(30px)"
}

animate()