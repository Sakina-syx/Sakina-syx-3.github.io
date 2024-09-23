const container = document.getElementById('container');
const numStars = 50;
const colors = ['white', 'yellow', 'red', 'blue', 'green'];
let stars = [];

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.vx = Math.random() * 2 - 1;
  star.vy = Math.random() * 2 - 1;
  container.appendChild(star);
  stars.push(star);
}

function moveStars() {
  stars.forEach(star => {
    let rect = star.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    // 碰撞检测
    if (rect.top <= 0 || rect.bottom >= containerRect.height) {
      star.vy = -star.vy;
      changeColor(star);
    }
    if (rect.left <= 0 || rect.right >= containerRect.width) {
      star.vx = -star.vx;
      changeColor(star);
    }

    // 移动星星
    star.style.top = `${rect.top + star.vy}px`;
    star.style.left = `${rect.left + star.vx}px`;
  });

  requestAnimationFrame(moveStars);
}

function changeColor(star) {
  let colorIndex = Math.floor(Math.random() * colors.length);
  star.style.backgroundColor = colors[colorIndex];
  star.style.boxShadow = `0 0 5px ${colors[colorIndex]}`;
}

// 创建星星
for (let i = 0; i < numStars; i++) {
  createStar();
}

// 开始动画
moveStars();
