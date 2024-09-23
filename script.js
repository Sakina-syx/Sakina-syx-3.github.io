const ball = document.getElementById('ball');
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentColorIndex = 0;

function changeColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  ball.style.backgroundColor = colors[currentColorIndex];
}

// 使用requestAnimationFrame来检测小球位置
function checkCollision() {
  const rect = ball.getBoundingClientRect();
  const containerRect = document.body.getBoundingClientRect();
  
  // 检测小球是否触碰到容器边缘
  if (rect.top <= 0 || rect.bottom >= containerRect.height || rect.left <= 0 || rect.right >= containerRect.width) {
    changeColor();
  }
  
  requestAnimationFrame(checkCollision);
}

// 启动碰撞检测
checkCollision();
