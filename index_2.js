/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArrays = [];
let hue = 0;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('click', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for(let i = 0; i < 20; i++) {
    particleArrays.push(new Particle())
  }
});

canvas.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for(let i = 0; i < 2; i++) {
    particleArrays.push(new Particle())
  }
});

// function drawCircle() {
//   ctx.fillStyle = 'blue';
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    this.x = mouse.x
    this.y = mouse.y
    // this.x = Math.random() * canvas.width
    // this.y = Math.random() * canvas.height
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  // 2D Vector movement
  update() {
    this.x += this.speedX
    this.y += this.speedY
    
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// function init() {
//   for(let i = 0; i < 100; i++) {
//     particleArrays.push(new Particle())
//   }
// }
// init()

function handleParticle() {
  for(let i = 0; i < particleArrays.length; i++) {
    particleArrays[i].update();
    particleArrays[i].draw();
    if(particleArrays[i].siez <= 0.3) {
      particleArrays.splice(i, 1);
      i--;
    }
  }
}

console.log(particleArrays);

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = `rgb(0, 0, 0, 0.02)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  handleParticle()
  hue++;
  requestAnimationFrame(animate)
  // ctx.filter = "blur(10px)"
}

animate()