const container = document.querySelector('.container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 10 + 5}px`;
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.vx = Math.random() * 5 - 2.5;
  star.vy = Math.random() * 5 - 2.5;
  star.colorIndex = 0;
  star.colors = ['yellow', 'red', 'blue', 'green'];
  container.appendChild(star);
  return star;
}

function updateStar(star) {
  star.style.left = `${parseFloat(star.style.left) + star.vx}px`;
  star.style.top = `${parseFloat(star.style.top) + star.vy}px`;
  
  const rect = star.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  
  if (rect.left <= containerRect.left || rect.right >= containerRect.right) {
    star.vx *= -1;
    changeColor(star);
  }
  
  if (rect.top <= containerRect.top || rect.bottom >= containerRect.bottom) {
    star.vy *= -1;
    changeColor(star);
  }
}

function changeColor(star) {
  star.style.backgroundColor = star.colors[star.colorIndex];
  star.colorIndex = (star.colorIndex + 1) % star.colors.length;
}

const stars = [];
for (let i = 0; i < 50; i++) {
  stars.push(createStar());
}

function animate() {
  stars.forEach(updateStar);
  requestAnimationFrame(animate);
}

animate();
